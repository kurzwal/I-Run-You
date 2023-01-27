import "./Login.css";
import { Link } from "react-router-dom";

// 작성자 : 최예정
// 파일의 역할 : id, password 찾기 html
// 작성날짜 : 2023-01-13

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-01-19

export default function Login() {
    return(
        <div className="login-container">
            {/* 로그인 전체 form */}
            <form id="input-form" className="form-contant">
                    <h1 className="login-form">LOGIN</h1>
                {/* 아이디(이메일), 비밀번호 입력창 */}
                <fieldset>
                    <div className="input-border">
                        <input className="email-input" type="text" placeholder="아이디(이메일)" required />
                        <input className="password-input" type="password" placeholder="비밀번호(8~16자 숫자, 영문, 특수문자)" required />
                    </div>
                </fieldset>
                <div className="box">
                        <input className="id-save" type="checkbox" id="checkid" name="checkid" />
                        <label htmlFor="checkid"> 아이디 저장</label>
                </div>
                {/* 아이디(이메일), 비밀번호 찾는 링크 */}
                <div className="email-password-find">
                    <Link to="/IDPW">아이디 / 비밀번호 찾기</Link>
                </div>
                {/* 간편 로그인 */}
                <div className="other-login">
                    <div className="line"></div>
                    <div className="other-login-text">간편 로그인</div>
                    <div className="line"></div>
                </div>
                <div className="other-login-button">
                    <div className="kakao-login">
                        <img src="../images/kakao_login_medium_wide.png" width="280px" height="45px" />
                    </div>
                    <div className="google-login">
                        <img src="../images/btn_google_signin_light_normal_web.png" width="285px" height="45px" />
                    </div>
                </div>
                {/* 로그인, 회원가입 각 버튼 */}
                <div className="login-signup-button">
                    <Link to="/Login">
                    <button className="login-button button">로그인</button>
                    </Link>
                    <Link to="/Signup">
                        <button className="signup-button button" >회원가입</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}