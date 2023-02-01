import "./menucomp.css";
import MenuLogoBack from "./Mainmenu/MenuLogoBack";
import ParkListBody from "./ParkList/ParkListBody";

export default function ParkList() {
    return (
        <div className="main-menu zi2">
            <MenuLogoBack></MenuLogoBack>
            <ParkListBody></ParkListBody>
        </div>
    )
}