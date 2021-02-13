import { useEffect } from 'react';

//Components
import NavHeader from './nav-header';
import AudioPlayer from './audio-player'
import NavMobile from './mobile';

const Navigation = () => {
    return (
        <nav>
            <NavMobile />
            <NavHeader />
            <AudioPlayer />
        </nav>
    );
}

export default Navigation;