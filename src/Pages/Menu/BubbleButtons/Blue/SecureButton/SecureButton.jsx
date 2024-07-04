
import './SecureButton.css';
import { useLocation } from "wouter";

const SecureButton = () => {
    const [, setLocation] = useLocation();
    function handleClick() {
        console.log('Secure clicked');
        setLocation('/menu/secure');
    }

    return (
        <button className={'secure-button'} onClick={handleClick}>{'Sicheres'}<br/>{'digitales Lernen'}<br/>{'für Kinder'}</button>
    );
}

export default SecureButton;