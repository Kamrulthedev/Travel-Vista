import Landing from './Landing';
import PopularPost from './PopularPost';
import Tread from './Tread';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Tread></Tread>
            <PopularPost></PopularPost>
        </div>
    );
};

export default Home;