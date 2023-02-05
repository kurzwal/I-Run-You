import React, { useEffect, useState, useContext } from "react";

import MenuLogo from "../Mainmenu/MenuLogo"
import "./Noticeboard.css";
import { Button } from "@mui/material";
import NoticeWriteAdmin from "./NoticeWriteAdmin";
import { Navigate, useNavigate } from "react-router";
import path from "path";
import NoticeItemList from "./NoticeItemList";

export default function NoticeHeader() {

    const isAdmin = useState(true);

    const movePage = useNavigate();

    return (
        <>
            <div onClick={() => { movePage("/MainPage") }} style={{ cursor: "pointer" }}>
                <MenuLogo />
            </div>
            <div className="notice-header">
                <div className="notice-text">
                    I RUN YOU 공지사항
                </div>
            </div>
            <div className="notice-information">
                <div className="notice-information-text">
                    <div>공지사항</div>
                    <div>I RUN YOU의 공지사항 게시판 입니다.</div>
                </div>
                {isAdmin && <Button color="success" onClick={() => { movePage("/Notice/Admin/Write") }} style={{ padding: "0" }}>공지 작성</Button>}
            </div>
        </>
    )

}