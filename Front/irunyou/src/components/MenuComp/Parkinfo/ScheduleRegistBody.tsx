import useStore from "./Store"
import { useState } from 'react';

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

    const postSomeTime: string = "2023-03-01T12:00"
    

    return (
        <div className="regist-body-wraper">
            <div className="title">스케쥴 생성하기</div>
            {/* textfield */}
            <div>
                {/* cancel btn */}
                {/* submit btn */}
            </div>
        </div>
    )
}