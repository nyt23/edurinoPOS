// import foxSvg from '../assets/fox.svg';
import './LetsExplore.css'


// mask-layer
import Fox from '../../Media/Pictures/PicLetsExplore/Fox/Fox.jsx';
import Logo from "../../Media/Logo/Logo.jsx";
import PurpleElement from "../../Media/Pictures/PicLetsExplore/PurpleElement/PurpleElement.jsx";

// video-layer



// background-layer
import Deco from "../../Media/Pictures/PicLetsExplore/Deco/Deco.jsx";



export default function LetsExplore () {
    return (
        <div>
            <div className={'mask-layer'}>
                {/*<img src={foxSvg} alt={'fox'}/>*/}
                <Fox style={{width:"892.87px", height:"1348px"}}/>
                <Logo />
                <PurpleElement />
                    <div className={'head-line-container'}>
                        <p id={'head-line'}>Your Child’s Best Learning Friend</p>
                    </div>
            </div>

            <div className={'video-layer'}>

            </div>

            <div className={'background-layer'}>
                <Deco />

            </div>
        </div>
    )
}