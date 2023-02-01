

interface props {
    day: string,
}

export default function CalanderDay({ day }: props) {
    return (
        <div className="calander-day-item">{ day }</div>
    )
}