import Expolar from './Expolar';
import Landing from './Landing';
import PopularPost from './PopularPost';
import Tread from './Tread';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Tread></Tread>
            <PopularPost></PopularPost>
            <Expolar></Expolar>
        </div>
    );
};

export default Home;