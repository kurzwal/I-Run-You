import "./myinfo.css";

interface props {
    label: string,
    value: string
}

export default function InfoItem({ label, value }: props) {
    return (
        <div className="row">
            <div className="row-label">{ label }</div>
            <div className="row-value">{ value }</div>
        </div>
    )
}