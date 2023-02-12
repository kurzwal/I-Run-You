import useStore from "./Store"
import { useState } from 'react';
import axios from 'axios';

interface ScheduleRegist {
	runSchedulePark: number;
	runScheduleTitle: string;
	runScheduleWriter: string;
	runScheduleDatetime: any;
    runScheduleContent: string;
}

export default function ScheduleRegistBody() {

    // parkIndex는 zustand로 불러와서 runSchedulePark = parkIndex 하면 됨
    const { parkInfo } = useStore();
    const parkIndex = parkInfo.parkIndex;

    // data는 scheduleRegist 넣기
    const [scheduleRegist, setScheduleRegist] = useState<ScheduleRegist>();

    // axiosInstance 사용해서 post 요청 보내기
        // url : "/irunyou/runschedule/create"
        // data : ScheduleRegist interface 참고
        // runScheduleDatetime은 자료형 나중에 맞추고 일단 postSomeTime 사용
    

    const axiosInstance = axios.create({
        baseURL: "http://localhost:4040",
        // 백 주소인지 프론트 주소인지 잘 모르겠음
    });

    axiosInstance
        .post("/irunyou/runschedule/create", {
            scheduleRegist : scheduleRegist
        })
        .then(response => {
        if (!response.data.status) {
            return alert(response.data.message);
        }
        alert(response.data.message);
        window.location.reload();
        })
        .catch(error => {
        alert(error.message);
        });

    const postSomeTime: string = "2023-03-01T12:00"
    

    return (
        <div className="regist-body-wraper">
            <div className="title">스케줄 생성하기</div>
            {/* textfield */}
            <div>
                <button className="cancel btn"></button>
                <button className="submit-btn"></button>
            </div>
        </div>
    )
}