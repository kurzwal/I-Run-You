import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';

import './MyInfoVerify.css';

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>;
}

const theme:any = createTheme({
    palette: {
        primary: {
            main: '#b6cf55'
        }
    }
})

export default function MyInfoVerify({setModal}: Props) {
  return (
    <div id="info-modal" className="info-modal-overlay">
        <div className="info-modal-window">
            <div className="info-title">
                <h2>비밀번호 입력</h2>
            </div>
            <div className="content">
            <ThemeProvider theme={theme}>
                <TextField size='small' label="비밀번호(8~16자까지 영문 대소문자/숫자)" type="password" sx={{width: "80%"}}  id="outlined-basic" variant="outlined" margin="normal" required/>
                    {/* <input className='singup-input' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호(8~16자까지 영문 대소문자/숫자/특수문자 사용)" /> */}
            </ThemeProvider>
            </div>
            <br />
            <div className="modal-btn">
                <Link to="/Loginmain">
                <button className="ok-btn submit-btn">확인</button>
                </Link>
                <button className="submit-btn" onClick={() => setModal(false)}>취소</button>
            </div>
        </div>
    </div>
  )
}
