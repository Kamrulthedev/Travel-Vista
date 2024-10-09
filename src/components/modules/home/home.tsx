import Expolar from './Expolar';
import Landing from './Landing';
import More from './More';
import PopularPost from './PopularPost';
import SimpleCard from './SimpleCard';
import Travelers from './Travelers';
import Tread from './Tread';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <SimpleCard></SimpleCard>
            <Tread></Tread>
            <More></More>
            <PopularPost></PopularPost>
            <Expolar></Expolar>
            <Travelers></Travelers>
        </div>
    );
};

export default Home;