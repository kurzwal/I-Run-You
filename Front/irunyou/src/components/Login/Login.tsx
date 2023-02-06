import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import kakao from '../../assets/images/kakao_login_medium_wide.png';
import { useEffect, useState } from "react";
import axios from "axios";
import { usePreviousProps } from "@mui/utils";
import { useCookies } from "react-cookie";

const { Kakao }: Window = window;


// 작성자 : 최예정
// 파일의 역할 : id, password 찾기 html
// 작성날짜 : 2023-01-13

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-01-30

// 홍지혜 2023-02-01
// 로그인 -> 토큰 로컬스토리지 저장

// 홍지혜 2023-02-06
// 아이디 저장 -> 쿠키에 이메일 정보 저장

export default function Login() {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const [isRemember, setIsRemember] = useState(false);
    const [cookie, setCookie, removeCookie] = useCookies(['rememberEmail']);

    const movePage = useNavigate();

    const LoginAction = (userEmail: string, userPassword: string) => {

        return axios.post("http://localhost:4040/auth/login", {
            userEmail,
            userPassword
        }).then((response) => {
            
                const responseMessage = response.data.message;
                const tokendata = response.data.data;

                if (!response.data.status) {
                    alert(responseMessage);
                    movePage("/Login");

                } else {
                    localStorage.setItem('token', tokendata.token);
                    localStorage.setItem('expiration', "" + tokendata.expiration);
                    alert(responseMessage);
                    movePage("/MainPage");
                }

            }).catch((error) => {
                alert(error.message);
                movePage("/Login");
            })

    }

    const rememberEmail = (e : any) => {
        if(e.target.checked) {
            setIsRemember(true)
            setCookie('rememberEmail',userEmail,{maxAge : 2000});
        } else {
            setIsRemember(false)
            removeCookie('rememberEmail');
        }
    }


    // const loginButton = () => {

    //     LoginAction(userEmail,userPassword, movePage);

    // const data = {
    //     userEmail,
    //     userPassword
    // }

    // axios.post('http://localhost:4040/irunyou/auth/login', data)
    // .then((Response) => {
    //     const UserInformation = Response.data.user;
    //     console.log(UserInformation);

    //     if(!UserInformation) alert('입력하신 회원정보가 존재하지않습니다.');
    //     else movePage('/MainPage');
    // })
    // // 로그인을 할 시 사용자가 입력한 데이터가 일치하지 않을 경우 경고창 띄우기
    // // 지금 적어놓은 조건문은 else에 있는 조건문만 실행됨

    const loginButton = () => {
        
        LoginAction(userEmail,userPassword);

        const data = {
            userEmail,
            userPassword
        }

        axios.post('http://localhost:4040/irunyou/auth/login', data).then((Response) => {
            const UserInformation = Response.data.user;
            console.log(UserInformation);

            if(!UserInformation) alert('입력하신 회원정보가 존재하지않습니다.');
            else movePage('/MainPage');
        })
        // 로그인을 할 시 사용자가 입력한 데이터가 일치하지 않을 경우 경고창 띄우기
        // 지금 적어놓은 조건문은 else에 있는 조건문만 실행됨
    } 

    const loginWithKakao = () => {
        Kakao.Auth.authorize({
            // 나중에 주소 수정
            redirectUri: 'http://localhost:3000/Login/kakao',
            scope: "profile_nickname, account_email",
        });
    };

    useEffect(()=> {
        if(cookie.rememberEmail !== undefined) {
            setUserEmail(cookie.rememberEmail);
            setIsRemember(true);
        }
    },[]);


    return (
        <div className="login-container">
            {/* 로그인 전체 form */}
            <div id="input-form" className="form-contant">
                <h1 className="login-form">LOGIN</h1>
                {/* 아이디(이메일), 비밀번호 입력창 */}
                <fieldset>
                    <div className="input-border">
                        <input className="email-input login-input" type="text" placeholder="아이디(이메일)" value={cookie.rememberEmail} required onChange={(e) => setUserEmail(e.target.value)} />
                        <input className="password-input login-input" type="password" placeholder="비밀번호(8~16자 숫자, 영문, 특수문자)" required onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                </fieldset>
                <div className="box">
                    <input className="id-save" type="checkbox" id="checkid" name="checkid" onChange={(e) => rememberEmail(e)} checked={isRemember}/>
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
                    <img onClick={loginWithKakao} className="kakao-login-img" src={kakao} />
                </div>
                {/* 로그인, 회원가입 각 버튼 */}
                <div className="login-signup-button">
                    <Link to="/MainPage">
                        <button type="button" className="login-button button" onClick={() => loginButton()}>로그인</button>
                    </Link>
                    <Link to="/Signup">
                        <button className="signup-button button" >회원가입</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}