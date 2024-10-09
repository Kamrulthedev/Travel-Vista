import DiscoverNavber from "../discover/DiscoverNavber";
import ContactHome from "./ContactHome";
import ContactSimpleCard from "./ContactSimpleCard";



const Contact = () => {
    return (
        <div>
            <ContactHome></ContactHome>
            <ContactSimpleCard></ContactSimpleCard>
            <DiscoverNavber></DiscoverNavber>
        </div>
    );
};

export default Contact;