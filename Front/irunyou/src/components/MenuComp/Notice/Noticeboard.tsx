// 홍지혜 2023-02-01 
// 공지사항 목록 페이지
import React from "react";
import NoticeboardItem from "./Noticeboard-item";
import "./Noticeboard.css";
import MenuLogo from "../Mainmenu/MenuLogo";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";
import axios from "axios";


class Noticeboard extends React.Component {

  state = {
    noticeList : [] as any
  }

  getNoticeList = async() => {  // 로딩 시간 필요
    const {
      data: {
        noticeList,
      }
    } = await axios.get("http://localhost:4040/notice");  // get 실행 기다릴것
    
    this.setState({noticeList});  // 동일 이름 축약가능
  }

  componentDidMount() {
   this.getNoticeList(); 
  }

  render () {

    const {noticeList} = this.state;
    
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
          {noticeList.map((notice : any) => {
            return (
              <NoticeboardItem
                key={notice.noticeIndex}
                title={notice.noticeTitle}
                // datetime={notice.datetime}
              />
            )
          })}
        </div>
        <div className="noticeboard-footer">
          <div className="noticeboard-page-button">
            <ChevronLeftIcon />
          </div>
          <div>1</div>
          <div className="noticeboard-page-button">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default Noticeboard;
