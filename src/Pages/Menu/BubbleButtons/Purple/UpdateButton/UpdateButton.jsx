
import './UpdateButton.css';
import { useLocation } from "wouter";

const UpdateButton = () => {
    const [, setLocation] = useLocation();
    function handleClick() {
        console.log('Update clicked');
        setLocation('/menu/update');
    }

    return (
        <button className={'update-button'} onClick={handleClick}>{'Regelmäßige'}<br/>{'Updates und'}<br/>{'neue Inhalte'}</button>
    );
}

export default UpdateButton;