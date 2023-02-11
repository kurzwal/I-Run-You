import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Pagination, PaginationItem } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import axiosInstance from "../../../service/axiosInstance";

export default function NoticeItemList() {
    const [noticeList, setNoticeList] = useState<any[]>([]);
    const [pageSize, setPageSize] = useState(1);
    const [totalElements, setTotalElements] = useState(1);
    const [totalPages, setTotlaPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const isAdmin = useState(true);

    const movePage = useNavigate();

    const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
        getNoticeList(page);
    }

    const modifyNotice = (noticedata : any) => {
        movePage("/Notice/Admin/Modify",{ state : noticedata })
    }

    
    const deleteNotice = async (index: number) => {

        let isDelete = window.confirm("정말 삭제하시겠습니까?");

        if (isDelete) {
            await axiosInstance
                .delete("irunyou/notice", {
                    params : { noticeIndex : index }
                })
                .then(response => {
                    if(!response.data.status) {
                        return alert(response.data.message);
                    }
                    alert(response.data.message);
                    window.location.reload();
                }).catch(error => {
                    alert(error.message)
                })
        }

    }

    const getNoticeList = async (page: number) => {
        await axiosInstance
            .get("irunyou/notice", {
                params: {
                    page: page
                }
            })
            .then(response => {
                const pageInfo = response.data.data.pageInfoDto;
                const noticeList = response.data.data.data;
                
                setPageSize(pageInfo.size);
                setTotalElements(pageInfo.totalElements);
                setTotlaPages(pageInfo.totalPages);
                setNoticeList(noticeList);
            }).catch((error) => {
                // alert(error.message);
            })
    };

    useEffect(() => {
        getNoticeList(1);
    }, []);

    return (
        <>
            <div className="notice-key-container">
                <div>번호</div>
                <div>제목</div>
            </div>
            <div className="notice-list-container">
                {noticeList &&
                    noticeList.map((notice: any, index) => (
                        <Accordion key={notice.noticeIndex}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="noticeboard-item-container">
                                    <div className="notice-board-number">{currentPage > 1 ? (index + 1) + (pageSize * (currentPage - 1)) : index + 1} </div>
                                    <div className="noticeboard-title">{notice.noticeTitle}</div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="notice-content-container">
                                    <div className="notice-content">{notice.noticeContent}</div> 
                                </div>
                                {isAdmin && <Button color="success" onClick={() => { deleteNotice(notice.noticeIndex) }} style={{ padding: "0 20px" }}>공지 삭제</Button>}
                                {isAdmin && <Button color="success" onClick={() => { modifyNotice(notice) }} style={{ padding: "0 20px" }}>공지 수정</Button>}
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </div>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={onPageChange}
                size="medium"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "15px 0",
                }}
                renderItem={(item) => (
                    <PaginationItem {...item} sx={{ fontSize: 12 }} />
                )}
            />
        </>
    );
}