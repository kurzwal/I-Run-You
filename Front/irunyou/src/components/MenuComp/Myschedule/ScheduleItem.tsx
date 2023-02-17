import "./myschedule.css"
import useStore from '../Parkinfo/Store';
import axiosInstance from "../../../service/axiosInstance";

interface props {
    runScheduleInfo: {
        runScheduleIndex: number;
        parkIndex: number;
        runSchedulePark: string;
        runScheduleWriter: string;
        runScheduleTitle: string;
        runScheduleDatetime: string;
        runScheduleContent: string;
      };
}

export default function ScheduleItem( {runScheduleInfo} : props) {

    const { toggleParkInfo, setParkInfo, setStateScheduleInfo, setScheduleInfo } = useStore();

    const getParkInfo = async () => {
        await axiosInstance
            .get('irunyou/park/', {
                params: { parkNum: runScheduleInfo.parkIndex, }})
            .then(response => {
                setParkInfo(response.data.data);
                setScheduleInfo({
                    runScheduleIndex: runScheduleInfo.runScheduleIndex,
                    runSchedulePark: runScheduleInfo.parkIndex,
                    runScheduleTitle: runScheduleInfo.runScheduleTitle,
                    runScheduleWriter: runScheduleInfo.runScheduleWriter,
                    runScheduleDatetime: runScheduleInfo.runScheduleDatetime,
                    runScheduleContent: runScheduleInfo.runScheduleContent,
                });
                toggleParkInfo();
                setStateScheduleInfo();
            }).catch(error => {
                alert(error.message)
            })
    }



    return (
        <div className="schedule-item-container" onClick={getParkInfo}>
            {/* 이거 걍 월화수목금토일 이미지를 만들어서 쓰자 */}
            <div className="week-txt"><span>월</span></div>
            <div className="schedule-txt-container">
                <div className="schedule-title">{runScheduleInfo.runScheduleTitle}</div>
                <div className="schedule-park-name">{runScheduleInfo.runSchedulePark}</div>
                <div className="schedule-host-name">작성자 : {runScheduleInfo.runScheduleWriter}</div>
            </div>
            <div className="schedule-datetime">{runScheduleInfo.runScheduleDatetime}</div>
        </div>
    )
}