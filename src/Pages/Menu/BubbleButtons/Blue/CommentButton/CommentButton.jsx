
import './CommentButton.css';
import { useLocation } from "wouter";

const CommentButton = () => {
    const [, setLocation] = useLocation();
    function handleClick() {
        console.log('Comment clicked');
        const button = document.querySelector('.comment-button');
        button.classList.add('comment-button-grow');
        setTimeout(() => {
            setLocation('/menu/comment');
        }, 150);
    }

    return (
        <button className={'comment-button'} onClick={handleClick}>
            <span>{'Erfahren Sie von'}<br/>{'Pädagogen und'}<br/>{'Therapeuten mehr'}<br/>{'über Edurino'}</span>
        </button>
    );
}

export default CommentButton;