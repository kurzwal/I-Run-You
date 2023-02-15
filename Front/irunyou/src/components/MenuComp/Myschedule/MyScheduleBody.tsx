import "./myschedule.css"
import ScheduleItem from "./ScheduleItem"
import axiosInstance from "../../../service/axiosInstance";
import React, { useCallback, useEffect, useState } from "react";

import useToggleStore from '../../../view/Store';

//import useStore from './ScheduleObserveStore';


// 2023-02-11 홍지혜 나의 스케줄 리스트

export default function MyScheduleBody() {

    const [userRegistrationSchedule, setUserRegistrationSchedule] = useState<any[]>([]);
    const [userParticipationSchedule, setUserParticipationSchedule] = useState<any[]>([]);

    
    const { menuState } = useToggleStore();    

    //const { observe } = useStore();


    const getUserRunSchedule = () => {
        console.log(userRegistrationSchedule);
        axiosInstance
            .get("/irunyou/runschedule/list")
            .then(response => {
                const participationSchedule = response.data.data.participationSchedule;
                const registrationSchedule = response.data.data.registrationSchedule

                if (!response.data.status) {
                    return alert(response.data.message);
                }

                    setUserRegistrationSchedule(registrationSchedule);
                    setUserParticipationSchedule(participationSchedule);
            })
            .catch((error) => {
                
            })
    }

    useEffect(() => {
        getUserRunSchedule();

    }, [menuState===4]);

//    }, [observe]);


    return (
        <div className="myschedule-container">
            <div className="my-schedule-title">나의 일정</div>
            <div className="my-schedule-subTitle">만든 일정</div>
                {userRegistrationSchedule.map((scheduleList) => (
                    <div key={scheduleList.runScheduleIndex}>
                        <ScheduleItem runScheduleInfo={scheduleList}></ScheduleItem>
                    </div>
                ))}
            <div className="my-schedule-subTitle">참여하는 일정</div>
            <div>
                {userParticipationSchedule.map((scheduleList) => (
                    <div key={scheduleList.runScheduleIndex}>
                            <ScheduleItem runScheduleInfo={scheduleList}></ScheduleItem>
                    </div>
                ))}
            </div>
        </div>
    )
}