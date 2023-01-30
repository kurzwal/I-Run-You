import "./Login.css";
import { Link } from "react-router-dom";
import kakao from '../../assets/images/kakao_login_medium_wide.png';
import { useState } from "react";

// 작성자 : 최예정
// 파일의 역할 : id, password 찾기 html
// 작성날짜 : 2023-01-13

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-01-28


export default function Login() {

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const LoginHandler = () => {
        const data = {
            id,
            password
        }
    }

    
    const { Kakao }:Window = window;

    const loginWithKakao = () => {
        Kakao.Auth.authorize({
            // 나중에 주소 수정
            redirectUri : 'http://localhost:3000/Login/kakao',
            scope : "profile_nickname, account_email",
        });
    };

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
                <div className="kakao-login">
                    <img onClick={loginWithKakao} className="kakao-login-img" src={ kakao } />
                </div>
                {/* 로그인, 회원가입 각 버튼 */}
                <div className="login-signup-button">
                    <Link to="/Login">
                    <button className="login-button button" onClick={() => LoginHandler()}>로그인</button>
                    </Link>
                    <Link to="/Signup">
                        <button className="signup-button button" >회원가입</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}