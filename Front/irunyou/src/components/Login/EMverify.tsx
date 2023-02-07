import './EMverify.css';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

// 작성자 : 최예정
// 파일의 역할 : 이메일 전송 html
// 작성날짜 : 2023-01-18

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-02-06

// 업데이트 작성자 : 홍지혜
// 업데이트 날짜 : 2023-02-06 이메일 재전송 기능, 이메일 재 전송시 버튼 Loading 표시

export default function EMverify() {

    const location = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    

    const findPassword = () => {
        
        setIsLoading(true)
        
        const password = {
            userEmail : location.state.id
        }
        axios.post('http://localhost:4040/auth/findPw', password)
        .then((response) => {
                alert("메일이 재전송 되었습니다.");
                setIsLoading(false)
                window.location.reload();
            }
        )
        .catch((error) => {
        
        })    
    }

    return(
        <div className="email-container">
            <i className="fa-regular fa-envelope"></i>
            <p>회원님 이메일로 메일이 전송되었습니다.</p>
            <div className="btn-con">
                <Link to="/IDPW">
                    <button className='em-btn'>이전으로</button>
                </Link>
                <button className="em-btn" type="button" onClick={()=>findPassword()}>{isLoading ? "Loading..." : "메일 재전송"}</button>
            </div>
        </div>
    );
}