
import './CommentButton.css';
import { useLocation } from "wouter";

const CommentButton = () => {
    const [, setLocation] = useLocation();
    function handleClick() {
        console.log('Comment clicked');
        setLocation('/menu/comment');
    }

    return (
        <button className={'comment-button'} onClick={handleClick}>{'Erfahren Sie von'}<br/>{'Pädagogen und'}<br/>{'Therapeuten mehr'}<br/>{'über Edurino'}</button>
    );
}

export default CommentButton;