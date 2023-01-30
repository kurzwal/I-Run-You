import "./parklist.css";

interface props {
    thumbnail: string,
    name: string,
    desc: string,
    area: string
}

export default function ParkListItem({ thumbnail, name, desc, area }: props) {
    return (
        <div className="park-list-item">
            <img className="park-list-img" src={ thumbnail } alt="" />
            <div className="park-list-desc-container">
                <div className="park-list-title">{ name }</div>
                <div className="park-list-desc">{ desc }</div>
                <div className="park-list-area">면적 : { area }㎡</div>
            </div>
        </div>
    )
}