import React, { useEffect, useState, useContext } from "react";
import "./Noticeboard.css";
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import { create } from "domain";
import axios from "axios";
import { useNavigate } from "react-router";
import NoticeHeader from "./NoticeHeader";
import { resourceLimits } from "worker_threads";
import { useLocation } from "react-router";


export default function NoticeModifyAdmin() {

    const theme = createTheme({
        palette: {
            success: {
                main: '#b6cf55',
            },
        },
    });

    const location = useLocation();

    const noticeIndex = location.state.noticeIndex;
    const [noticeTitle, setNoticeTitle] = useState<string>(location.state.noticeTitle);
    const [noticeContent, setNoticeContent] = useState<string>(location.state.noticeContent);

    const movePage = useNavigate();

    const postNotice = async () => {

        if(!noticeTitle) {
            return alert("제목을 비울 수 없습니다.")
        }

        if(!noticeContent) {
            return alert("내용을 비울 수 없습니다.")
        }

        await axios
            .patch("http://localhost:4040/irunyou/notice", {
                noticeIndex,
                noticeTitle,
                noticeContent
            }, {
                headers : {
                    Authorization: "Bearer " + window.localStorage.getItem('token')
                }
            }).then((response) => {
                if(!response.data.status) {
                    alert(response.data.message);
                } else {
                    alert(response.data.message);
                    movePage("/Notice");     
                }
            }).catch((error) => {
                alert("오류가 발생했습니다.");
            })
    }

    const isRealCancel = () => {

        let isCancel = window.confirm("정말 취소하시겠습니까? (작성 중인 공지사항의 내용은 저장되지 않습니다.)")
 
        if(isCancel) {
            movePage("/Notice");
        } 
    }

   
    return (
        <>
            <NoticeHeader></NoticeHeader>
            <div className="notice-write-container">
                <div className="notice-title-inputs">
                    <div>제목</div>
                    <input type="text" value={noticeTitle} maxLength={40} onChange={(e) => setNoticeTitle(e.target.value)}></input>
                </div>
                <div className="notice-content-inputs">
                    <textarea value={noticeContent} onChange={(e) => setNoticeContent(e.target.value)}></textarea>
                </div>
            </div>
            <div className="notice-write-btns">
                <ThemeProvider theme={theme}>
                    <Button variant="contained" disableElevation color="success"
                    style={{
                        width: "100px",
                        color : "white"
                    }} onClick={() => postNotice()}>
                        등록
                    </Button>
                    <Button variant="outlined" disableElevation color="success"
                        style={{
                            width: "100px",
                        }}
                        onClick={() => isRealCancel()}>
                        취소
                    </Button>
                </ThemeProvider>
            </div>
        </>
    )

}