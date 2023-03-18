import DialogHeaderBack from './DialogHeaderBack';
import ScheduleUpdateBody from './ScheduleUpdateBody';
import useStore from './Store';

export default function ViewSceduleReg() {

    const { parkInfo } = useStore();

    return (
        <>
            <DialogHeaderBack parkName={ parkInfo.parkName }></DialogHeaderBack>
            <ScheduleUpdateBody></ScheduleUpdateBody>
        </>
    )
}