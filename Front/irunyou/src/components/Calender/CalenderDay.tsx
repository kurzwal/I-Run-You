

interface props {
    day: string,
}

export default function CalenderDay({ day }: props) {
    return (
        <div className="calender-day-item">{ day }</div>
    )
}