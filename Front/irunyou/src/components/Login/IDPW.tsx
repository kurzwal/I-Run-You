import "./IDPW.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// 작성자 : 최예정
// 파일의 역할 : id, password 찾기 html
// 작성날짜 : 2023-01-18

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-01-28

export default function IDPW() {

    const [userName, setUserName] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');

    const findId = () => {
        const id = {
            userName,
            userPhoneNumber
        }
        axios.post('http//localhost:4040/irunyou/', findId).then((response) => {
        const UserInformation = response.data.user;
        alert(findId);
        })
    }
    
    const findPassword = () => {
        const password = {
            userName,
            userEmail
        }
        axios.post('http//localhost:4040/irunyou/', findPassword).then((Response) => {
            const UserInformation = Response.data.user;
            alert(findPassword);
        })
    }

    // 아이디랑 비밀번호 찾는 공간이 한 페이지에 구현되어있는데
    // 백으로 따로 보낼 수 있는 방법

    return(
        <div className="idpw-container">
            <div className="container">
                <div className="form-container">
                    <h2 className="form-title">아이디 찾기</h2>
                    <p className="text">
                        회원가입 시, 입력하신 이름 + 전화번호로
                        <br />아이디를 확인하실 수 있습니다.
                    </p>
                </div>
                <div className="form-container">
                    <form className="id-form">
                        <input className="form" type="text" placeholder="NAME" />
                        <input className="form" type="text" placeholder="TEL" />
                        <br />
                        <Link to="/Email">
                            <button className="idpw-btn" type="button" onClick={() => findId()}>아이디 찾기</button>
                        </Link>
                        <Link to="/Login">
                            <button className="idpw-btn" type="button">로그인</button>
                        </Link>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="form-container">
                    <h2 className="form-title">비밀번호 찾기</h2>
                    <p className="text">
                        가입하신 이름 + 아이디(이메일),
                        <br />본인인증을 통해 이메일로 임시 비밀번호를 보내드립니다.
                        <br />확인 후 로그인하셔서 반드시 비밀번호를 변경하시기 바랍니다.
                    </p>
                </div>
                <div className="form-container">
                    <form className="pw-form">
                        <input className="form" type="text" placeholder="NAME" />
                        <input className="form" type="email" placeholder="EMAIL" />
                        <br />
                        <Link to="/EMverify">
                        <button className="idpw-btn" type="button">임시비밀번호 발급</button>
                        </Link>
                        <Link to="/Login">
                        <button className="idpw-btn" type="button">로그인</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}