
import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './BackArrowPurple.css';

const BackArrowPurple = ({ onClick }) => {
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
        <svg onClick={handleClick} className={`back-arrow-purple ${isClicked ? 'clicked' : ''}`} width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="90" height="90" fill="url(#pattern0_695_311)"/>
            <defs>
                <pattern id="pattern0_695_311" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_695_311" transform="scale(0.0111111)"/>
                </pattern>
                <image id="image0_695_311" width="90" height="90"
                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEA0lEQVR4nO2cS4hcVRBAy4j/T0hciKAibly4VARxIX6QwBjTVe3zhyCCuBQxECUR2pXp6apuMypiNqLgQgckKDqCLhRxLbjwgygoxA+aoCiiAatLbg8u1LyZ7p7uW++9rgN30zB0cbqoW/c3AEEQBEEQBEEQBEEQBMFUrOyyMxi1z6Q/MepxIR0cftBOC50zliyka0JD+9dAlRA9b8k0tJTdIXoGdAo7XVDfOJnkf0aIziBZQnQeyRKi80iWEJ1HsoToPJIlROeRLCE6j2QJ0XkkS4jOI1lCdB7JEqLzSJYQPfkG0bSDUY8z6leM+pGgvsekrwvqM0K2r0d2T4/sun5hO2FRmIdkmeQHIf2OSd9JW6uMdvuh3XYhNA1vyVI2UD8X1MNMtrtf2FlQZyormf479HdGPcJtuyPFDHWiPpKH/6/7pE8P2nYlLFp3IV4D9cNUWqCK1DWTZaMsJ32/37JroEoIaddbjMxH9lBQX+2iXQxVQFC/95Yic5847dHVwk51FZ16Vn8Zw/kP1A9kj13iJxr1oLsEypbdx9wmyyZOhrJp7bb9IZsySUd90eWaWmN6aZpk6Jud++zM7LIXrYzIuuw1l2X8ImY2ox5xaf8WNLNXwINFzGxBe8BF9qwzu1/YzgHZ5dKyqxjtxh4aMtr9PbSHGfVQmpwY9TMm/dNDdPreQduurr1sGJNOx7Z1C7u0T3aDkD0ipK/lWsEy6acuncgsZcMWeWqPXZbOFhn1OUY9OjfZqMvgRdUu0HQ6tm29BOkTQvrlTGWjajooBi+2mtkwJwzslF7LrhXSFwT1jxnJ/sT1mGwrsiEDT7bsAiZ7PG0gbb2E2EPgybSyISPLt9l5QnaAUX+bWjTpD3yvnQN1kw0ODNAuYtKXRrt2Uwm3x8CbOj2t6LXtFkH9Zoqs/vngku0Ab+r0WGhll53PpKuTy7a9UAXGLSNQAVKHks4QJyolqF+kv4O6yIYKwWh3TbTUb9tNUIsnyqg/QsVgtCVBPTFmrV6FKrFSIptJGSoIt4wY9a8xyseJbmHboXKyUSX1oaOTZ9R+lf+NxPrG1Vjl427vWGsPk768aflAfcU7ztrTLWz75n22/lq7a8JVpEd282ZtX79l13vHuSAlxA54x9gI0uHCxv21rnnH2BjWX4qVtnm/pEMH7xgbwegAGVXLZKes946xMTDp2+Vtni15x9cY0ouvDSbEfd7xNYZnCzu37PyRSZ/3jq9RCOq7JSvEt7xjaxSlD6lQP/aOrVEI2Z0lor/2jq1RLBd2Rcmi5Zh3bI2ic6udXbY37R1b4xDSb08yGR71jmshJsT0ZNA7rsYxuk4xkp0yezS66TPvuIIgCIIgCIIgCIIgCCADfwPFXb2Wfi+y5gAAAABJRU5ErkJggg=="/>
            </defs>
        </svg>
    );
}

BackArrowPurple.propTypes = {
        onClick: PropTypes.func.isRequired
 }

export default BackArrowPurple;