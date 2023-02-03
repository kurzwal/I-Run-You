import react, { useState } from 'react';
import './calender.css';

import Dialog from '@mui/material/Dialog';

import Left from '../../assets/caret-left-solid.svg';

import calenderDay from './CalenderDay';
import PostSchedule from './PostSchedule';

const year = 2023;
const month = 1;

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
  }
  

  function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
      };
    return (
        <Dialog onClose={handleClose} open={open}>
            <PostSchedule />
        </Dialog>
    )
  }


export default function calender() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const postSchedule = () => {

    }

    return (
        <div className="calender-wrap">
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
            <div className="calender-title">
                <h2>Park Schedule</h2>
            </div>
            <div className="calender-header">
                <img className='calender-caret' src={ Left } alt="" />
                <div className='calender-year-month'>{ year }년 { month }월</div>
                <img className='calender-caret' id="right-caret" src={ Left } alt="" />
            </div>
            <div className='calender-body'>
                <div className='calender-day-label'>
                    <div className='calender-day-label-item' style={{ color:"red" }}>일</div>
                    <div className='calender-day-label-item'>월</div>
                    <div className='calender-day-label-item'>화</div>
                    <div className='calender-day-label-item'>수</div>
                    <div className='calender-day-label-item'>목</div>
                    <div className='calender-day-label-item'>금</div>
                    <div className='calender-day-label-item' style={{ color:"blue" }}>토</div>
                </div>
                <div className='calender-day-number'>
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="1" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="2" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="3" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="4" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="5" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="6" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="7" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="8" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="9" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="10" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="11" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="12" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="13" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="14" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="15" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="16" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="17" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="18" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="19" />
                    </div>
                    <div className="calender-schedule-add" onClick={handleClickOpen}>
                        <calenderDay day="20" />
                    </div>
                    <calenderDay day="21" />
                    <calenderDay day="22" />
                    <calenderDay day="23" />
                    <calenderDay day="24" />
                    <calenderDay day="25" />
                    <calenderDay day="26" />
                    <calenderDay day="27" />
                    <calenderDay day="28" />
                    <calenderDay day="29" />
                    <calenderDay day="30" />
                    <calenderDay day="31" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                    <calenderDay day="" />
                </div>
            </div>
        </div>
    )
}