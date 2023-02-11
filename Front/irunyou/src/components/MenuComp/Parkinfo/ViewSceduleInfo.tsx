import DialogHeaderBack from './DialogHeaderBack';
import ScheduleComment from './ScheduleComment';
import ScheduleInfo from './ScheduleInfo';
import useStore from './Store';


export default function ViewSceduleInfo() {

    const { parkInfo } = useStore();
    const { scheduleInfo } = useStore();
    
    return (
        <>
            <DialogHeaderBack parkName={parkInfo.parkName} />
            <ScheduleInfo />
            <ScheduleComment runScheduleIndex={scheduleInfo.runScheduleIndex}/>
        </>
    )
}