
import './HelpButton.css';
import { useLocation } from "wouter";


const HelpButton = () => {
    const [, seLocation] = useLocation();
    function handleClick() {
        console.log('Help clicked');
        seLocation('/menu/help');
    }

    return (
        <button className={'help-button'} onClick={handleClick}>{'Wie Edurino'}<br/>{'Ihren Kindern'}<br/>{'beim Lernen'}<br/>{'hilft'}</button>
    )
}

export default HelpButton;