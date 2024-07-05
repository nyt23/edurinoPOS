

import './OrangePageBg.css';

const OrangePageBg = () => {
    return (
        <svg className={'orange-page-bg'} width="1080" height="1920" viewBox="0 0 1080 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_695_335)">
                <circle cx="885" cy="1263" r="1328" fill="#FD9100"/>
            </g>
            <defs>
                <filter id="filter0_d_695_335" x="-503" y="-125" width="2756" height="2756" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="-10" dy="-10"/>
                    <feGaussianBlur stdDeviation="25"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_695_335"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_695_335" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}

export default OrangePageBg;