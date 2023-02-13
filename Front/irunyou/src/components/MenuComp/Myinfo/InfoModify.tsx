import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";

import DaumPostCode from 'react-daum-postcode';

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';

import useToggleStore from '../../../view/Store';
import axiosInstance from "../../../service/axiosInstance";


// 작성자 : 문경원
// 파일의 역할 : 정보수정창
// 작성날짜 : 2023-02-10

// 작성자 : 최예정
// 업데이트 날짜 : 2023-02-13

const theme:any = createTheme({
    palette: {
        primary: {
            main: '#b6cf55'
        }
    }
})


// 서버에서 토큰인증 받으면 유저정보 넘겨주기
// 그 정보 input창에 뿌려주기
export default function InfoModify() { 

    const [userName, setUserName] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userPassword2, setUserPassword2] = useState<string>('');
    const [userAddress, setUserAddress] = useState<string>('');
    const [userAddressDetail, setUserAddressDetail] = useState<string>('');
    const [postNumber, setPostNumber] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userFirstName, setUserFristName] = useState<string>('');

    const [postPopup, setPostPopup] = useState<boolean>(false);

    const [idCheckResult, setIdCheckResult] = useState<number>(0);
    const [idCheckResultMsg, setIdCheckResultMsg] = useState<string>('');

    const [nicknameCheckResult, setNicknameCheckResult] = useState<number>(0);
    const [nicknameCheckResultMsg, setNicknameCheckResultMsg] = useState<string>('');

    const navigator = useNavigate();

    // 우편번호 검색
    const handleComplete = (data: any) => {
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
        }
        setUserAddress(data.address);
        setUserAddressDetail(extraAddress);
        setPostNumber(data.zonecode);
    }

    const onSubmitHandler = () => {
        const data = {
            userName,
            userNickname,
            userEmail,
            userPassword,
            userPassword2,
            postNumber,
            userAddress,
            userAddressDetail,
            userPhoneNumber
        }

        if (data.userNickname == '') {
            alert ("닉네임을 입력하세요")
            return;
        } else if (data.userAddress == '') {
            alert ("주소를 입력하세요")
            return;
        } else if (data.userPhoneNumber == '') {
            alert("전화번호를 입력하세요")
            return;
        } else if (userFirstName !== userNickname && nicknameCheckResult === 0) {
            alert("닉네임 중복확인은 필수입니다")
            return;
        } else if (nicknameCheckResult === -1) {
            alert("다른 닉네임으로 설정해주세요")
            return;
        } else {
            axios.post('http://localhost:4040/auth/signup', data).then((response) => {
                const UserInformation = response.data.user;
                navigator('/SUSC');
            })
        }
    }
    // 중복된 닉네임 확인
    // 홍지혜 2023-02-02 중복 닉네임 로직 수정
    const onExistIdHandler2 = () => {
        if (userFirstName == userNickname) {
            return;
        }
        const data = {
            userNickname : userNickname
        };
        axios.post('http://localhost:4040/auth/checkNickname', data)
        .then((response) => {
            const result = response.data.status;
            const message = response.data.message;
            if (result) {
                setNicknameCheckResult(1);
                setNicknameCheckResultMsg(message)
            } else {
                setNicknameCheckResult(-1);
                setNicknameCheckResultMsg(message)
            }
        })
    } 


    // 홍지혜 2023-02-02 중복 아이디 로직 수정
    // 응답 status 가 true면 result : 1 ("사용가능 이메일")
    // false면 result -1 ("이메일 창 비어있음","중복된 이메일")
    // back에서 보내주는 메시지가 출력되게 response.data.message로 useState 추가 -> falid 된 결과가 하나가 아니기 떄문

    // 중복된 아이디(이메일) 확인
    const onExistIdHandler = () => {
        const data = {
            userEmail
        };
        axios.post('http://localhost:4040/auth/checkId', data).then((response) => {

            const result = response.data.status
            const message = response.data.message
            if (result) {
                setIdCheckResult(1);
                setIdCheckResultMsg(message)
            } else {
                setIdCheckResult(-1);
                setIdCheckResultMsg(message)
            }
        })
    }

    useEffect(()=> {
        axiosInstance.get('http://localhost:4040/irunyou/mypage').then((response) => {
            setUserName(response.data.data.userName);
            setUserNickname(response.data.data.userNickname)
            setUserEmail(response.data.data.userEmail);
            setPostNumber(response.data.data.postNumber);
            setUserAddress(response.data.data.userAddress);
            setUserAddressDetail(response.data.data.userAddressDetail);
            setUserPhoneNumber(response.data.data.userPhoneNumber);
            setUserFristName(response.data.data.userNickname);
        })
    },[])

    return (
    <div className="signup-container">
        <div className="user-config">
            <h1>회원정보 수정</h1>
        </div>
        <div className="config-container">
            <ThemeProvider theme={theme}>
                <div className="config-input">
                    <TextField size='small' label="이름" sx={{width: "80%", opacity: 0.7}} InputProps={{readOnly: true,}} value = {userName || ""} id="userName" variant="outlined" margin="normal" required/>
                </div>
                <div className="config-input">
                    <TextField size='small' label="닉네임" sx={{width: "80%"}} onChange={(e) => setUserNickname(e.target.value)} value = {userNickname || ""}  id="userNickName" variant="outlined" margin="normal" required/>
                    <button onClick={() => onExistIdHandler2()} className='check-btn' type='button'>중복확인</button>
                </div>
                {
                    nicknameCheckResult === 1 ? (<div className='success' id='check-error'>{nicknameCheckResultMsg}</div>) :
                    nicknameCheckResult === -1 ? (<div className='failed' id='check-error'>{nicknameCheckResultMsg}</div>) :
                    (<></>)
                }
                <div className="config-input">
                    <TextField size='small' label="아이디(이메일)" sx={{width: "80%", opacity: 0.7}} onChange={(e) => setUserEmail(e.target.value)} InputProps={{readOnly: true,}} value = {userEmail || ""} id="userEmail" variant="outlined" margin="normal" required/>
                </div>
                {
                    idCheckResult === 1 ? (<div className='success' id='check-error'>{idCheckResultMsg}</div>) :
                    idCheckResult === -1 ? (<div className='failed' id='check-error'>{idCheckResultMsg}</div>) :
                    (<></>)
                }
                <div className="config-input">
                <TextField size='small' label="우편 찾기" sx={{width: "80%"}} onChange={(e) => setPostNumber(e.target.value)} value = {postNumber || ""} id="outlined-basic" variant="outlined" margin="normal" required/>
                    <button className='check-btn' onClick={() => setPostPopup(true)}>주소검색</button>
                </div>
                    <div className="address-input config-input">
                    <TextField value={userAddress} size='small' label="주소" sx={{width: "80%"}} onChange={(e) => setUserAddress(e.target.value)} id="userAddress" variant="outlined" margin="normal" required/>
                    </div>
                    <div className="address-input2 config-input">
                    <TextField size='small' label="나머지 주소" sx={{width: "80%"}} onChange={(e) => setUserAddressDetail(e.target.value)} value = {userAddressDetail || ""} id="userAddressDetail" variant="outlined" margin="normal"/>
                    </div>
                <div className="config-input">
                <TextField size='small' label="휴대전화" sx={{width: "80%"}} onChange={(e) => setUserPhoneNumber(e.target.value)} value = {userPhoneNumber || ""} id="userPhoneNumber" variant="outlined" margin="normal" required/>
                </div>
                {postPopup && (<DaumPostCode onComplete={handleComplete} className="post-code"/>)}
                
            </ThemeProvider>
        </div>
        <div className='Signup-submit-btn'>
            <Link to="/MainPage">
                <button className='signup-btn'>이전으로</button>
            </Link>
            {/* onclick을 했을 경우 사용자에게 받은 정보를 백으로 전송 */}
            <button className='signup-btn' onClick={() => onSubmitHandler()}>저장하기</button>
        </div>
    </div>
    )
}