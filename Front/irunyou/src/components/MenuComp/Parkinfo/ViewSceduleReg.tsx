import DialogHeaderBack from './DialogHeaderBack';
import ScheduleRegistBody from './ScheduleRegistBody';
import useStore from './Store';

export default function ViewSceduleReg() {

    const { parkInfo } = useStore();

    return (
        <div>
            <DialogHeaderBack parkName={ parkInfo.parkName }></DialogHeaderBack>
            <ScheduleRegistBody></ScheduleRegistBody>
        </div>
    )
}