import DiscoverNavber from "../discover/DiscoverNavber";
import ContactCard from "./ContactCard";
import ContactHome from "./ContactHome";
import ContactSimpleCard from "./ContactSimpleCard";
import ContactUs from "./ContactUs";



const Contact = () => {
    return (
        <div>
            <ContactHome></ContactHome>
            <ContactSimpleCard></ContactSimpleCard>
            <ContactCard></ContactCard>
            <ContactUs></ContactUs>
            <DiscoverNavber></DiscoverNavber>
        </div>
    );
};

export default Contact;