import React from "react";
import AppoinmentSection from "../../Components/AppoinmentSection/AppoinmentSection";
import Banner from "../../Components/Banner/Banner";
import ExceptionalDentalCareBanner from "../../Components/Banner/ExceptionalDentalCareBanner";
import InfoCards from "../../Components/infoCards/InfoCards";

import ServicesCards from "../../Components/Services/ServicesCards";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServicesCards></ServicesCards>
      <div className="h-[50px] md:h-[150px]"></div>
      <ExceptionalDentalCareBanner></ExceptionalDentalCareBanner>
      <div className="h-[50px] md:h-[150px]"></div>
      <AppoinmentSection></AppoinmentSection>
      <div className="h-[50px] md:h-[150px]"></div>
    </div>
  );
};

export default Home;
