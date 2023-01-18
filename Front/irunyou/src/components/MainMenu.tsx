import "./components.css";
import MenuHeader from "./MainMenu/MenuHeader";
import MenuFooter from "./MainMenu/MenuFooter";

export default function MainMenu() {
    return (
        <div className="main-menu">
            <MenuHeader></MenuHeader>
            <MenuFooter></MenuFooter>
        </div>
    )
}