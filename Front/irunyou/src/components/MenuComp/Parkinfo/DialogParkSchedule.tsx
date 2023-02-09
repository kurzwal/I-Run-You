import "./parkinfo.css"
import ScheduleItem from "./ScheduleItem"

export default function DialogParkSchedule() {
    return (
        <div className="dialog-park-schedule-container">
            <div className="dialog-park-schedule-title">모집중인 일정</div>
            <ScheduleItem></ScheduleItem>
        </div>
    )
}