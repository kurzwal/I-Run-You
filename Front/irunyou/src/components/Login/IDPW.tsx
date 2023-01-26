import "./IDPW.css";
import { Link } from "react-router-dom";

export default function IDPW() {
    return(
        <div className="idpw-container">
            <div className="container">
                <div className="form-container">
                    <h2 className="form-title">아이디 찾기</h2>
                    <p>
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
                            <button type="button">아이디 찾기</button>
                        </Link>
                        <Link to="/Login">
                            <button type="button">로그인</button>
                        </Link>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="form-container">
                    <h2 className="form-title">비밀번호 찾기</h2>
                    <p>
                        가입하신 아이디 + 이메일 입력,
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
                        <button type="button">임시비밀번호 발급</button>
                        </Link>
                        <Link to="/Login">
                        <button type="button">로그인</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}