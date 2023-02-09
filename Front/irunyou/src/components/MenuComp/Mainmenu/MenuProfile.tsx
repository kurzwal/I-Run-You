import { useLocation } from "react-router";
import "./menu.css";

export default function MenuProfile() {

    const location = useLocation();
    
    // const userNickname = location.state.userNickname;
    const userNickname = "username";


    return (
        <div className="menu-profile">
            <div className="profile-img-continer">
                <i className="fa-solid fa-user-large"></i>
            </div>
            <div className="profile-text">{userNickname}</div>
            <div className="profile-welcome">님, 환영합니다.</div>
        </div>
    )
}
