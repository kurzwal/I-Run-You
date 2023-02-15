import "./parkinfo.css";
import useStore from "./Store";
import { Button } from "@mui/material";
import axiosInstance from "../../../service/axiosInstance";
import axios from "axios";
import React, { useState, useEffect } from "react";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

export default function ScheduleInfo() {
  const { scheduleInfo } = useStore();
  const runScheduleInfo = scheduleInfo;
  const [isParticipate, setIsParticipate] = useState<boolean>(false);

  // 로그인한 유저의 일정 참여 여부
  const participateCheck = async () => {
    await axiosInstance
      .get("irunyou/runschedule/isParticipate", {
        params: {
          schIdx: runScheduleInfo.runScheduleIndex
        }
      })
      .then((response) => {
        setIsParticipate(response.data.data.result);
        console.log(isParticipate + "일정참여여부");
      });
  };

  // 일정 참여 함수
  const participateRunSchedule = async () => {
    await axiosInstance
      .post("irunyou/runschedule/participate", {
        runScheduleIndex: runScheduleInfo.runScheduleIndex
      })
      .then((response) => {
        if (!response.data.status) {
          // Response setFailed
          return alert(response.data.message);
        }
        alert(response.data.message);
        setIsParticipate(true);
        console.log(isParticipate + "일정참여함");
      })
      .catch((error) => {});
  };

  // 일정 참여 취소 함수
  const cancelParticipateRunSchedule = async () => {
    await axiosInstance
      .patch("irunyou/runschedule/cancel", {
        runScheduleIndex: runScheduleInfo.runScheduleIndex
      })
      .then((response) => {
        if (!response.data.status) {
          return alert(response.data.message);
        }
        alert(response.data.message);
        setIsParticipate(false);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    participateCheck();
  }, [runScheduleInfo.runScheduleIndex, isParticipate]);

  return (
    <div className="schedule-info-wraper">
      <div className="schedule-info-header">
        <div className="schedule-info-title">
          {runScheduleInfo.runScheduleTitle}
        </div>
        <div className="schedule-info-writer">
          작성자 : {runScheduleInfo.runScheduleWriter}
        </div>
      </div>
      <div className="schedule-info-datetime">
        시작 시간 : {runScheduleInfo.runScheduleDatetime.replace("T", " ")}
      </div>
      <div className="schedule-info-content">
        <div>{runScheduleInfo.runScheduleContent}</div>
        <div className="schedule-participate-btn">
          {isParticipate ? (
            <Button
              variant="contained"
              disableElevation
              color="success"
              style={{
                // marginLeft : "10px",
                width: "90px",
                height: "30px",
                fontSize: "12px",
                color: "white"
              }}
              onClick={() => cancelParticipateRunSchedule()}
            >
              참여취소
            </Button>
          ) : (
            <Button
              variant="contained"
              disableElevation
              color="success"
              style={{
                width: "90px",
                height: "30px",
                fontSize: "12px",
                color: "white"
              }}
              onClick={() => participateRunSchedule()}
            >
              참여하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
