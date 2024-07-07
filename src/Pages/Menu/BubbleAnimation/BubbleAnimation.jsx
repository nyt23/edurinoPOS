
import { useSpring, animated } from '@react-spring/web';

import DiscountButton from "../BubbleButtons/Orange/DiscountButton/DiscountButton.jsx";
import HelpButton from "../BubbleButtons/Orange/HelpButton/HelpButton.jsx";
import InteractiveButton from "../BubbleButtons/Orange/InteractiveButton/InteractiveButton.jsx";
import BeginButton from "../BubbleButtons/Purple/BeginButton/BeginButton.jsx";
import GameButton from "../BubbleButtons/Purple/GameButton/GameButton.jsx";
import UpdateButton from "../BubbleButtons/Purple/UpdateButton/UpdateButton.jsx";
import CommentButton from "../BubbleButtons/Blue/CommentButton/CommentButton.jsx";
import SecureButton from "../BubbleButtons/Blue/SecureButton/SecureButton.jsx";

// create a variable for fade in animation
const FadeInSpring = delay => useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: delay });


export const AnimatedOrangeDiscountButton = () => {
    const props = FadeInSpring(100);
    return <animated.div style={props}><DiscountButton /></animated.div>;
};


export const AnimatedOrangeHelpButton = () => {
    const props = FadeInSpring(200);
    return <animated.div style={props}><HelpButton /></animated.div>;
}


export const AnimatedOrangeInteractiveButton = () => {
    const props = FadeInSpring(400);
    return <animated.div style={props}><InteractiveButton /></animated.div>
}


export const AnimatedBlueCommentButton = () => {
    const props = FadeInSpring(500);
    return <animated.div style={props}><CommentButton /></animated.div>
}


export const AnimatedBlueSecureButton = () => {
    const props = FadeInSpring(600);
    return <animated.div style={props}><SecureButton /></animated.div>
}


export const AnimatedPurpleBeginButton = () => {
    const props = FadeInSpring(300);
    return <animated.div style={props}><BeginButton /></animated.div>
}


export const AnimatedPurpleGameButton = () => {
    const props = FadeInSpring(700);
    return <animated.div style={props}><GameButton /></animated.div>
}


export const AnimatedPurpleUpdateButton = () => {
    const props = FadeInSpring(900);
    return <animated.div style={props}><UpdateButton /></animated.div>
}
