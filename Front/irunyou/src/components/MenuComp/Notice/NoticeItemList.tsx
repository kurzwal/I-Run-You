import React, { useEffect, useState, useContext} from "react";
import axios, { AxiosResponse } from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Pagination, PaginationItem } from "@mui/material";


export default function NoticeItemList() {
    const [noticeList, setNoticeList] = useState<any[]>([]);
    const [totalElements, setTotalElements] = useState(1);
    const [totalPages, setTotlaPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }

    const getNoticeList = async () => {
        await axios
            .get("http://localhost:8080/irunyou/notice", {
                params: {
                    page: currentPage
                }
            })
            .then((response) => {
                const noticeList = response.data.data.data;
                setTotalElements(response.data.data.pageInfoDto.totalElements);
                setTotlaPages(response.data.data.pageInfoDto.totalPages);
                setNoticeList(noticeList);
            })
            .catch((error) => { });

    };

    useEffect(() => {
        getNoticeList();
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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="noticeboard-item-container">
                                    <div className="notice-board-number">{(index + 1) + (currentPage - 1) * (totalPages + 1)}</div>
                                    <div className="noticeboard-title">{notice.noticeTitle}</div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="notice-content-container">
                                    <div className="notice-content">{notice.noticeContent}</div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </div>
            <Pagination
                onClick={() => { getNoticeList(); }}
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