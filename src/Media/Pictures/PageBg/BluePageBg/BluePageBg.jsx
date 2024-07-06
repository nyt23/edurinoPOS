
import './BluePageBg.css';

const BluePageBg = () => {
    return (
        <svg className={'blue-page-bg'} width="2756" height="2756" viewBox="0 0 2756 2756" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1079_1472)">
                <circle cx="1388" cy="1388" r="1328" fill="#3FBFF0"/>
            </g>
            <defs>
                <filter id="filter0_d_1079_1472" x="0" y="0" width="2756" height="2756" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-10" dy="-10"/>
                    <feGaussianBlur stdDeviation="25"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1472"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1472" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}

export default BluePageBg;