import "./menu.css";
import MenuProfile from "./MenuProfile";
import MenuItemList from "./MenuItemList"
import useToggleStore from '../../../view/Store';

// 업데이트 : 2023-02-07 홍지혜 - 프로필 바 링크 닉네임 부분으로 이동 (Profile바 전체에 링크가 먹어서 로그아웃 버튼이 안 눌러짐)

export default function MainMenu() {
    
    return (
        <div className="menu-header">
            <div style={{width:"100%"}}>
                <MenuProfile></MenuProfile>
            </div>
            <MenuItemList></MenuItemList>
        </div>
    )
}