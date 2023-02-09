import "./parkinfo.css"
import ScheduleItem from "./ScheduleItem"
import useEffect from 'react';

interface props {
    parkIndex: number;
}

export default function DialogParkSchedule({ parkIndex }: props) {


    const getScheduleList = () => {
        // axios.
    }
    // parkIndex로 get? 보내서 공원안에 들어있는 스케쥴 리스트 받아오기
    
    // useEffect()

    return (
        <div className="dialog-park-schedule-container">
            <div className="dialog-park-schedule-title">모집중인 일정</div>
            <ScheduleItem></ScheduleItem>
        </div>
    )
}