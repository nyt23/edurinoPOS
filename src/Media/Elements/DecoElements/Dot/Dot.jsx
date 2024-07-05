
import './Dot.css';

const Dot = () => {
    return (
        <svg className={'dot'} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="22" fill="url(#paint0_linear_668_86)"/>
            <defs>
                <linearGradient id="paint0_linear_668_86" x1="22" y1="0" x2="22" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A679FF"/>
                    <stop offset="1" stopColor="#8C52FE"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default Dot;