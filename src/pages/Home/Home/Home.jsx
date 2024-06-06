import Carusel from "./home/Carusel";
import OnlineOrder from "./home/OnlineOrder";
import Banner from "./home/Banner";
import Manu from "./home/Menu";
import CallUs from "./home/CallUs";
import Recommands from "./home/Recommands";
import PralexBanner from "./home/PralexBanner";
import Reviews from "./home/Reviews";


export default function Home() {
  return (
    <div>
      <Carusel></Carusel>
      <OnlineOrder></OnlineOrder>
      <Banner></Banner>
      <Manu></Manu>
      <CallUs></CallUs>
      <Recommands></Recommands>
      <PralexBanner></PralexBanner>
      <Reviews></Reviews>
    </div>
  )
}
