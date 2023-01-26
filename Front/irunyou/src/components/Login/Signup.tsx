import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';


export default function Signup() {

    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [addressDetail, setAddressDetail] = useState<string>('');
    const [postNumber, setPostNumber] = useState<string>('');
    const [telnumber, setTelnumber] = useState<string>('');

    const onSubmitHandler = () => {
        const data = {
            name,
            nickname,
            id,
            password,
            address: `${postNumber} ${address} ${addressDetail}`,
            telnumber
        }

        axios.post('http//localhost:4040/irunyou/', data).then((Response) => {
            const UserInformation = Response.data.user;
            alert(data);
        })
    }

    return (
<div className="signup-container">
        <div className="user-config">
            <h1>회원정보 입력</h1>
        </div>
        <div className="config-container">
            <div className="config-input">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="이름" />
            </div>
            <div className="config-input">
                <input onChange={(e) => setNickname(e.target.value)} type="text" placeholder="닉네임" />
                <button>중복확인</button>
            </div>
            <div className="config-input">
                <input onChange={(e) => setId(e.target.value)} type="email" placeholder="아이디(이메일)" />
                <button>중복확인</button>
            </div>
            <div className="config-input">
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호(8~16자까지 영문 대소문자/숫자/특수문자 사용)" />
            </div>
            <div className="config-input">
                <input onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="비밀번호 확인" />
            </div>
            <div className="config-input">
                <input onChange={(e) => setPostNumber(e.target.value)} type="text" placeholder="우편찾기" />
                <button>주소검색</button>
            </div>
            <div className="config-input">
                <div className="address-input">
                    <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder="주소" />
                </div>
                <div className="address-input2">
                    <input onChange={(e) => setAddressDetail(e.target.value)} type="text" placeholder="나머지주소" />
                </div>
            </div>
            <div className="config-input">
                <input type="text" placeholder="휴대전화" />
            </div>
        </div>
        <div className='submit-btn'>
            <Link to="/SUSC">
            {/* onclick을 했을 경우 백으로 전송 */}
                <button onClick={() => onSubmitHandler()}></button>
            </Link>
        </div>
    </div>
    )
    
}