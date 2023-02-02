import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';

import './FAQmodal.css';

interface Props {
    setModal: Dispatch<SetStateAction<boolean>>;
}

export default function FAQmodal({setModal}: Props) {
  return (
    <div id="modal" className="modal-overlay">
        <div className="modal-window">
            <div className="title">
                <h2>사이트에서 나가시겠습니까?</h2>
            </div>
            <div className="content">
                <p>변경사항이 저장되지 않을수 있습니다.</p>
            </div>
            <br />
            <div className="modal-btn">
                <Link to="/FAQmain">
                <button className="ok-btn submit-btn">확인</button>
                </Link>
                <button className="submit-btn" onClick={() => setModal(false)}>취소</button>
            </div>
        </div>
    </div>
  )
}
