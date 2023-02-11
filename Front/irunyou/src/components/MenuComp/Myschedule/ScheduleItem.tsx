import "./myschedule.css"
import Circle from "../../../assets/circle-regular.svg"

interface props {
    runScheduleInfo: {
        runScheduleIndex: number;
        runSchedulePark: string;
        runScheduleWriterNickName: string;
        runScheduleTitle: string;
        runScheduleDatetime: string;
      };
}

export default function ScheduleItem( {runScheduleInfo} : props) {
    return (
        <div className="schedule-item-container" onClick={()=> {}}>
            {/* 이거 걍 월화수목금토일 이미지를 만들어서 쓰자 */}
            <div className="week-txt"><span>월</span></div>
            <div className="schedule-txt-container">
                <div className="schedule-title">{runScheduleInfo.runScheduleTitle}</div>
                <div className="schedule-park-name">{runScheduleInfo.runSchedulePark}</div>
                <div className="schedule-host-name">{runScheduleInfo.runScheduleWriterNickName}</div>
            </div>
            <div className="schedule-datetime">{runScheduleInfo.runScheduleDatetime}</div>
        </div>
    )
}