
import './TransparentWhiteSticker.css';
import {useLocation} from "wouter";
import PropTypes from "prop-types";

const TransparentWhiteSticker = ( { label } ) => {
    const [, setLocation] = useLocation();

    function handleGoForward() {
        console.log(`Feedback given: '${label}', go to discount page`);
        setLocation('/menu/feedback/discount');
    }

    return (
        <svg onClick={handleGoForward} width="585" height="218" viewBox="0 0 585 218" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="762" height="218" rx="100" fill="#FEF7EE" fillOpacity="0.01"/>
        </svg>
    );
}


TransparentWhiteSticker.propTypes = {
    label: PropTypes.string.isRequired
}

export default TransparentWhiteSticker;