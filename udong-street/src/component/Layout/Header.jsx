import './Header.css';
import CurrentDate from './CurrentDate';
import Source from './Source';

const Header = () => {
    return (
        <div id='header'>
            <CurrentDate />
            <Source />
            <div id='title'>
                우<a>리</a>동<a>네</a>거리<a>두기</a>
            </div>
        </div>

    )
}
export default Header