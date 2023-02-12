// 2023-02-10 홍지혜
// 백-프론트 연결 -> 컴포넌트 map으로 

import React, { useCallback, useEffect, useState } from "react";
import "./parkinfo.css";
import ScheduleItem from "./ScheduleItem";
import axiosInstance from "../../../service/axiosInstance";
import useStore from "./Store";
import { Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

interface props {
  parkIndex: number;
}

export default function DialogParkSchedule({ parkIndex }: props) {
  const [parkRunScheduleList, setParkRunScheduleList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading,setIsLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);  // 마지막인지
  const [ref, inView] = useInView();  // ref를 div에 걸어주면 해당 요소가 보이면 inView가 true로. 안 보이면 false로 자동 변경됨

  const { setStateScheduleRegist, parkInfoState }= useStore();

  // 서버에서 일정 가져오는 함수 Page가 바뀔때마다 재생성
  const getParkRunScheduleList = useCallback (async () => {
    setIsLoading(true);
    await axiosInstance
      .get("irunyou/park/runSchedule", {
        params: {
          parkIndex,
          page: page
        }
      })
      .then((response) => {
        if (!response.data.status) {
          alert(response.data.message);
        }

        const temp = [...parkRunScheduleList, ...response.data.data.data];

        setParkRunScheduleList(temp); // 일정 리스트
        setIsLast(response.data.data.last); // 마지막 페이지 여부
        setPage(page);
      })
      .catch((error) => {
        alert(error.message);
      });
    setIsLoading(false);
  },[page]);

  // getParkRunScheduleList 함수가 바뀔때마다 실행 
  useEffect(() => {
    getParkRunScheduleList();
  }, [getParkRunScheduleList, parkInfoState]);

  // 유저가 마지막 요소를 보고 있고, 페이지가 마지막이 아니고, 로딩중이 아니라면 실행
  useEffect(()=> {
    if(inView && !isLoading &&!isLast) {
        setPage(page + 1)
    }
  },[inView,isLoading,isLast])

  // page가 바뀔 때마다 서버에 정보를 요청
  return (
    <div className="dialog-park-schedule-container">
      <div className="dialog-park-schedule-title">모집중인 일정
        <Button onClick={setStateScheduleRegist} variant="contained">일정 생성</Button>
      </div>
      <div>
        { parkRunScheduleList.length !== 0 ?
        parkRunScheduleList.map((scheduleList: any, index : number) => (
            <React.Fragment key ={index}>
                {!isLoading && !isLast ? (
                    <div ref={ref}>
                        <ScheduleItem
                          key={scheduleList.runScheduleIndex}
                          runScheduleInfo={scheduleList}
                        ></ScheduleItem>
                    </div>
                ) : (
                    <div>
                        <ScheduleItem
                          key={scheduleList.runScheduleIndex}
                          runScheduleInfo={scheduleList}
                        ></ScheduleItem>
                    </div>
                )}
            </React.Fragment>
          )) : 
          <div>현재 이 공원에 모집중인 일정이 없습니다.</div>}
      </div>
    </div>
  );
}
