import React from "react";
import Banner from "../../Components/Banner/Banner";
import ExceptionalDentalCareBanner from "../../Components/Banner/ExceptionalDentalCareBanner";
import InfoCards from "../../Components/infoCards/InfoCards";

import ServicesCards from "../../Components/Services/ServicesCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServicesCards></ServicesCards>
      <div className="h-[50px] md:h-[150px]"></div>
      <ExceptionalDentalCareBanner></ExceptionalDentalCareBanner>
    </div>
  );
};

export default Home;
