import "./menu.css";
import MenuLogo from "./MenuLogo";
import MenuProfile from "./MenuProfile";
import MenuItemList from "./MenuItemList"

export default function MainMenu() {
    return (
        <div className="menu-header">
            <MenuLogo></MenuLogo>
            <MenuProfile></MenuProfile>
            <MenuItemList></MenuItemList>
        </div>
    )
}