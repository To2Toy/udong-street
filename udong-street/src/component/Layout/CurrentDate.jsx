import Clock from "react-live-clock";

const CurrentDate = () => {
    return (
        <div className="currTime">
            <Clock format={'YYYY - MM - DD'}
            ticking={true}
            timezone={'KR/Pacific'}
            />
        </div>
    )
}
export default CurrentDate