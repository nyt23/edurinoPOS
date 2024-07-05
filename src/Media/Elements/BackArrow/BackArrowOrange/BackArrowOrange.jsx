

import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './BackArrowOrange.css';

const BackArrowOrange = ({ onClick }) => {
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
        <svg onClick={handleClick}  className={`back-arrow-orange ${isClicked ? 'clicked' : ''}`}  width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="90" height="90" fill="url(#pattern0_715_97)"/>
            <defs>
                <pattern id="pattern0_715_97" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_715_97" transform="scale(0.0111111)"/>
                </pattern>
                <image id="image0_715_97" width="90" height="90"
                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5UlEQVR4nO2cS4gdRRSGPxXfj2BciKAS3LhwGRHEhRjFTXChiK+d4FpEIYoKcZcJmTtzTo8E78YHuNABCYqOoAtFXAsufCAKCvGBZlCUYMKtk5KaxE2Sntx7p29Vd9/zQW8Gwvx8czh9qqor4DiO4ziO4ziO4ziO40xFVC42YRCUP4KybspSHHKh62xe8pop8bRn0UXPXnJM1e2im5C8l4tMeO9skv9/XHQGyeai80g2F51HsrnoPJLNReeRbC46j2Rz0Xkkm4vOI9lcdB7J5qLzSDYXnUeyuejJN4imfYKyHpQfgvBFUD4x5V1TVoKwJwiPxYo74oDtzAuzkGyT/UF+MeWjtLU6Uh6MwrX0jdKSrV7+t6YMR8p9ccCldJm2SrbTpQtHTTkUlIdSZrpEVyTbmZW+bkIVl7iFeZsurFylf55aC22kq5Vsmwv/NFbcRpswYaG0GJuN7BMmvB2V62kDQfi1tBSbrfCjQXk2rnJBWdEnZ9biQmz2wj+Li9xQTLQp+0pLsHyyjxR7WfbxZWibyz4RhOddtmaT/nqRz9T6MkvbJI/wfnyNS/LLnrM2YidlrxVZxs9lZSuHiox/c1rZml30vFZ2UJ4oI7vhyo4DtsclborKzlHFrpFwfxAeD8pTpkh6OQXhmyAcKyJaOBZXuLXzshn3d+7l/CjcOFLuCsrTJryTawUblK+LTCJNymarOZbZkc4WTTgYlMMzFL6/GXM9+IAmpqpXdpryUhC+b7iqLR0UN5k3a2Uzq1yR8+Iyt5vyahD+bUS28FXRY7KtyCZHvhWuCRUvpg2kLcuueDJH5sZlkzPjfq4MygtB+GcLLeS3eIDLc+ZuRDYlci5xnSlvbJy4TNdCniuRu7NXK0bKvUH5aYqq/jMe5GpK06XLQlG5ypTVKar6GdrAuG2EFpAmlHSGOEkrCcp36d/RFdm0iCA8MslSfyTcTSeuKAu/0zJGFbuDcnxM2au0iVgnWzhACxlVPBCEMEb7OB6HbKN1spXFNIduLByEQZv/G4mNjatxenXFo6Wzdh4T3hxD9lulc3aeOGTbuebsoPzduc+E28io4p5zjX1RubN0zrloIWn/pHTGXnDqcKF+vhbWSmfsDemm2CbL8b/SoUPpjL0gHSCnU5baPr3MjtIZe4MJH9Yuxyt2l87XG9KNr03ax57S+XpDfJkras8fhVdK5+sVJnxcU9UflM7WK+ouUgXly9LZekVY5uGaHv1j6Wy9Ii5zc43oI6Wz9Yo45LK6venS2XpHEH4+i+jDpXPNywtxX+lcvePU5xQLqbI3qltYSD8rnctxHMdxHMdxHMdxHIcM/AdMaJNLSNIZuQAAAABJRU5ErkJggg=="/>
            </defs>
        </svg>

    );
}

BackArrowOrange.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default BackArrowOrange;