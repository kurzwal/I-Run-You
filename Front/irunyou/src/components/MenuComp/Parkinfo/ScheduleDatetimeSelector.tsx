import './parkinfo.css';
import useStore from './Store';
import {useState, useEffect} from 'react';
import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

export default function ScheduleDatetimeSelector() {

    const { scheduleInfo, setScheduleDatetime, parkInfoState } = useStore();
    
    const [firstCheck, setFirstCheck] = useState(true);
    

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [days, setDays] = useState<string[]>([]);

    const years = [2020, 2021, 2022, 2023];
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    

    const isLeapYear = (year: string) => {
        const yearInt = parseInt(year);
        return (yearInt % 400 === 0) || (yearInt % 100 !== 0 && yearInt % 4 === 0);
    };

    const longMonths = {
        '01': true,
        '03': true,
        '05': true,
        '07': true,
        '08': true,
        '10': true,
        '12': true,
      };

    const generateDays = (year: string, month: string) => {
    let newDays: string[] = [];
    const daysInMonth = month === '02' ? (isLeapYear(year) ? 29 : 28) : (month in longMonths ? 31 : 30);
    for (let i = 1; i <= daysInMonth; i++) {
        newDays.push(`${i < 10 ? '0' + i : i}`);
    }
    setDays(newDays);
    };

    // 시간 설정하는 부분
    
    const [startTime, setStartTime] = useState('');

    const storeTime = () => {
        if (year && month && day) {
          const startTimeString = `${year}-${month}-${day}T${startTime}`;
          setScheduleDatetime(startTimeString);
        }
      };

    useEffect(() => {
        if (firstCheck && parkInfoState == 3) {
            setFirstCheck(false);
            setYear(scheduleInfo.runScheduleDatetime.slice(0, 4));
            setMonth(scheduleInfo.runScheduleDatetime.slice(5, 7));
            generateDays(year, month);
            setDay(scheduleInfo.runScheduleDatetime.slice(8, 10));
            setStartTime(scheduleInfo.runScheduleDatetime.slice(11, 16))
        } 
        storeTime();
        
    }, [year, month, day, startTime])

    return (
        <>
        {/* 날짜 설정 부분 */}
            <div className="datetime-selector-wraper">
            <FormControl style={{ minWidth: 100, marginRight: 10 }}>
                <InputLabel id="year-select-label">Year</InputLabel>
                <Select
                    labelId="year-select-label"
                    id="year-select"
                    value={year}
                    variant='standard'
                    style={{ width: '100px', }}
                    onChange={event => {
                        setYear(event.target.value);
                        generateDays(event.target.value, month);
                    }}
                >
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2024">2024</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{ minWidth: 100, marginRight: 10 }}>
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                    labelId="month-select-label"
                    id="month-select"
                    value={month}
                    variant='standard'
                    style={{ width: '100px', }}
                    onChange={event => {
                        setMonth(event.target.value);
                        generateDays(year, event.target.value);
                    }}
                >
                    <MenuItem value="01">01</MenuItem>
                    <MenuItem value="02">02</MenuItem>
                    <MenuItem value="03">03</MenuItem>
                    <MenuItem value="04">04</MenuItem>
                    <MenuItem value="05">05</MenuItem>
                    <MenuItem value="06">06</MenuItem>
                    <MenuItem value="07">07</MenuItem>
                    <MenuItem value="08">08</MenuItem>
                    <MenuItem value="09">09</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                </Select>
                </FormControl>
                <FormControl style={{ minWidth: 100 }}>
                <InputLabel id="day-select-label">Day</InputLabel>
                <Select
                labelId="day-select-label"
                id="day-select"
                value={day}
                variant='standard'
                style={{ width: '100px', }}
                onChange={event => {
                    setDay(event.target.value);
                }}
                >
                    {days.map((dayOption) => (
                    <MenuItem key={dayOption + month + year} value={dayOption}>{dayOption}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </div>

            {/* 시간 설정 부분 */}
            <div>
                <TextField
                    id="start-time-picker"
                    label="Start Time"
                    type="time"
                    value={scheduleInfo.runScheduleDatetime.toString().substring(11, 16)}
                    onChange={e => {
                        setStartTime(e.target.value);
                    }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </div>
        </>
    )
}