
import bgMenu from '../../../assets/pngs/bgMenu.png';
import './Bg.css';

const Bg = () => {
    return (
        <div className="bg" style={{backgroundImage: `url(${bgMenu})`}}></div>
    )
}

export default Bg;