/*아이디찾기할때 띄워야되는데 안띄워져서 못만드는중,,,*/
import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';

import './Loginmodal.css';

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>;
}

export default function Loginmodal({setModal}: Props) {
  return (
    <div id="login-modal" className="login-modal-overlay">
        <div className="login-modal-window">
            <div className="title">
                <h2>일치하는 회원정보가 없습니다.</h2>
            </div>
            <div className="content">
                <p>변경사항이 저장되지 않을 수 있습니다.</p>
            </div>
            <br />
            <div className="modal-btn">
                <Link to="/Loginmain">
                <button className="ok-btn submit-btn">확인</button>
                </Link>
                <button className="submit-btn" onClick={() => setModal(false)}>취소</button>
            </div>
        </div>
    </div>
  )
}
