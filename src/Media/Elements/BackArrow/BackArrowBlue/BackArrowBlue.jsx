

import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './BackArrowBlue.css';

const BackArrowBlue = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);
    //
    const handleClick = (e) => {
        setIsClicked(true);
        // console.log(isClicked);
        // delay the click event to allow the animation to play
        // setTimeout(() => {
        //     setIsClicked(false);
        // });
        // console.log(isClicked);
        onClick(e);
    };

    return (
        <svg onClick={handleClick}  className={`back-arrow-blue ${isClicked ? 'clicked' : ''}`} width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="90" height="90" fill="url(#pattern0_715_99)"/>
            <defs>
                <pattern id="pattern0_715_99" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_715_99" transform="scale(0.0111111)"/>
                </pattern>
                <image id="image0_715_99" width="90" height="90"
                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGUlEQVR4nO2cTYhcRRCA2wR/4l8wHkRQCV4EPa6E1WSqdpNVFoIHxf+b4FlEIREV4s0EE4kKohdR8KALEgw6RidTNdHgSQQP/iAKKtkkmt2pmkTRgMmT3qwHzc7szOxM13tv6oO6DAxTfBTV9bpfTwiO4ziO4ziO4ziO4zhOX0xXs4uRdQ+QnECWeSB9ceyL7ELXOWjJJFVkzf4Xu1308CVnsbpd9AC4eSa7CEn3LyX533DRCSSji04jGV10GsnootNIRhedRjK66DSS0UWnkYwuOo1kdNFpJKOLTiMZXXQayeiie98g6j9kHll/RNIvgZSR9X0geQVItkFdH56gkxvHD+i6MCoMR7J2HyRHkeSTuLWKLPduPnjqmlA2zCXz0gEs3yHr69Bo3jX++S9rQpHJq2Q8P/4A0n1Q1/tjzqFIFEhy9t+IR2Xy8mR9/pYwatMFGgWwHI6tJeSR4laydhCujcpB3RDyBLLutBaDwwiSs8jyLvLcdSEPAMkxcyk89IVz+30z2WpT0Qszq72MbPgVrp9WDs1fbyYaSJ43l8BpAljmzBbLMi6G2LGy5SyQPu2yOZn0N01eUyvLLI09BLB8gJxdklz2yLURXmglVZPH+JGsbNJ9JuPfSFY2y0vBglGsbGR51ET2oCt7/ICu21TTGydJxyp12QwNuRtZHkGWx5F1b1ycgORbYPnLQvTi795aeNmhW3ZkqzbWmjdAQyaB5AlkfS/ZEyzJNyaTyCBlhxWCLOvj2SKQvAqsR4YofFewIncv0OzIVsUWhCzPAcsPA67qM/GgOFix0soOwyLLLoBG6zYgfQNI/hyMcPna9JhsJbJDArbUWlcj67NxA2mlsoFajwVL+pUdEnL74RNXAOkzQHqqb9Esx+/4+NhloWiygwGVQ79fi6xvnTtx6Uv4U8GaIl2tqNT1TmT9uff2obLpM70qWFOky0IbqnNXIulM77LlyZAHum0jIQ/ECYV0e0+thOT7+L1QFNkhRyDrg7086k+QbAl5YbqTbJLfQs6YoNZWZDndXVXrTMgT021kA+kLIYdAXe4Blr+Xly2np2rNtSGHfyOxO86hiw8Oe/L8NxKLG1fdtJCHrHMtPMjydhdV/Y51noVnqtZcu+ycTXqycK8J5xFknVpu7JugJlrnORItJO6fWOdYChYOFzrN1yRV6xxLQ7wp1raiWTUeOljnWAriAXI8Zekwfay3zrE0AMlH7RfE1lbr/EpDvPHVfkGUbdb5lQbkXy9vf/4or1nnVyqAtNZG9IfWuZWKDhepvrLOrVRUSB9oM+L9ZJ1bqZist25aWrTMWedWKsb2z17abm/aOrfSgayzS7SOI9Z5jcSCGK8MWudVOhZepzgne3YxdsbPrPNyHMdxHMdxHMdxHMcJCfgHB/A7nQl+KeoAAAAASUVORK5CYII="/>
            </defs>
        </svg>
    );
}

BackArrowBlue.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default BackArrowBlue;