
import introVideo from '../../../assets/videos/introVideo.mp4';
import './IntroVideo.css'

const IntroVideo = () => {
    return (

            <video className={'intro-video'} width="1298.36" height="991.35" autoPlay loop>
                <source src={introVideo} type="video/mp4" />
            </video>

    );
}

export default IntroVideo