import "./menu.css";
import LogoImg from '../../assets/person-running.svg';

export default function MenuLogo() {
    return (
        <div className="menu-logo">
            <img className="logo-img" src={ LogoImg } alt="어쩔티비"/>
            <div className="logo-txt">I Run You</div>
            <i className="fa-solid fa-bars-staggered"></i>
            <i className="fa-solid fa-xmark"></i>
        </div>
    )
}
