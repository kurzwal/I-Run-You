import React, { Dispatch, SetStateAction } from 'react'
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

import './MyInfoVerify.css';

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';

import { useEffect, useState } from "react";

import axiosInstance from "../../../service/axiosInstance";

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>;
}

const theme:any = createTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
})



export default function MyInfoVerify({setModal}: Props) {

    const movePage = useNavigate();

const [userEmail, setUserEmail] = useState<string>('');

useEffect(()=> {
    axiosInstance.get('http://localhost:4040/irunyou/mypage').then((response) => {
        setUserEmail(response.data.data.userEmail);
    })
},[])

const [userPassword, setUserPassword] = useState<string>('');

const loginAction = () => {

    console.log(userEmail);

    return axios.post("http://localhost:4040/auth/login", {
        userEmail,
        userPassword
    }).then((response) => {
        
            const responseMessage = response.data.message;

            if (response.data.status) {
                movePage("/InfoModify");

            } else {
                alert('비밀번호를 확인하세요');
            }

        }).catch((error) => {
            alert(error.message);
        })

}

  return (
    <div id="info-modal" className="info-modal-overlay">
        <div className="info-modal-window">
            <div className="info-title">
                <h2 className='info-h2'>비밀번호 입력</h2>
            </div>
            <div className="content">
            <ThemeProvider theme={theme}>
                <TextField size='small' label="비밀번호 확인" type="password" sx={{width: "100%"}}  id="outlined-basic" variant="outlined" margin="normal" required onChange={(event) => setUserPassword(event.target.value)}/>
                    {/* <input className='singup-input' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호(8~16자까지 영문 대소문자/숫자/특수문자 사용)" /> */}
            </ThemeProvider>
            </div>
            <br />
            <div className="modal-btn">
                <button className="ok-btn submit-btn" onClick={() => loginAction()}>확인</button>
                <button className="submit-btn" onClick={() => setModal(false)}>취소</button>
            </div>
        </div>
    </div>
  )
}
