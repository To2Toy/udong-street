import logo from '../../asset/architecture-and-city.png'
import './WheelCard.css'

const WheelCard = (props) => {
    return (
        <div id='cardBody'>
            <img src={logo} alt=""/>
            <p id='cardName'>{props.name}</p>
        </div>

    )
}
export default WheelCard