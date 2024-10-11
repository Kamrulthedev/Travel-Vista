import NewsFeed from "@/components/NewsFeed/NewsFeed";
import Navber from "@/components/ui/shared/Navber";


const page = () => {
    return (
        <div>
            <Navber></Navber>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default page;