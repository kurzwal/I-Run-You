// 홍지혜 2023-02-01 
// 공지사항 목록 요소

import { Link } from "react-router-dom";
import "./Noticeboard.css";
import PropTypes  from "prop-types";

function NoticeboardItem(props : { title : any }) { {/*, datetime : string */}
  return (
    <Link to={{}}>
      <div className="noticeboard-item-container">
        <div className="notice-board-number">1</div>
        <div className="noticeboard-title">{props.title}</div>
        {/* <div className="noticeboard-datetime">{props.datetime}</div> */}
      </div>
    </Link>
  );
}

NoticeboardItem.propTypes = {
  title : PropTypes.string.isRequired,
  // datetime : PropTypes.string.isRequired,
};

export default NoticeboardItem;
