// 홍지혜 2023-02-01
// 공지사항 목록 페이지
import React, { useEffect, useState } from "react";
import "./Noticeboard.css";
import MenuLogo from "../Mainmenu/MenuLogo";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Pagination, PaginationItem } from "@mui/material";

export default function Noticeboard() {
  const [noticeList, setNoticeList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (e : React.ChangeEvent<unknown>, page:number) => {
    setCurrentPage(page);
  }

  const getNoticeList = async () => {
    await axios
      .get("http://localhost:4040/irunyou/notice/")
      .then((response) => {
        const noticeList = response.data.data;
        setNoticeList(noticeList);
      })
      .catch((error) => {});
    
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <div className="notice-container">
      <div className="irunyou-logo">
        <MenuLogo></MenuLogo>
      </div>
      <div className="notice-header">
        <div className="notice-text">I RUN YOU 공지사항</div>
      </div>
      <div className="notice-information">
        <div>공지사항</div>
        <div>I RUN YOU의 공지사항을 조회합니다.</div>
      </div>
      <div className="notice-key-container">
        <div>번호</div>
        <div>제목</div>
      </div>
      <div className="notice-list-container">
        {noticeList &&
          noticeList.map((notice: any) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="noticeboard-item-container">
                  <div className="notice-board-number">1</div>
                  <div className="noticeboard-title">{notice.noticeTitle}</div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="notice-content-box">
                  <div>{notice.noticeContent}</div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      <div className="noticeboard-footer">
        <Pagination
          count={Math.ceil(noticeList.length / 10)}
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
        {/* <div className="noticeboard-page-button">
          <ChevronLeftIcon />
        </div>
        <div>1</div>
        <div className="noticeboard-page-button">
          <ChevronRightIcon />
        </div> */}
      </div>
    </div>
  );
}
