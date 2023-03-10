import './parkinfo.css';
import useStore from "./Store"
import useObserveStore from '../Myschedule/ScheduleObserveStore'
import { useState, useEffect } from 'react';
import axiosInstance from "../../../service/axiosInstance";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ScheduleDatetimeSelector from './ScheduleDatetimeSelector';

interface ScheduleRegist {
	runSchedulePark: number;
	runScheduleTitle: string;
	runScheduleDatetime: any;
    runScheduleContent: string;
}


export default function ScheduleRegistBody() {

    // parkIndex는 zustand로 불러와서 runSchedulePark = parkIndex 하면 됨
    const { parkInfo, setStateParkInfo, scheduleDatetime } = useStore();
    const { toggleObserve } = useObserveStore();

    // data는 scheduleRegist 넣기
    const [scheduleRegist, setScheduleRegist] = useState<ScheduleRegist>({
        runSchedulePark: parkInfo.parkIndex,
        runScheduleTitle: '',
        runScheduleDatetime: "2023-01-01T12:00",
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
                runScheduleDatetime: scheduleDatetime,
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

    const checkScheduleTime = () => {
        const currentDate = new Date();
        const postDate = new Date(scheduleDatetime);
        return currentDate.getTime() > postDate.getTime();
    }

    const submitAll = async () => {
        if (!scheduleRegist.runScheduleTitle) {
            return alert("제목을 입력하세요.")
        }
        if (!scheduleRegist.runScheduleContent) {
            return alert("내용을 입력하세요.")
        }
        if (checkScheduleTime()) {
            return alert("현재보다 미래의 시간만 생성 가능합니다.")
        }
        
        await postSchedule();
        // 내일정 다시불러오기 메서드
        toggleObserve();
        // 일정생성 작성값 초기화
        setScheduleRegist({...scheduleRegist, runScheduleTitle: '', runScheduleContent: '',});
    }

    return (
        <div className="regist-body-wraper">
            <ScheduleDatetimeSelector />
            <div className="regist-body-title">일정 생성하기</div>
            <TextField label="일정 이름" onChange={(event) => setScheduleTitle(event.target.value)} 
                style={{ marginBottom: '15px'}} />
            <TextField label="일정 소개하기" onChange={(event) => setScheduleContent(event.target.value)} 
                style={{ marginBottom: '15px'}} multiline rows={5} />
            <div className='regist-btn-container'>
                <Button variant='outlined' size='large' onClick={setStateParkInfo}>이전으로</Button>
                <Button variant='contained' size='large' onClick={submitAll}>일정생성</Button>
            </div>
        </div>
    )
}