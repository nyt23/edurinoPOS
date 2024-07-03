
import { useSpring, animated } from '@react-spring/web';

import OrangeDiscountBg from "../../../Media/Pictures/PicMenu/BubbleBg/OrangeBubblesBg/DiscountBg/OrangeDiscountBg.jsx";
import DiscountButton from "../BubbleButtons/Orange/DiscountButton/DiscountButton.jsx";
import OrangeHelpBg from "../../../Media/Pictures/PicMenu/BubbleBg/OrangeBubblesBg/HelpBg/OrangeHelpBg.jsx";
import OrangeInteractiveBg
    from "../../../Media/Pictures/PicMenu/BubbleBg/OrangeBubblesBg/InteractiveBg/OrangeInteractiveBg.jsx";
import HelpButton from "../BubbleButtons/Orange/HelpButton/HelpButton.jsx";
import InteractiveButton from "../BubbleButtons/Orange/InteractiveButton/InteractiveButton.jsx";


// Fade in animation
const FadeInSpring = delay => useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: delay });

// Repeat for each component that needs to fade in
export const AnimatedOrangeDiscountBg = () => {
    const props = FadeInSpring(100);
    return <animated.div style={props}><OrangeDiscountBg /></animated.div>;
};

export const AnimatedDiscountButton = () => {
    const props = FadeInSpring(100);
    return <animated.div style={props}><DiscountButton /></animated.div>;
};


export const AnimatedOrangeHelpBg = () => {
    const props = FadeInSpring(200);
    return <animated.div style={props}><OrangeHelpBg /></animated.div>;
};

export const AnimatedOrangeHelpButton = () => {
    const props = FadeInSpring(200);
    return <animated.div style={props}><HelpButton /></animated.div>;
}

export const AnimatedOrangeInteractiveBg = () => {
    const props = FadeInSpring(300);
    return <animated.div style={props}><OrangeInteractiveBg /></animated.div>;
}

export const AnimatedOrangeInteractiveButton = () => {
    const props = FadeInSpring(400);
    return <animated.div style={props}><InteractiveButton /></animated.div>
}