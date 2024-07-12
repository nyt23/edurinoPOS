
import './Feedback.css';
import LogoSub from "../../Media/Pictures/LogoSub/LogoSub.jsx";
import OrangePageBg from "../../Media/Pictures/PageBg/OrangePageBg/OrangePageBg.jsx";
import FeedbackSticker from "../../Media/Pictures/PicFeedback/FeedbackSticker/FeedbackSticker.jsx";
import ShapeLine from "../../Media/Elements/ShapeLine/ShapeLine.jsx";
import GirlWithFigurine from "../../Media/Pictures/PicFeedback/GirlWithFigurine/GirlWithFigurine.jsx";
import WhiteSticker from "../../Media/Pictures/PicFeedback/WhiteSticker/WhiteSticker/WhiteSticker.jsx";
import NotAFan from "../../Media/Pictures/PicFeedback/NotAFan/NotAFan.jsx";
import JustSoSo from "../../Media/Pictures/PicFeedback/JustSoSO/JustSoSo.jsx";
import ILoveIt from "../../Media/Pictures/PicFeedback/ILoveIt/ILoveIt.jsx";
import PurpleElementFeedback from "../../Media/Pictures/PicFeedback/PurpleElementFeedback/PurpleElementFeedback.jsx";
import TransparentWhiteSticker
    from "../../Media/Pictures/PicFeedback/TransparentWhiteSticker/TransparentWhiteSticker.jsx";


const Feedback = () => {
    return (
        <div>
            <div className={'feedback-page'}></div>
            <div>
                <LogoSub/>
                {/*<Bg />*/}
                <OrangePageBg/>
                <FeedbackSticker/>
                <GirlWithFigurine/>
                <NotAFan/>
                <JustSoSo/>
                <ILoveIt/>
                <PurpleElementFeedback/>

                <div>
                    <p id={'not-a-fan'}>Not a fan.</p>
                    <p id={'just-so-so'}>Just so so...</p>
                    <p id={'i-love-it'}>I love it!</p>

                </div>

                <div className={'white-sticker1'}>
                    <WhiteSticker/>
                </div>
                <div className={'white-sticker2'}>
                    <WhiteSticker/>
                </div>
                <div className={'white-sticker3'}>
                    <WhiteSticker/>
                </div>

                <div className={'white-sticker1-transparent'}>
                    <TransparentWhiteSticker label={'not a fan'}/>
                </div>
                <div className={'white-sticker2-transparent'} label={'just so so'}>
                    <TransparentWhiteSticker label={'just so so'}/>
                </div>
                <div className={'white-sticker3-transparent'} label={'i love it'}>
                    <TransparentWhiteSticker label={'i love it'}/>
                </div>

                <div className={'feedback-shape-line'}>
                    <ShapeLine/>
                </div>

            </div>

            <div>
                <p className={'feedback-headline'}>Was denken Sie<br/>über Edurino?</p>
                <p className={'feedback-sticker-title'}>Feedback<br/>+<br/>20 %<br/>Gutschein</p>
            </div>
        </div>

    );
}

export default Feedback;