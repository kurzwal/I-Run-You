import "./menu.css";
import Tree from "../../assets/tree.svg";
import Calander from "../../assets/calendar.svg";
import Question from "../../assets/circle-question.svg";


export default function MenuLogo() {
    return (
        <div className="menu-item-list">
            <div className="menu-item">
                <img className="menu-icon" src={Tree}/>
                <div className="menu-item-txt">공원찾기</div>
            </div>
            <div className="menu-item">
                <img className="menu-icon" src={Calander}/>
                <div className="menu-item-txt">내 일정</div>
            </div>
            <div className="menu-item">
                <img className="menu-icon" src={Question}/>
                <div className="menu-item-txt">고객지원</div>
            </div>
        </div>
    )
}
