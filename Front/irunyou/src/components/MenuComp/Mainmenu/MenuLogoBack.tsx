import "./menu.css";
import LogoImg from '../../../assets/person-running.svg';
import BackIcon from '../../../assets/chevron-left-solid.svg'
import useToggleStore from '../../../view/Store';

export default function MenuLogoBack() {
    const { setMenuMain } = useToggleStore();
    return (
        <div className="menu-logo">
            <img className="back-img" src={ BackIcon } alt="" onClick={ setMenuMain }/>
            <img className="logo-img" src={ LogoImg } alt=""/>
            <div className="logo-txt">I Run You</div>
            <i className="fa-solid fa-bars-staggered"></i>
        </div>
    )
}
