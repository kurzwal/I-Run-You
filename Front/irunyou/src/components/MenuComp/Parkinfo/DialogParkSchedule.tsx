import { useEffect, useState } from "react"
import "./parkinfo.css"
import ScheduleItem from "./ScheduleItem"
import axiosInstance from "../../../service/axiosInstance";

interface props {
    park: {
        parkIndex: number;
    }
}


export default function DialogParkSchedule() {
    const[parkRunScheduleList, setParkRunScheduleList] = useState<any[]>([]);
    const [pageSize, setPageSize] = useState(1);
    const [totalElements, setTotalElements] = useState(1);
    const [totalPages, setTotlaPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    
    const getParkRunScheduleList = async (page : number, {park} : props) => {
        await axiosInstance
        .get("irunyou/park/runSchedule", {
            params : {
                parkIndex : park.parkIndex,
                page : page
            }
        })
        .then(response => {
            const pageInfo = response.data.data.PageInfoDto;
            const scheduleList = response.data.data.data;
            
            setPageSize(pageInfo.size);
            setTotalElements(pageInfo.totalElements);
            setTotlaPages(pageInfo.totalPages);
            setParkRunScheduleList(scheduleList);

        }).catch((error) => {
            alert(error.message);
        })
    }

    useEffect(() => {
        // getParkRunScheduleList(1,);
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