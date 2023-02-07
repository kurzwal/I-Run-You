
import './FAQmain.css'
import { Link, useNavigate } from "react-router-dom";
import search from '../../assets/images/search.svg';
import MenuLogo from '../MenuComp/Mainmenu/MenuLogo';

// 작성자 : 문경원
// 파일의 역할 : 고객지원센터 html
// 작성날짜 : 2023-02-03

// 업데이트 작성자 : 최예정
// 업데이트 날짜 : 2023-02-06


export default function FAQmain() {

    

    const movePage = useNavigate();

    return(
        <div className='FAQ-container'>
            <div onClick={() => { movePage("/MainPage") }} style={{ cursor: "pointer", width: "100%" }}>
                <MenuLogo />
            </div>
            <div className='title-main'>
                <div className='FAQ-title'>
                    <div className='FAQ-footer'>
                        <h1 className='FAQ-text'>고객센터</h1>
                    </div>
                    <div className='FAQ-input'>
                        <input placeholder='자주 묻는 질문 검색' className='search' type="text" />
                        <button className='search-box'>
                            <img className='search-icon' src={ search } />
                        </button>
                    </div>
                    <div className='FAQ-inquiry'>
                        <Link to="/FAQdetail">
                            <button className='FAQ-text-btn'>1:1 문의하기</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='FAQ-contentmain'>
                <div className='FAQ-contenttitle'>
                    <button className='FAQ-box-btn FAQ-btn'>자주묻는 질문</button>
                    <button className='FAQ-box-btn'>내가 한 질문</button>
                </div>                
                <div className='FAQ-contentbox'>

                </div>
            </div>
        </div>
    );
}