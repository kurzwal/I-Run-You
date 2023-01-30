import "./menucomp.css";
import MenuLogoBack from "./Mainmenu/MenuLogoBack";
import MyScheduleBody from "./Myschedule/MyScheduleBody";

export default function MySchedule() {
    return (
        <div className="main-menu zi2">
            <MenuLogoBack></MenuLogoBack>
            <MyScheduleBody></MyScheduleBody>
        </div>
    )
}