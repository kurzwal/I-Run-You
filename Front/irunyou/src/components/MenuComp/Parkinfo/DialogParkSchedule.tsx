import { useCallback, useEffect, useState } from "react";
import "./parkinfo.css";
import ScheduleItem from "./ScheduleItem";
import axiosInstance from "../../../service/axiosInstance";
import useStore from "./Store";
import { Button } from "@mui/material";

interface props {
  parkIndex: number;
}

export default function DialogParkSchedule({ parkIndex }: props) {
  const [parkRunScheduleList, setParkRunScheduleList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState(false);  // 더보기

  const getParkRunScheduleList = async (page: number) => {
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

        setParkRunScheduleList(response.data.data.data); // 일정 리스트
        setIsLast(response.data.data.last); // 마지막 페이지 여부
        setPage(page);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getParkRunScheduleList(1);
  }, []);

  return (
    <div className="dialog-park-schedule-container">
      <div className="dialog-park-schedule-title">모집중인 일정</div>
      <div>
        {parkRunScheduleList &&
          parkRunScheduleList.map((scheduleList: any) => (
            <ScheduleItem
              key={scheduleList.runScheduleIndex}
              runScheduleInfo={scheduleList}
            ></ScheduleItem>
          ))}
      </div>
      {isLast ? (
        <Button
          variant="contained"
          disableElevation
          color="success"
          style={{
            width: "100px",
            color: "white"
          }}
        >
          마지막 페이지 입니다.
        </Button>
      ) : (
        <Button
          variant="contained"
          disableElevation
          color="success"
          style={{
            width: "100px",
            color: "white"
          }}
          onClick={() => getParkRunScheduleList(page + 1)}
        >
          + 더보기...
        </Button>
      )}
    </div>
  );
}
