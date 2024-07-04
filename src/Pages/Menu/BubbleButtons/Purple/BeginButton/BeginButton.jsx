
import './BeginButton.css';
import { useLocation } from "wouter";

const BeginButton = () => {
    const [, setLocation] = useLocation();
    function handleClick () {
        console.log('Begin clicked');
        setLocation('/menu/begin');
    }

    return (
        <div>
            <button className={'begin-button'} onClick={handleClick}>{'Zeigen'}<br/>{'Sie mir,'}<br/>{'wie ich'}<br/>{'beginne'}</button>
        </div>
    );
}

export default BeginButton;