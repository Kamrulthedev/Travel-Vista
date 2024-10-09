import SimpleCard from "../home/SimpleCard";
import Categorie from "./Categorie";
import Choice from "./Choice";
import DiscoverNavber from "./DiscoverNavber";
import Social from "./Social";
import VideoDiscover from "./VideoDiscover";



const HomeDiscover = () => {
    return (
        <div className="bg-white">
            <VideoDiscover></VideoDiscover>
            <Choice></Choice>
            <Categorie></Categorie>
            <Social></Social>
            <SimpleCard></SimpleCard>
            <DiscoverNavber></DiscoverNavber>
        </div>
    );
};

export default HomeDiscover;