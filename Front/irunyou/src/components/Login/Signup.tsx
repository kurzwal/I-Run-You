import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

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

    const [idCheckResult, setIdCheckResult] = useState<number>(0);
    const [nicknameCheckResult, setNicknameCheckResult] = useState<number>(0);

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

        axios.post('http://localhost:4040/irunyou/auth/signup', data).then((response) => {
            const UserInformation = response.data.user;
            alert(data);
        })
    }

    // 중복된 닉네임 확인
    const onExistIdHandler2 = () => {
        const data = {
            userNickname
        };
        axios.post('http://localhost:4040/irunyou/checkNickname', data).then((response) => {
            const result = response.data.result;
            if(result) setNicknameCheckResult(-1);
            else setNicknameCheckResult(1);
        })
    } 

    // 중복된 아이디(이메일) 확인
    const onExistIdHandler = () => {
        const data = {
            userEmail
        };
        axios.post('http://localhost:4040/irunyou/checkId', data).then((response) => {
            const result = response.data.result;
            if (result) setIdCheckResult(-1);
            else setIdCheckResult(1);
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
                    <button onClick={() => onExistIdHandler2()} className='check-btn'>중복확인</button>
                </div>
                {
                    nicknameCheckResult === 1 ? (<div className='success' id='check-error'>사용 가능한 닉네임입니다.</div>) :
                    nicknameCheckResult === -1 ? (<div className='failed' id='check-error'>중복된 닉네임입니다.</div>) :
                    (<></>)
                }
                <div className="config-input">
                    <TextField size='small' label="아이디(이메일)" sx={{width: "80%"}} onChange={(e) => setUserEmail(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setId(e.target.value)} type="email" placeholder="아이디(이메일)" /> */}
                    <button onClick={() => onExistIdHandler()} className='check-btn'>중복확인</button>
                </div>
                {
                    idCheckResult === 1 ? (<div className='success' id='check-error'>사용 가능한 아이디입니다.</div>) :
                    idCheckResult === -1 ? (<div className='failed' id='check-error'>중복된 아이디입니다.</div>) :
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
                <TextField size='small' label="우편 찾기" sx={{width: "80%"}} onChange={(e) => setPostNumber(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setPostNumber(e.target.value)} type="text" placeholder="우편찾기" /> */}
                    <button className='check-btn'>주소검색</button>
                </div>
                    <div className="address-input config-input">
                    <TextField size='small' label="주소" sx={{width: "80%"}} onChange={(e) => setUserAddress(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                        {/* <input className='singup-input' onChange={(e) => setAddress(e.target.value)} type="text" placeholder="주소" /> */}
                    </div>
                    <div className="address-input2 config-input">
                    <TextField size='small' label="나머지 주소" sx={{width: "80%"}} onChange={(e) => setUserAddressDetail(e.target.value)} id="outlined-basic" variant="outlined" margin="normal"/>
                        {/* <input className='singup-input' onChange={(e) => setAddressDetail(e.target.value)} type="text" placeholder="나머지주소" /> */}
                    </div>
                <div className="config-input">
                <TextField size='small' label="휴대전화" sx={{width: "80%"}} onChange={(e) => setUserPhoneNumber(e.target.value)} id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' type="text" placeholder="휴대전화" /> */}
                </div>
            </ThemeProvider>
        </div>
        <div className='Singup-submit-btn'>
            <Link to="/Login">
                <button className='signup-btn'>이전으로</button>
            </Link>
            <Link to="/SUSC">
            {/* onclick을 했을 경우 백으로 전송 */}
                <button className='signup-btn' onClick={() => onSubmitHandler()}>회원가입</button>
            </Link>
        </div>
    </div>
    )
}