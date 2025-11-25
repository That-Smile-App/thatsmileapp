import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import TermsAndConditions from './Screens/TermsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy'
import About from './Screens/About';
import ContactUs from './Screens/ContactUs';
// Article Screens
import ArticlesIndex from "./Screens/Articles/ArticlesIndex";

import ThePowerOfYourSmile from "./Screens/Articles/the-power-of-your-smile";
import WhatHappensToYourBrainWhenYouSmile from "./Screens/Articles/what-happens-to-your-brain-when-you-smile";
import WhatIsADuchenneSmile from "./Screens/Articles/what-is-a-duchenne-smile";
import WhyIsADuchenneSmileMorePowerful from "./Screens/Articles/why-is-a-duchenne-smile-more-powerful-than-other-smiles";
import IsSmilingBetterThanChocolate from "./Screens/Articles/is-smiling-better-than-chocolate";
import HowDoesSmilingReduceStressAndAnxiety from "./Screens/Articles/how-does-smiling-reduce-stress-and-anxiety";
import HowDoesSmilingIncreaseHappiness from "./Screens/Articles/how-does-smiling-increase-happiness";
import IsSmilingContagious from "./Screens/Articles/is-smiling-contagious";
import HowDoesSmilingElevateOurMood from "./Screens/Articles/how-does-smiling-elevate-our-mood";
import HowDoesSmilingReducePain from "./Screens/Articles/how-does-smiling-reduce-pain";
import CanSmilingMakeYouLookYounger from "./Screens/Articles/can-smiling-make-you-look-younger";
import DoesSmilingMakeYouMoreAttractive from "./Screens/Articles/does-smiling-make-you-more-attractive";
import HowDoesSmilingImproveRelationships from "./Screens/Articles/how-does-smiling-improve-relationships";
import CanSmilingHelpYouLiveLonger from "./Screens/Articles/can-smiling-help-you-live-longer";
import HowDoesSmilingBoostYourImmuneSystem from "./Screens/Articles/how-does-smiling-boost-your-immune-system";
import HowDoesSmilingLowerYourBloodPressure from "./Screens/Articles/how-does-smiling-lower-your-blood-pressure";
import DoesSmilingCauseWrinkles from "./Screens/Articles/does-smiling-cause-wrinkles";
import AreSmilesMoreAttractiveThanMakeup from "./Screens/Articles/are-smiles-more-attractive-than-makeup";
import HowDoesSmilingBoostConfidence from "./Screens/Articles/how-does-smiling-boost-confidence";
import WhyAreSmilesMorePowerfulWhenLookingAtFamily from "./Screens/Articles/why-are-smiles-more-powerful-when-looking-at-family";
import HowDoesSmilingMakeYouMoreGrateful from "./Screens/Articles/how-does-smiling-make-you-more-grateful";
import HowDoesSmilingBoostEnergy from "./Screens/Articles/how-does-smiling-boost-energy";
import HowDoesSmilingHelpUsFeelAtPeace from "./Screens/Articles/how-does-smiling-help-us-feel-at-peace";
import HowLongDoYouHaveToSmile from "./Screens/Articles/how-long-do-you-have-to-smile-to-receive-health-benefits";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/smilescience" element={<ArticlesIndex />} />

      <Route path="/smilescience/the-power-of-your-smile" 
       element={<ThePowerOfYourSmile />} />

        <Route path="/smilescience/what-happens-to-your-brain-when-you-smile"
          element={<WhatHappensToYourBrainWhenYouSmile />} />

        <Route path="/smilescience/what-is-a-duchenne-smile"
          element={<WhatIsADuchenneSmile />} />

        <Route path="/smilescience/why-is-a-duchenne-smile-more-powerful-than-other-smiles"
          element={<WhyIsADuchenneSmileMorePowerful />} />

        <Route path="/smilescience/is-smiling-better-than-chocolate"
          element={<IsSmilingBetterThanChocolate />} />

        <Route path="/smilescience/how-does-smiling-reduce-stress-and-anxiety"
          element={<HowDoesSmilingReduceStressAndAnxiety />} />

        <Route path="/smilescience/how-does-smiling-increase-happiness"
          element={<HowDoesSmilingIncreaseHappiness />} />

        <Route path="/smilescience/is-smiling-contagious"
          element={<IsSmilingContagious />} />

        <Route path="/smilescience/how-does-smiling-elevate-our-mood"
          element={<HowDoesSmilingElevateOurMood />} />

        <Route path="/smilescience/how-does-smiling-reduce-pain"
          element={<HowDoesSmilingReducePain />} />

        <Route path="/smilescience/can-smiling-make-you-look-younger"
          element={<CanSmilingMakeYouLookYounger />} />

        <Route path="/smilescience/does-smiling-make-you-more-attractive"
          element={<DoesSmilingMakeYouMoreAttractive />} />

        <Route path="/smilescience/how-does-smiling-improve-relationships"
          element={<HowDoesSmilingImproveRelationships />} />

        <Route path="/smilescience/can-smiling-help-you-live-longer"
          element={<CanSmilingHelpYouLiveLonger />} />

        <Route path="/smilescience/how-does-smiling-boost-your-immune-system"
          element={<HowDoesSmilingBoostYourImmuneSystem />} />

        <Route path="/smilescience/how-does-smiling-lower-your-blood-pressure"
          element={<HowDoesSmilingLowerYourBloodPressure />} />

        <Route path="/smilescience/does-smiling-cause-wrinkles"
          element={<DoesSmilingCauseWrinkles />} />

        <Route path="/smilescience/are-smiles-more-attractive-than-makeup"
          element={<AreSmilesMoreAttractiveThanMakeup />} />

        <Route path="/smilescience/how-does-smiling-boost-confidence"
          element={<HowDoesSmilingBoostConfidence />} />

        <Route path="/smilescience/why-are-smiles-more-powerful-when-looking-at-family"
          element={<WhyAreSmilesMorePowerfulWhenLookingAtFamily />} />

        <Route path="/smilescience/how-does-smiling-make-you-more-grateful"
          element={<HowDoesSmilingMakeYouMoreGrateful />} />

        <Route path="/smilescience/how-does-smiling-boost-energy"
          element={<HowDoesSmilingBoostEnergy />} />

        <Route path="/smilescience/how-does-smiling-help-us-feel-at-peace"
          element={<HowDoesSmilingHelpUsFeelAtPeace />} />

        <Route path="/smilescience/how-long-do-you-have-to-smile-to-receive-health-benefits"
          element={<HowLongDoYouHaveToSmile />} />

      </Routes>
  </Router>
  );
}

export default App;
