import Categorie from "./Categorie";
import Choice from "./Choice";
import Social from "./Social";
import VideoDiscover from "./VideoDiscover";



const HomeDiscover = () => {
    return (
        <div className="bg-white p-5">
            <VideoDiscover></VideoDiscover>
            <Choice></Choice>
            <Categorie></Categorie>
            <Social></Social>
        </div>
    );
};

export default HomeDiscover;