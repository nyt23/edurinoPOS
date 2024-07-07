
import './BeginButton.css';
import { useLocation } from "wouter";

const BeginButton = () => {
    const [, setLocation] = useLocation();
    function handleClick () {
        console.log('Begin clicked');
        const button = document.querySelector('.begin-button');
        button.classList.add('begin-button-grow');
        setTimeout(() => {
            setLocation('/menu/begin');
        }, 150);
    }

    return (
        <div>
            <button className={'begin-button'} onClick={handleClick}>
                <span>{'Zeigen'}<br/>{'Sie mir,'}<br/>{'wie ich'}<br/>{'beginne'}</span>
            </button>
        </div>
    );
}

export default BeginButton;