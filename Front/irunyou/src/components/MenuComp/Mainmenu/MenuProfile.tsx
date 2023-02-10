import { useLocation } from "react-router";
import "./menu.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useToggleStore from '../../../view/Store';

// 업데이트 : 2023-02-07 홍지혜 - 로그아웃 버튼 추가, 닉네임 6자 이상일 시 '...' 처리, 프로필 링크 userNickname부분으로 이동

export default function MenuProfile() {

    const location = useLocation();
    const { setMenuMyInfo } = useToggleStore();    
    const [userNickname,setUserNickname] = useState<string>(location.state.userNickname);

    const LogoutActionHandler = () => {
        localStorage.clear();
        alert("로그아웃 되었습니다.")
        window.location.href="/"
    }

    // 리액트 무한루프 랜더링 방지 useEffect로 감싸줌 (useState -> 비동기 : 예측대로 랜더링되지 않고 꼬여버림)
    useEffect(()=> {
        if(userNickname.length > 6) {
            setUserNickname(userNickname.slice(0,4).concat("..."));
        }
    },[userNickname])

    return (
        <div className="menu-profile">
            <div className="profile-img-continer">
                <i className="fa-solid fa-user-large"></i>
            </div>
            <div className="profile-text" onClick={setMenuMyInfo}>{userNickname}</div>
            <div className="profile-welcome">님, 환영합니다.</div>
            <Button color="error" onClick={() => {LogoutActionHandler()}} style={{ padding: "0 10px" }}>로그아웃</Button>
        </div>
    )
}
