import "./parklist.css";
import ParkListItem from "./ParkListItem";

export default function ParkListBody() {
    return (
        <div className="park-list-container">
            <ParkListItem thumbnail="" name="송상현광장" desc="송상현이 잠들어있습니다(아님)" area="30000"></ParkListItem>
            <ParkListItem thumbnail="" name="송상현광장" desc="송상현이 잠들어있습니다(아님)" area="30000"></ParkListItem>
        </div>
    )
}