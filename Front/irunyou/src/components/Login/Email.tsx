import './Email.css';
import { Link } from "react-router-dom";

export default function Email() {
    const email = 'asdf@asdf.com';
    return(
        <div className='container'>
            <div className='header'>
                <h1>아이디 찾기</h1>
                <p>개인정보 도용에 대한 피해방지를 막기 위하여 아이디 끝 3자리를 ***처리합니다.</p>
            </div>
            <div className='main'>
                <p>회원님 아이디는 <span className='email'>{ email }</span>입니다.</p>
            </div>
            <div className='footer'>
                <Link to="/Login">
                    <button>로그인</button>
                </Link>
                <Link to="/IDPW">
                    <button>비밀번호 찾기</button>
                </Link>
            </div>
        </div>
    );
}