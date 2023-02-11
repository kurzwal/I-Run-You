import DialogHeaderBack from './DialogHeaderBack';
import ScheduleInfo from './ScheduleInfo';
import useStore from './Store';


export default function ViewSceduleInfo() {

    const { parkInfo } = useStore();
    return (
        <>
            <DialogHeaderBack parkName={parkInfo.parkName} />
            <ScheduleInfo />
            {/* <ScheduleComment /> */}
            
        </>
    )
}