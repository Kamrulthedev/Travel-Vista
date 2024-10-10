import Footer from '@/components/ui/shared/Footer';
import AboutBannar from './AboutBannar';
import AboutDiscription from './AboutDiscription';
import Join from './Join';
import Evolution from './Evolution';
import Navber from '@/components/ui/shared/Navber';


const About = () => {
    return (
        <div>
            <Navber></Navber>
            <AboutBannar></AboutBannar>
            <AboutDiscription></AboutDiscription>
            <Join></Join>
            <Evolution></Evolution>
            <Footer></Footer>
        </div>
    );
};

export default About;