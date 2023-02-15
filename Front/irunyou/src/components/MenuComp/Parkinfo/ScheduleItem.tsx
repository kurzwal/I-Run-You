import React, { useState, useEffect, useRef } from "react";

import useStore from "./Store";

interface props {
  runScheduleInfo: {
    runScheduleIndex: number;
    runSchedulePark: number;
    runScheduleTitle: string;
    runScheduleWriter: string;
    runScheduleDatetime: string;
    runScheduleContent: string;
  };
}

export default function ScheduleItem({runScheduleInfo} : props) {

  const { setStateScheduleInfo, setScheduleInfo } = useStore();

  const openScheduleInfoHandler = () => {
    setStateScheduleInfo();
    setScheduleInfo(runScheduleInfo);
  }

  return (
    <div className="dialog-schedule-item" onClick={ openScheduleInfoHandler } style={{ cursor: "pointer" }} >
      <div className="dsi-header">
        <div className="dsi-weekday">
          <span>월</span>
        </div>
        <div className="dsi-config">
          <div className="dsi-title">{runScheduleInfo.runScheduleTitle}</div>
          <div className="dsi-time">{runScheduleInfo.runScheduleDatetime}</div>
          <div className="dsi-writer">작성자 : {runScheduleInfo.runScheduleWriter}</div>
        </div>
      </div>
      <div className="dsi-desc">
        {runScheduleInfo.runScheduleContent}
      </div>
    </div>
  );
}
