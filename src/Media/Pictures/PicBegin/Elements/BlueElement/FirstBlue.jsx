
import PropTypes from "prop-types";

const FirstBlue = ( {className} ) => {
    return (
        <svg className={className} width="205" height="216" viewBox="0 0 205 216" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M122.248 0.825726C156.142 2.10185 178.44 32.3853 203.924 54.7686C228.253 76.1377 264.147 93.4689 264.588 125.847C265.022 157.753 231.739 178.106 205.857 196.769C187.244 210.192 164.868 212.553 141.983 214.259C119.719 215.919 98.2542 215.79 78.0467 206.296C49.0728 192.684 14.7572 180.318 4.90854 149.859C-6.18977 115.534 4.58175 76.447 26.8977 48.1035C49.7118 19.1273 85.3946 -0.56182 122.248 0.825726Z"
                  fill="#3FBFF0"/>
        </svg>
    );
}

FirstBlue.propTypes = {
    className: PropTypes.string
}

export default FirstBlue;