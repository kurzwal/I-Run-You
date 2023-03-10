import "./IDPW.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useEmailStore from './emailStore';
import axios from "axios";

// 작성자 : 최예정
// 파일의 역할 : id, password 찾기 html
// 작성날짜 : 2023-01-18

// 업데이트 작성자 : -
// 업데이트 날짜 : -

export default function IDPW() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { email, setEmail } = useEmailStore();
    const [userName, setUserName] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string>('');

    // 아이디 찾기
    const movePage = useNavigate();

    // 2023-02-11 홍지혜 아이디 찾기 로직 수정
    const findId = () => {
        const data = {
            userName,
            userPhoneNumber
        }
        axios.post('http://localhost:4040/auth/findemail', data)
            .then((response) => {
                if (!response.data.status) { // 가입정보가 없을 시 안내 메시지 띄우고 끝남
                    return alert(response.data.message);
                }
                else {
                    const UserInformation = response.data.data;
                    // 상태를 바꾸어 밑에 사용할 구간에 넣어주어야한다.
                    const userEmail = UserInformation.userEmail;
                    setEmail(userEmail);
                    movePage("/Email")
                }
            }).catch((error) => {

            })
    }

    // 2023-02-06 홍지혜 임시비밀번호 발급 로직
    // 유저 정보(이메일)있는지 먼저 확인, 유저정보 없을시 안내메시지,  화면 넘어가지 않음
    // 유저 정보 있을 시 화면 넘어감
    // dto 값 : userEmail
    const findPassword = () => {

        const userEmail = {
            userEmail: id
        }

        axios.post('http://localhost:4040/auth/findPw', userEmail)
            .then((response) => {
                if (!response.data.status) {
                    setIsLoading(false)
                    return alert(response.data.message);
                } else {
                    setIsLoading(false)
                    movePage("/EMverify", { state: { id: id } });
                }
            })
            .catch((error) => {

            })

    }

    return (
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
                        <input className="form" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="NAME" />
                        <input className="form" type="text" onChange={(e) => setUserPhoneNumber(e.target.value)} placeholder="TEL" />
                        <br />
                        <button className="idpw-btn" type="button" onClick={() => findId()} >아이디 찾기</button>
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
                        <input className="form" type="text" placeholder="NAME" onChange={(e) => setName(e.target.value)} />
                        <input className="form" type="email" placeholder="EMAIL" onChange={(e) => setId(e.target.value)} />
                        <br />
                        <button className="idpw-btn" type="button" onClick={() => findPassword()}>임시비밀번호 발급</button>
                        <Link to="/Login">
                            <button className="idpw-btn" type="button">로그인</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}