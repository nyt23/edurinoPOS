
import bgMenu from '../../../../assets/svgs/bgMenu.png';
import './Bg.css';

const Bg = () => {
    return (
        <div className="bg" style={{backgroundImage: `url(${bgMenu})`}}></div>
    )
}

export default Bg;