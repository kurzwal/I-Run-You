import "./myinfo.css";
import InfoItem from "./InfoItem";
import Button from '@mui/material/Button';

import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import MyInfoVerify from './MyInfoVerify';

export default function MyInfoBody() {

    const [modal, setModal] = useState<boolean>(false);

    const movePage = useNavigate();

    const LogoutActionHandler = () => {
        localStorage.clear();
        alert("로그아웃 되었습니다.")
        window.location.href="/"
    }

    return (
        <div className="info-container">
            <div className="user-info-btn-container">
                <Button variant="outlined" onClick={() => {LogoutActionHandler()}}>로그아웃</Button>
                <Button variant="outlined" onClick={() => setModal(true)}>회원정보 수정</Button>
            </div>
            { modal && (<MyInfoVerify setModal={setModal} />) }
            {/* <Button variant="contained" color="error">회원 탈퇴</Button> */}
        </div>
    );
}