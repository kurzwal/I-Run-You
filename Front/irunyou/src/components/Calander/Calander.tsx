import react from 'react';
import './calander.css';


import Left from '../../assets/caret-left-solid.svg';

import CalanderDay from './CalanderDay';

const year = 2023;
const month = 1;


export default function Calander() {
    return (
        <div className="calander-wrap">
            <div className="calander-title">
                <h2>Park Schedule</h2>
            </div>
            <div className="calander-header">
                <img className='calander-caret' src={ Left } alt="" />
                <div className='calander-year-month'>{ year }년 { month }월</div>
                <img className='calander-caret' id="right-caret" src={ Left } alt="" />
            </div>
            <div className='calander-body'>
                <div className='calander-day-label'>
                    <div className='calander-day-label-item' style={{ color:"red" }}>일</div>
                    <div className='calander-day-label-item'>월</div>
                    <div className='calander-day-label-item'>화</div>
                    <div className='calander-day-label-item'>수</div>
                    <div className='calander-day-label-item'>목</div>
                    <div className='calander-day-label-item'>금</div>
                    <div className='calander-day-label-item' style={{ color:"blue" }}>토</div>
                </div>
                <div className='calander-day-number'>
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="1" />
                    <CalanderDay day="2" />
                    <CalanderDay day="3" />
                    <CalanderDay day="4" />
                    <CalanderDay day="5" />
                    <CalanderDay day="6" />
                    <CalanderDay day="7" />
                    <CalanderDay day="8" />
                    <CalanderDay day="9" />
                    <CalanderDay day="10" />
                    <CalanderDay day="11" />
                    <CalanderDay day="12" />
                    <CalanderDay day="13" />
                    <CalanderDay day="14" />
                    <CalanderDay day="15" />
                    <CalanderDay day="16" />
                    <CalanderDay day="17" />
                    <CalanderDay day="18" />
                    <CalanderDay day="19" />
                    <CalanderDay day="20" />
                    <CalanderDay day="21" />
                    <CalanderDay day="22" />
                    <CalanderDay day="23" />
                    <CalanderDay day="24" />
                    <CalanderDay day="25" />
                    <CalanderDay day="26" />
                    <CalanderDay day="27" />
                    <CalanderDay day="28" />
                    <CalanderDay day="29" />
                    <CalanderDay day="30" />
                    <CalanderDay day="31" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                    <CalanderDay day="" />
                </div>
            </div>
        </div>
    )
}