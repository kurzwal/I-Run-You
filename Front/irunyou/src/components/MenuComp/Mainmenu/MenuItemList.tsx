import "./menu.css";
import Tree from "../../../assets/tree.svg";
import Calander from "../../../assets/calendar.svg";
import Question from "../../../assets/circle-question.svg";
import useToggleStore from '../../../view/Store';
import { useNavigate } from "react-router";


export default function MenuItemList() {

    const { setMenuParkList, openMap, setMenuMySchedule } = useToggleStore();    
    const movePage = useNavigate();

    return (
        <div className="menu-item-list">
            <div className="main-menu-item" onClick={() => {setMenuParkList(); openMap();}}>
                <img className="menu-icon" src={Tree} />
                <div className="menu-item-txt">공원찾기</div>
            </div>
            <div className="main-menu-item" onClick={() => setMenuMySchedule()}>
                <img className="menu-icon" src={Calander}/>
                <div className="menu-item-txt">내 일정</div>
            </div>
            <div className="main-menu-item" onClick={() => movePage("/FAQmain")}>
                <img className="menu-icon" src={Question}/>
                <div className="menu-item-txt">고객지원</div>
            </div>
            <div className="main-menu-item" onClick={() => movePage("/Notice")}>
                <img className="menu-icon" src={Question}/>
                <div className="menu-item-txt">공지사항</div>
            </div>
        </div>
    )
}
