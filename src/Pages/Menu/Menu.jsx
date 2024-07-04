
import './Menu.css'

// logo
import Logo from "../../Media/Pictures/Logo/Logo.jsx";

// bg
import Bg from '../../Media/Pictures/PicMenu/Bg/Bg.jsx';
// blueBanner
import BlueBanner from "../../Media/Pictures/PicMenu/BlueBanner/BlueBanner.jsx";
import Children from "../../Media/Pictures/PicMenu/DecoElements/Children/Children.jsx";
import Star from "../../Media/Pictures/PicMenu/DecoElements/Star/Star.jsx";
import Figurine from "../../Media/Pictures/PicMenu/DecoElements/Figurine/Figurine.jsx";
import ABC from "../../Media/Pictures/PicMenu/DecoElements/ABC/ABC.jsx";
import {
    AnimatedBlueCommentBg, AnimatedBlueCommentButton,
    AnimatedBlueSecureBg, AnimatedBlueSecureButton,
    AnimatedDiscountButton,
    AnimatedOrangeDiscountBg,
    AnimatedOrangeHelpBg,
    AnimatedOrangeHelpButton,
    AnimatedOrangeInteractiveBg,
    AnimatedOrangeInteractiveButton,
    AnimatedPurpleBeginBg,
    AnimatedPurpleBeginButton,
    AnimatedPurpleGameBg,
    AnimatedPurpleGameButton,
    AnimatedPurpleUpdateBg, AnimatedPurpleUpdateButton
} from "./BubbleAnimation/BubbleAnimation.jsx";
import Dot from "../../Media/Pictures/PicMenu/DecoElements/Dot/Dot.jsx";
import Rocket from "../../Media/Pictures/PicMenu/DecoElements/Rocket/Rocket.jsx";
import Symbol from "../../Media/Pictures/PicMenu/DecoElements/Symbol/Symbol.jsx";




const Menu = () => {
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
                <div className={'circle-options'}>
                    <div>
                        <AnimatedOrangeDiscountBg/>
                        <AnimatedDiscountButton/>
                        <AnimatedOrangeHelpBg />
                        <AnimatedOrangeHelpButton />
                        <AnimatedOrangeInteractiveBg />
                        <AnimatedOrangeInteractiveButton />
                        <AnimatedBlueCommentBg />
                        <AnimatedBlueCommentButton />
                        <AnimatedBlueSecureBg />
                        <AnimatedBlueSecureButton />
                        <AnimatedPurpleBeginBg />
                        <AnimatedPurpleBeginButton />
                        <AnimatedPurpleGameBg />
                        <AnimatedPurpleGameButton />
                        <AnimatedPurpleUpdateBg />
                        <AnimatedPurpleUpdateButton />
                        <Children/>
                        <Star/>
                        <Figurine/>
                        <ABC/>
                        <Dot />
                        <Rocket />
                        <Symbol />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;

