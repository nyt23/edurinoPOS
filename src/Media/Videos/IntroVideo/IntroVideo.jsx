
import { useEffect } from "react";
import introVideo from '../../../assets/videos/introVideo.mp4';
import './IntroVideo.css'


const IntroVideo = () => {


    useEffect(() => {
        const video = document.querySelector('.intro-video');
        video.play();

    //     const timerId = setTimeout(() => {
    //         video.muted = false;
    //     }, 100)
    //
    //     return () => {
    //        clearTimeout(timerId);
    //     }
    }, []);

    return (
            <video className={'intro-video'} width="1298.36" height="991.35" autoPlay loop muted>
                <source src={introVideo} type="video/mp4" />
            </video>

    );
}

export default IntroVideo