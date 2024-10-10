import Footer from '@/components/ui/shared/Footer';
import MyProfileHome from './MyProfileHome';
import Navber from '@/components/ui/shared/Navber';


const MyProfilePage = () => {
    return (
        <div>
            <Navber></Navber>
             <MyProfileHome></MyProfileHome>
            <Footer></Footer>
        </div>
    );
};

export default MyProfilePage;