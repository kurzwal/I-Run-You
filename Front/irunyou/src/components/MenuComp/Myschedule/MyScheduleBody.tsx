import "./myschedule.css"
import ScheduleItem from "./ScheduleItem"

export default function MyScheduleBody() {
    return (
        <div className="myschedule-container">
            <div className="my-schedule-title">내 일정</div>
            <ScheduleItem></ScheduleItem>
            <ScheduleItem></ScheduleItem>
        </div>
    )
}