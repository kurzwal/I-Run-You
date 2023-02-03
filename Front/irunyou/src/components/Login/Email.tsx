import './Email.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

// 작성자 : 최예정
// 파일의 역할 : 찾은 아이디 표시 html
// 작성날짜 : 2023-01-26

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-02-03

export default function Email() {

    const [userEmail, setUserEmail] = useState<string>('');

    // 데이터베이스에 저장되어있는 아이디 가져오기 (POST로 가지고 와야함)
    const findEmail= () => {
        axios.post('http//localhost:4040/irunyou/', findEmail).then((response) => {
            const UserInformation = response.data.user;
            // 상태를 바꾸어 밑에 사용할 구간에 넣어주어야한다.
            const { userEmail } = UserInformation;
            setUserEmail(userEmail);
        })
    }
    
    // 띄운다면 뒤에 세 자리를 숨기고 싶은데 그 부분은 백에서 구현을 해야하는지


    return(
        <div className='Email-container'>
            <div className='header'>
                <h1 className='idfind-header'>아이디 찾기</h1>
                <p>개인정보 도용에 대한 피해방지를 막기 위하여 아이디 끝 3자리를 ***처리합니다.</p>
            </div>
            <div className='Email-main'>
                <p>회원님 아이디는 [ <span className='email'> { userEmail } </span> ] 입니다.</p>
            </div>
            <div className='footer'>
                <Link to="/Login">
                    <button className='footer-btn'>로그인</button>
                </Link>
                <Link to="/IDPW">
                    <button className='footer-btn'>비밀번호 찾기</button>
                </Link>
            </div>
        </div>
    );
}