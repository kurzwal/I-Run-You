import './Signup.css';

export default function Signup() {
    <div className="signup-container">
        <div className="user-config">
            <h1>회원정보 입력</h1>
        </div>
        <div className="config-container">
            <div className="config-input">
                <input type="text" placeholder="이름" />
            </div>
            <div className="config-input">
                <input type="text" placeholder="닉네임" />
                <button>중복확인</button>
            </div>
            <div className="config-input">
                <input type="email" placeholder="아이디(이메일)" />
                <button>중복확인</button>
            </div>
            <div className="config-input">
                <input type="password" placeholder="비밀번호(8~16자까지 영문 대소문자/숫자/특수문자 사용)" />
            </div>
            <div className="config-input">
                <input type="password" placeholder="비밀번호 확인" />
            </div>
            <div className="config-input">
                <input type="text" placeholder="우편찾기" />
                <button>주소검색</button>
            </div>
            <div className="config-input">
                <div className="address-input">
                    <input type="text" placeholder="주소" />
                </div>
                <div className="address-input2">
                    <input type="text" placeholder="나머지주소" />
                </div>
            </div>
            <div className="config-input">
                <input type="text" placeholder="휴대전화" />
            </div>
        </div>
    </div>
}