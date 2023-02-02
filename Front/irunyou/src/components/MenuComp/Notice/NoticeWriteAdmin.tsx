import React, { useEffect, useState, useContext } from "react";
import "./Noticeboard.css";
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import { create } from "domain";
import axios from "axios";
import { useNavigate } from "react-router";



export default function NoticeWriteAdmin() {

    const theme = createTheme({
        palette: {
            success: {
                main: '#b6cf55',
            },
        },
    });

    const [noticeTitle, setNoticeTitle] = useState<string>('');
    const [noticeContent, setNoticeContet] = useState<string>('');


    const postNotice = async () => {
        await axios
            .post("http://localhost:8080/irunyou/notice", {
                noticeTitle,
                noticeContent
            }).then((response) => {

                if(!response.data.status) {
                    alert(response.data.message);
                } else {
                    alert(response.data.message);
                    
                }
            }).catch((error) => {
                alert(error.response.message);
            })
    }
   
    return (
        <>
            <div className="notice-write-container">
                <div className="notice-title-inputs">
                    <div>제목</div>
                    <input type="text" placeholder="제목을 입력하세요." onChange={(e) => setNoticeTitle(e.target.value)}></input>
                </div>
                <div className="notice-content-inputs">
                    <textarea placeholder="파파존스 페퍼로니 페퍼로니추가 엑스트라치즈 체다치즈 소스많이" onChange={(e) => setNoticeContet(e.target.value)}></textarea>
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
                        }}>
                        취소
                    </Button>
                </ThemeProvider>
            </div>
        </>
    )

}