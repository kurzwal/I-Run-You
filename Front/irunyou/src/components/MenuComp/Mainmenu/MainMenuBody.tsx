import "./menu.css";
import MenuProfile from "./MenuProfile";
import MenuItemList from "./MenuItemList"
import useToggleStore from '../../../view/Store';


export default function MainMenu() {
    const { setMenuMyInfo } = useToggleStore();    
    return (
        <div className="menu-header">
            <div onClick={setMenuMyInfo} style={{width:"100%"}}>
                <MenuProfile></MenuProfile>
            </div>
            <MenuItemList></MenuItemList>
        </div>
    )
}