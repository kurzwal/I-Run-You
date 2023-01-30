import './EMverify.css';
import { Link } from "react-router-dom";

// 작성자 : 최예정
// 파일의 역할 : 이메일 전송 html
// 작성날짜 : 2023-01-18

// 업데이트 작성자 : -
// 업데이트 날짜 : -

export default function EMverify() {
    return(
        <div className="email-container">
        <i className="fa-regular fa-envelope"></i>
        <p>회원님 이메일로 메일이 전송되었습니다.</p>
        <div className="btn-con">
            <Link to="/IDPW">
                <button em-btn>이전으로</button>
            </Link>
            <button em-btn>메일 재전송</button>
        </div>
    </div>
    );
}