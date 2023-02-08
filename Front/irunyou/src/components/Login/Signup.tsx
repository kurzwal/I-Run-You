import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

import DaumPostCode from 'react-daum-postcode';

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';


// 작성자 : 최예정
// 파일의 역할 : 회원가입 html
// 작성날짜 : 2023-01-16

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-01-30

// 업데이트 작성자 : 최예정
// 업데이트 내용 : 아이디(이메일) 중복 확인
// 업데이트 날짜 : 2023-02-01

// 업데이트 작성자 : 문경원
// 업데이트 내용 : 우편번호찾기
// 업데이트 날짜 : 2023-02-06

const theme:any = createTheme({
    palette: {
        primary: {
            main: '#b6cf55'
        }
    }
})

export default function Signup() {

    const [userName, setUserName] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userPassword2, setUserPassword2] = useState<string>('');
    const [userAddress, setUserAddress] = useState<string>('');
    const [userAddressDetail, setUserAddressDetail] = useState<string>('');
    const [postNumber, setPostNumber] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');


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
            userAddress: `${postNumber} ${userAddress}`,
            userAddressDetail,
            userPhoneNumber
        }

        if (data.userName == '') {
            alert ("이름을 입력하세요");
            return;
        } else if (data.userNickname == '') {
            alert ("닉네임을 입력하세요")
            return;
        } else if (data.userPassword == '') {
            alert ("비밀번호를 입력하세요")
            return;
        } else if (data.userPassword2 == '') {
            alert ("비밀번호확인을 입력하세요")
            return;
        } else if (data.userAddress == '') {
            alert ("주소를 입력하세요")
            return;
        } else if (data.userPhoneNumber == '') {
            alert("전화번호를 입력하세요")
            return;
        } else if (nicknameCheckResult === 0) {
            alert("닉네임 중복확인은 필수입니다")
        } else if (idCheckResult === 0) {
            alert("이메일 중복확인은 필수입니다")
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
    
    

    return (
    <div className="signup-container">
        <div className="user-config">
            <h1>회원정보 입력</h1>
        </div>
        <div className="config-container">
            <ThemeProvider theme={theme}>
                <div className="config-input">
                    <TextField size='small' label="이름" sx={{width: "80%"}} onChange={(e) => setUserName(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setName(e.target.value)} type="text" placeholder="이름" /> */}
                </div>
                <div className="config-input">
                    <TextField size='small' label="닉네임" sx={{width: "80%"}} onChange={(e) => setUserNickname(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setNickname(e.target.value)} type="text" placeholder="닉네임" /> */}
                    <button onClick={() => onExistIdHandler2()} className='check-btn' type='button'>중복확인</button>
                </div>
                {
                    nicknameCheckResult === 1 ? (<div className='success' id='check-error'>{nicknameCheckResultMsg}</div>) :
                    nicknameCheckResult === -1 ? (<div className='failed' id='check-error'>{nicknameCheckResultMsg}</div>) :
                    (<></>)
                }
                <div className="config-input">
                    <TextField size='small' label="아이디(이메일)" sx={{width: "80%"}} onChange={(e) => setUserEmail(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" type="email" required/>
                    {/* <input className='singup-input' onChange={(e) => setId(e.target.value)} type="email" placeholder="아이디(이메일)" /> */}
                    <button onClick={() => onExistIdHandler()} className='check-btn'>중복확인</button>
                </div>
                {
                    idCheckResult === 1 ? (<div className='success' id='check-error'>{idCheckResultMsg}</div>) :
                    idCheckResult === -1 ? (<div className='failed' id='check-error'>{idCheckResultMsg}</div>) :
                    (<></>)
                }
                <div className="config-input">
                <TextField size='small' label="비밀번호(8~16자까지 영문 대소문자/숫자)" type="password" sx={{width: "80%"}} onChange={(e) => setUserPassword(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호(8~16자까지 영문 대소문자/숫자/특수문자 사용)" /> */}
                </div>
                <div className="config-input">
                <TextField size='small' label="비밀번호 확인" type="password" sx={{width: "80%"}} onChange={(e) => setUserPassword2(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="비밀번호 확인" /> */}
                </div>
                <div className="config-input">
                <TextField value={postNumber} size='small' label="우편 찾기" sx={{width: "80%"}} onChange={(e) => setPostNumber(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setPostNumber(e.target.value)} type="text" placeholder="우편찾기" /> */}
                    <button className='check-btn' onClick={() => setPostPopup(true)}>주소검색</button>
                </div>
                    <div className="address-input config-input">
                    <TextField value={userAddress} size='small' label="주소" sx={{width: "80%"}} onChange={(e) => setUserAddress(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                        {/* <input className='singup-input' onChange={(e) => setAddress(e.target.value)} type="text" placeholder="주소" /> */}
                    </div>
                    <div className="address-input2 config-input">
                    <TextField value={userAddressDetail} size='small' label="나머지 주소" sx={{width: "80%"}} onChange={(e) => setUserAddressDetail(e.target.value)} id="outlined-basic" variant="outlined" margin="normal"/>
                        {/* <input className='singup-input' onChange={(e) => setAddressDetail(e.target.value)} type="text" placeholder="나머지주소" /> */}
                    </div>
                <div className="config-input">
                <TextField size='small' label="휴대전화" sx={{width: "80%"}} onChange={(e) => setUserPhoneNumber(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' type="text" placeholder="휴대전화" /> */}
                </div>
                {postPopup && (<DaumPostCode onComplete={handleComplete} className="post-code"/>)}
                
            </ThemeProvider>
        </div>
        <div className='Signup-submit-btn'>
            <Link to="/Login">
                <button className='signup-btn'>이전으로</button>
            </Link>
            {/* onclick을 했을 경우 백으로 전송 */}
            <button className='signup-btn' onClick={() => onSubmitHandler()}>회원가입</button>
        </div>
    </div>
    )
}