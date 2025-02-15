
import './WhiteSticker.css';

const WhiteSticker = () => {
    return (
        <svg width="605" height="258" viewBox="0 0 605 258" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_695_397)">
                <rect x="20" y="20" width="762" height="218" rx="100" fill="#FEF7EE"/>
            </g>
            <defs>
                <filter id="filter0_d_695_397" x="0" y="0" width="802" height="258" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_695_397"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_695_397" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}

export default WhiteSticker;