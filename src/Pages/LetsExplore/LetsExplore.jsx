// import foxSvg from '../assets/fox.svg';
import './LetsExplore.css';


// mask-layer
import Fox from '../../Media/Pictures/PicLetsExplore/Fox/Fox.jsx';
import Logo from "../../Media/Pictures/Logo/Logo.jsx";
import PurpleElement from "../../Media/Pictures/PicLetsExplore/PurpleElement/PurpleElement.jsx";
import Button from "./Button/Button.jsx";

// video-layer
import IntroVideo from "../../Media/Videos/IntroVideo/IntroVideo.jsx";

// background-layer
import StarAndDots from "../../Media/Pictures/PicLetsExplore/StarAndDots/StarAndDots.jsx";


export default function LetsExplore () {
    return (
        <>
        <div>
            <div className={'mask-layer'}>
                {/*<img src={foxSvg} alt={'fox'}/>*/}
                <Fox style={{width:"892.87px", height:"1348px"}}/>
                <Logo />
                <PurpleElement />
                    <div className={'head-line-container'}>
                        <p id={'head-line'}>Your Child’s Best Learning Friend</p>
                    </div>
                <Button />
            </div>

            <div className={'video-layer'}>
                <IntroVideo />
            </div>

            <div className={'background-layer'}>
                <StarAndDots />
            </div>
        </div>
    </>
    )
}