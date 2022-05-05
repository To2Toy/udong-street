import Clock from "react-live-clock";

const CurrentDate = () => {
    return (
        <div className="currTime">
            <Clock format={'YYYY - MM - DD'}
            ticking={true}
            timezone={'Asia/Seoul'}
            />
            <br/>
            <Clock format={'hh : mm : ss'}
            ticking={true}
            timezone={'Asia/Seoul'}
            />
        </div>
    )
}
export default CurrentDate