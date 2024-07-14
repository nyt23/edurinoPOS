
import './Phone.css';
import phone from '../../../../assets/pngs/phone.png';

const Phone = () => {
    return (
        <div className={'phone'} style={{backgroundImage: `url(${phone})`}}></div>
    );
}

export default Phone;