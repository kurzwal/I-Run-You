import './PWchange.css';
import { Link } from "react-router-dom";

// 작성자 : 최예정
// 파일의 역할 : 비밀번호 변경 html
// 작성날짜 : 2023-01-20

// 업데이트 작성자 : -
// 업데이트 날짜 : -

export default function PWchange() {
    return(
        <div className="pwfind-container">
        <div className="box-header">
            <h1>비밀번호 변경</h1>
        </div>
        <form className="form-input">
            <div className="pwfind-form">
                <div className="pw">현재 비밀번호 </div>
                <input type="password" />
            </div>
            <div className="pwfind-form">
                <div className="pw">새 비밀번호</div>
                <input type="password" />
            </div>
            <div className="form-text">
                (8~16자까지 영문 대소문자/숫자/특수문자 사용)
            </div>
            <div className="pwfind-form">
                <div className="pw">새 비밀번호 확인</div>
                <input type="password" />
            </div>
            <div className="form-text">
                (8~16자까지 영문 대소문자/숫자/특수문자 사용)
            </div>
        </form>
        <div className="btn">
            <Link to="메인화면">
            <button>홈으로</button>
            </Link>
            <Link to="/Login">
            <button>확인</button>
            </Link>
        </div>
    </div>
    );
}