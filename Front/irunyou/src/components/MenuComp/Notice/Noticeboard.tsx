import React from "react";
import NoticeboardItem from "./Noticeboard-item";
import "./Noticeboard.css";
import MenuLogo from "../Mainmenu/MenuLogo";
import { Menu } from "@mui/material";

export default function noticeboard() {
  return (
    <div className="notice-container">
      <div className="irunyou-logo"><MenuLogo></MenuLogo></div>
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
        <div>작성날짜</div>
      </div>
      <div className="notice-list-container">
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
        <NoticeboardItem></NoticeboardItem>
      </div>
      <div className="noticeboard-footer"></div>
    </div>
  );
}
