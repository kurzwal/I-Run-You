import "./myschedule.css"
import { useState } from 'react';
import useStore from '../Parkinfo/Store';
import useObserverStore from './ScheduleObserveStore';
import axiosInstance from "../../../service/axiosInstance";
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#b6cf55',
      },
      secondary: {
        // 나중에 바꿀 색깔
        main: '#11cb5f',
      },
    },
  });

interface props {
    runScheduleInfo: {
        runScheduleIndex: number;
        parkIndex: number;
        runSchedulePark: string;
        runScheduleWriter: string;
        runScheduleTitle: string;
        runScheduleDatetime: string;
        runScheduleContent: string;
      };
}

export default function ScheduleItemOwned( {runScheduleInfo} : props) {

    const { toggleParkInfo, setParkInfo, setStateScheduleInfo, setScheduleInfo, setStateScheduleRegist } = useStore();
    const { toggleObserve } = useObserverStore();

    const [modal, setModal] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent) => {
        const target = event.target as Element;
        if (target.id === 'delete') {
        // delete btn
        deleteParkInfo();
        } else if (target.id === 'update') {
        // update btn
        } else {
        // info clicked
        getParkInfo();
        }
      };

    const getParkInfo = async () => {
        await axiosInstance
            .get('irunyou/park/', {
                params: { parkNum: runScheduleInfo.parkIndex, }})
            .then(response => {
                setParkInfo(response.data.data);
                setScheduleInfo({
                    runScheduleIndex: runScheduleInfo.runScheduleIndex,
                    runSchedulePark: runScheduleInfo.parkIndex,
                    runScheduleTitle: runScheduleInfo.runScheduleTitle,
                    runScheduleWriter: runScheduleInfo.runScheduleWriter,
                    runScheduleDatetime: runScheduleInfo.runScheduleDatetime,
                    runScheduleContent: runScheduleInfo.runScheduleContent,
                });
                toggleParkInfo();
                setStateScheduleInfo();
            }).catch(error => {
                alert(error.message)
            })
    }

    // const updateParkInfo ()

    function showConfirm() {
        const result = window.confirm('정말 삭제하시겠습니까?');
        return result;
      }
      
    const deleteParkInfo = async () => {
        if(showConfirm()) {
            const deleteData = {
                runScheduleIndex : runScheduleInfo.runScheduleIndex,
            }
            await axiosInstance
                .patch('irunyou/runschedule/delete', deleteData)
                .then(response => {
                    alert('일정이 삭제되었습니다.');
                    toggleObserve();
                }
            )
        } else {
            // confirm 창에서 취소를 누른 경우
            return;
        }
    }

    const updateParkInfo = async () => {
        await axiosInstance
        .get('irunyou/park/', {
            params: { parkNum: runScheduleInfo.parkIndex, }})
        .then(response => {
            setParkInfo(response.data.data);
            setScheduleInfo({
                runScheduleIndex: runScheduleInfo.runScheduleIndex,
                runSchedulePark: runScheduleInfo.parkIndex,
                runScheduleTitle: runScheduleInfo.runScheduleTitle,
                runScheduleWriter: runScheduleInfo.runScheduleWriter,
                runScheduleDatetime: runScheduleInfo.runScheduleDatetime,
                runScheduleContent: runScheduleInfo.runScheduleContent,
            });
            toggleParkInfo();
            setStateScheduleInfo();
        }).catch(error => {
            alert(error.message)
        })
    }


    return (
        <div id="info" className="schedule-item-container" onClick={handleClick}>
            {/* 이거 걍 월화수목금토일 이미지를 만들어서 쓰자 */}
            <div className="week-txt"><span>월</span></div>
            <div className="schedule-txt-container">
                <div className="schedule-title">{runScheduleInfo.runScheduleTitle}</div>
                <div className="schedule-park-name">{runScheduleInfo.runSchedulePark}</div>
                <div className="schedule-host-name">작성자 : {runScheduleInfo.runScheduleWriter}</div>
            </div>
            <div className="schedule-datetime">{runScheduleInfo.runScheduleDatetime}</div>
            <ThemeProvider theme={theme}>
                <div className="schedule-item-btn-container">
                    <Button id="update" style={{margin: '0 15px', zIndex: 3}} variant="contained" color="primary"
                        >수정</Button>
                    <Button id="delete" style={{zIndex: 3}} variant="contained" color="error"
                        >삭제</Button>
                </div>
            </ThemeProvider>
        </div>
    )
}