import './parkinfo.css';
import useStore from './Store';

export default function ScheduleInfo() {

    const { scheduleInfo } = useStore();
    const runScheduleInfo = scheduleInfo;

    return (
        <div className="schedule-info-wraper">
            <div className="schedule-info-header">
                <div className="schedule-info-title">{ runScheduleInfo.runScheduleTitle }</div>
                <div className="schedule-info-writer">작성자 : { runScheduleInfo.runScheduleWriter }</div>
            </div>
            <div className="schedule-info-datetime">시작 시간 : { runScheduleInfo.runScheduleDatetime.replace("T", " ") }</div>
            <div className="schedule-info-content">{ runScheduleInfo.runScheduleContent }</div>
        </div>
    )
}