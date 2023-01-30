import "./menucomp.css";
import MenuLogo from "./Mainmenu/MenuLogo";
import MainMenuBody from "./Mainmenu/MainMenuBody";

export default function MainMenu() {
    return (
        <div className="main-menu zi1">
            <MenuLogo></MenuLogo>
            <MainMenuBody></MainMenuBody>
        </div>
    )
}