import Footer from "@/components/ui/shared/Footer";
import Destination from "./Destination";
import Expolar from "./Expolar";
import Landing from "./Landing";
import Might from "./Might";
import More from "./More";
import PopularPost from "./PopularPost";
import SimpleCard from "./SimpleCard";
import Travelers from "./Travelers";
import Tread from "./Tread";
import Navber from '@/components/ui/shared/Navber';

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Landing></Landing>
      <SimpleCard></SimpleCard>
      <Tread></Tread>
      <PopularPost></PopularPost>
      <Might></Might>
      <More></More>
      <Destination></Destination>
      <Expolar></Expolar>
      <Travelers></Travelers>
      <Footer></Footer>
    </div>
  );
};

export default Home;
