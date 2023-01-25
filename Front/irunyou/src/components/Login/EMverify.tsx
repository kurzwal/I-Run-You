import './EMverify.css';
import { Link } from "react-router-dom";

export default function EMverify() {
    return(
        <div className="email-container">
        <i className="fa-regular fa-envelope"></i>
        <p>회원님 이메일로 메일이 전송되었습니다.</p>
        <div className="btn-con">
            <Link to="/IDPW">
                <button>이전으로</button>
            </Link>
            <button>메일 재전송</button>
        </div>
    </div>
    );
}