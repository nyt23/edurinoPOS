
import BlueBannerBack from './BlueBannerBack/BlueBannerBack.jsx';
import BlueBannerFront from './BlueBannerFront/BlueBannerFront.jsx';

import './BlueBanner.css';

const BlueBanner = () => {
    return (
        <div>
            <div>
                <BlueBannerBack />
                <BlueBannerFront />
            </div>
        </div>
    );
}

export default BlueBanner;