import { Link } from "react-router-dom";
import "./Noticeboard.css";

export default function NoticeboardItem() {
  return (
    <Link to={{}}>
      <div className="noticeboard-item-container">
        <div className="notice-board-number">1</div>
        <div className="noticeboard-title">전체 공지사항</div>
        <div className="noticeboard-datetime">2023-02-01</div>
      </div>
    </Link>
  );
}
