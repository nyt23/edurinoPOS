import { useEffect, useState } from "react";
import { Howl } from 'howler';
import bubbleRiseSound from "../../assets/Sound/bubbleRiseSound.mp3";

import './Menu.css'

// logo
import Logo from "../../Media/Pictures/Logo/Logo.jsx";

// bg
import Bg from './Bg/Bg.jsx';
// blueBanner
import BlueBanner from "../../Media/Pictures/PicMenu/BlueBanner/BlueBanner.jsx";
import Children from "../../Media/Elements/DecoElements/Children/Children.jsx";
import Star from "../../Media/Elements/DecoElements/Star/Star.jsx";
import Figurine from "../../Media/Elements/DecoElements/Figurine/Figurine.jsx";
import ABC from "../../Media/Elements/DecoElements/ABC/ABC.jsx";
import {
    AnimatedBlueCommentButton,
    AnimatedBlueSecureButton,
    AnimatedOrangeDiscountButton,
    AnimatedOrangeHelpButton,
    AnimatedOrangeInteractiveButton,
    AnimatedPurpleBeginButton,
    AnimatedPurpleGameButton,
    AnimatedPurpleUpdateButton
} from "./BubbleAnimation/BubbleAnimation.jsx";
import Dot from "../../Media/Elements/DecoElements/Dot/Dot.jsx";
import Rocket from "../../Media/Elements/DecoElements/Rocket/Rocket.jsx";
import Symbol from "../../Media/Elements/DecoElements/Symbol/Symbol.jsx";





const Menu = () => {
    useEffect(() => {
        const sound = new Howl({
            src: bubbleRiseSound,
            volume: 1,
        });

        const timer = setTimeout(() => {
            sound.play();
        }, 200);

        return () => clearTimeout(timer);
    }, []);


    // const [soundInitiated, setSoundInitiated] = useState(false);

    // useEffect(() => {
    //     const sound = new Howl({
    //         src: bubbleRiseSound,
    //         volume: 1,
    //     });
    //
    //     const playSound = () => {
    //         if (!soundInitiated) {
    //             // sound plays with 0.2s delay
    //             const timer = setTimeout(() => {
    //                 sound.play();
    //             }, 200);
    //             setSoundInitiated(true);
    //             return () => clearTimeout(timer);
    //         }
    //     }
    //
    //     // Adding event listeners for user interaction
    //     window.addEventListener('click', playSound);
    //     window.addEventListener('touchstart', playSound);
    //
    //     // Cleanup to remove event listeners
    //     return () => {
    //         window.removeEventListener('click', playSound);
    //         window.removeEventListener('touchstart', playSound);
    //     };
    //
    //     // // sound plays with 0.2s delay
    //     // const timer = setTimeout(() => {
    //     //     sound.play();
    //     // }, 200);
    //     //
    //     // return () => clearTimeout(timer);
    // }, [soundInitiated])

    return (
        <div>
            <div className={'bg'}><Bg /></div>
            <div className={'body'}>
                <div className={'Logo'}><Logo /></div>
                <div className={'banner'}>
                    <BlueBanner/>
                    <p style={{
                        fontFamily: 'Atma',
                        fontSize: '100px',
                        textAlign: 'right',
                        lineHeight: 1.1,
                        position: 'absolute',
                        left: '289px',
                        top: '70px',
                        width: '699px',
                        height: '226px',
                        color: '#FEF7EE'
                    }}>
                        Get Your Edurino Insights
                    </p>
                </div>
                <div>
                    <div className={'bubbles'}>
                        <AnimatedOrangeDiscountButton/>
                        <AnimatedOrangeHelpButton />
                        <AnimatedOrangeInteractiveButton />
                        <AnimatedBlueCommentButton />
                        <AnimatedBlueSecureButton />
                        <AnimatedPurpleBeginButton />
                        <AnimatedPurpleGameButton />
                        <AnimatedPurpleUpdateButton />
                    </div>
                        <Children className={'children-menu'}/>
                        <Star/>
                        <Figurine/>
                        <ABC/>
                        <Dot />
                        <Rocket />
                        <Symbol />
                </div>
            </div>
        </div>
    )
}

export default Menu;

