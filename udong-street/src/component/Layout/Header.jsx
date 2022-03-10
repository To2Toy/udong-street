import './Header.css';
import CurrentDate from './CurrentDate';
import CurrentLocation from './CurrentLocation';

const Header = () => {
    return (
        <div id='header'>
            <CurrentDate />
            <CurrentLocation />
            <div id='title'>
                우<a>리</a>동<a>네</a>거리<a>두기</a>
            </div>
        </div>

    )
}
export default Header