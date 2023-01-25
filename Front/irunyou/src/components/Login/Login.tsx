import "./Login.css";
import { Link } from "react-router-dom";

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
                    <a href="http://127.0.0.1:5500/Front/vanilla/pages/login/html/IDPW.html">아이디 / 비밀번호 찾기</a>
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
                    <Link to="메인화면">
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