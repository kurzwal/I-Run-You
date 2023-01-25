import './SUSC.css';
import { Link } from "react-router-dom";

export default function SUSC() {
    return(
        <div className="susc-container">
        <div className="susc-box">
            <img src="../images/main-logo.svg" alt="" />
            <h1>
                회원가입을 축하합니다.
            </h1>
            <p>
                로그인 후 바로 사이트 이용이 가능합니다. 아래 버튼을 눌러서 로그인 해주세요.
            </p>
            <Link to="/Login">
            <button>시작하기</button>
            </Link>
        </div>
    </div>
    );
}