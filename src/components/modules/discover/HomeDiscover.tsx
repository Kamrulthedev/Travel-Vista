import Categorie from "./Categorie";
import Choice from "./Choice";
import VideoDiscover from "./VideoDiscover";



const HomeDiscover = () => {
    return (
        <div className="bg-white p-5">
            <VideoDiscover></VideoDiscover>
            <Choice></Choice>
            <Categorie></Categorie>
        </div>
    );
};

export default HomeDiscover;