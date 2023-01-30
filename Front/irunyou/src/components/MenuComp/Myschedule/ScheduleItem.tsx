import "./myschedule.css"
import Circle from "../../../assets/circle-regular.svg"

export default function ScheduleItem() {
    return (
        <div className="schedule-item-container">
            {/* 이거 걍 월화수목금토일 이미지를 만들어서 쓰자 */}
            <div className="week-txt"><span>월</span></div>
            <div className="schedule-txt-container">
                <div className="schedule-title">같이 뛰실분</div>
                <div className="schedule-park-name">송상현광장</div>
                <div className="schedule-host-name">홍길동</div>
            </div>
            <div className="schedule-datetime">12:00 ~ 13:00</div>
        </div>
    )
}