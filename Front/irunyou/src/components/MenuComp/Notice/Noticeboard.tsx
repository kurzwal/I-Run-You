// 홍지혜 2023-02-01
// 공지사항 목록 페이지
import "./Noticeboard.css";


import NoticeWriteAdmin from "./NoticeWriteAdmin";
import NoticeHeader from "./NoticeHeader";
import NoticeItemList from "./NoticeItemList";

export default function Noticeboard() {

  return (
    <div className="notice-container">
      <NoticeHeader/>
      {(false) ? <NoticeItemList/> : <NoticeWriteAdmin/>}
    </div>
  );
}
