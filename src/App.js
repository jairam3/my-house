import React from "react";
import Homepage from "./components/HomePage/Homepage";
import VideoPage from "./components/VideoPage/VideoPage";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import Group from "./components/Group/Group";
import SellBetter from "./components/SellBetter/SellBetter";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Brand from "./components/Brand/Brand";
import MediaMagical from "./components/MediaMagical/MediaMagical";
import StoreDataModel from "./components/StoreDataModel/StoreDataModel";
import SuperChargeSection from "./components/SuperChargeSection/SuperChargeSection";
import Library from "./components/Library/Library";
import WaitList from "./components/WaitList/WaitList";
import VideoScroll from "./components/VideoScroll/VideoScroll";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Homepage />
      <VideoPage />
      <ExploreSection/>
      <Group />
      <SellBetter />
      <VideoContainer />
      <HowItWorks/>
      <Brand/>
      <MediaMagical />
      <StoreDataModel />
      <SuperChargeSection />
      <Library />
      <WaitList/>
      <VideoScroll/>
      <Footer />
    </div>
  );
};

export default App;
