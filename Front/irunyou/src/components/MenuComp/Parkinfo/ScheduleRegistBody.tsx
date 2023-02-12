import useStore from "./Store"
import { useState } from 'react';
import axiosInstance from "../../../service/axiosInstance";
import TextField from '@mui/material/TextField';

interface ScheduleRegist {
	runSchedulePark: number;
	runScheduleTitle: string;
	runScheduleDatetime: any;
    runScheduleContent: string;
}


export default function ScheduleRegistBody() {

    // parkIndex는 zustand로 불러와서 runSchedulePark = parkIndex 하면 됨
    const { parkInfo, setStateParkInfo } = useStore();

    // data는 scheduleRegist 넣기
    const [scheduleRegist, setScheduleRegist] = useState<ScheduleRegist>({
        runSchedulePark: parkInfo.parkIndex,
        runScheduleTitle: '',
        runScheduleDatetime: "2023-03-01T12:00:00",
        runScheduleContent: '',
    });

    // axiosInstance 사용해서 post 요청 보내기
        // url : "/irunyou/runschedule/create"
        // data : ScheduleRegist interface 참고
        // runScheduleDatetime은 자료형 나중에 맞추고 일단 postSomeTime 사용
    


    const postSchedule = (async () => {


        await axiosInstance
            .post("/irunyou/runschedule/create", {
                runSchedulePark: parkInfo.parkIndex,
                runScheduleTitle: scheduleRegist.runScheduleTitle,
                runScheduleDatetime: "2023-03-01T12:00",
                runScheduleContent: scheduleRegist.runScheduleContent,
            })
            .then(response => {
            if (!response.data.status) {
                return alert(response.data.message);
            }
            alert(response.data.message);
            setStateParkInfo();
            })
            .catch(error => {
                alert(error.message);
            });
    })

    const setScheduleTitle = (runScheduleTitle: string) => {
        setScheduleRegist({...scheduleRegist, runScheduleTitle});
    }

    const setScheduleContent = (runScheduleContent: string) => {
        setScheduleRegist({...scheduleRegist, runScheduleContent});
    }

    const setScheduleTime =  (runScheduleDatetime: any) => {
        setScheduleRegist({...scheduleRegist, runScheduleDatetime});
    }

    const submitAll = () => {
        if (!scheduleRegist.runScheduleTitle) {
            return alert("제목을 입력하세요.")
        }
        if (!scheduleRegist.runScheduleContent) {
            return alert("내용을 입력하세요.")
        }
        postSchedule();
        setScheduleRegist({...scheduleRegist, runScheduleTitle: '', runScheduleContent: '',});
    }
    

    

    return (
        <div className="regist-body-wraper">
            <div className="title">일정 생성하기</div>
            <TextField label="일정 이름" onChange={(event) => setScheduleTitle(event.target.value)} />
            <TextField label="일정 소개하기" onChange={(event) => setScheduleContent(event.target.value)} />
            <div>
                <button className="cancel btn" onClick={setStateParkInfo}>이전으로</button>
                <button className="submit-btn" onClick={submitAll}>일정생성</button>
            </div>
        </div>
    )
}