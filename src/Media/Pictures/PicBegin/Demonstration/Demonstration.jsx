
import './Demonstration.css';
import demonstration from '../../../../assets/pngs/demonstration.png';

const Demonstration = () => {
    return (
        <div className="demonstration" style={{backgroundImage: `url(${demonstration})`}}></div>
    );
}

export default Demonstration;

