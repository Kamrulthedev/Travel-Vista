import DiscoverNavber from "@/components/modules/discover/DiscoverNavber";
import NewsFeed from "@/components/NewsFeed/NewsFeed";
import Navber from "@/components/ui/shared/Navber";


const page = () => {
    return (
        <div>
            <Navber></Navber>
            <NewsFeed></NewsFeed>
            <DiscoverNavber></DiscoverNavber>
        </div>
    );
};

export default page;