import { useEffect, useState } from "react"
import "./parkinfo.css"
import ScheduleItem from "./ScheduleItem"
import axiosInstance from "../../../service/axiosInstance";
import useStore from './Store';


export default function DialogParkSchedule() {

    const { parkInfo } = useStore();

    const [parkRunScheduleList, setParkRunScheduleList] = useState<any[]>([]);
    const [parkIndex, setParkIndex] = useState(parkInfo.parkIndex);
    const [isLast, setIsLast] = useState(false);
    
    const getParkRunScheduleList = async (page : number) => {
        await axiosInstance
        .get("irunyou/park/runSchedule", {
            params : {
                parkIndex,
                page : page
            }
        })
        .then(response => {
            if(!response.data.status) {
                alert("데이터를 불러오는 중 오류가 발생했습니다.");
            }

            setParkRunScheduleList(response.data.data.data);
            setIsLast(response.data.data.sliceInfoDto.last);

        }).catch((error) => {
            alert(error.message);
        })
    }

    useEffect(() => {
        getParkRunScheduleList(1);
    },[]);

    return (
        <div className="dialog-park-schedule-container">
            <div className="dialog-park-schedule-title">모집중인 일정</div>
            <div>
            {parkRunScheduleList.map((scheduleList : any) => (
                <ScheduleItem></ScheduleItem>
            ))}
            </div>
        </div>
    )
}