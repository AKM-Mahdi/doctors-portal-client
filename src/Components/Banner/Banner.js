import React from "react";
import bannerImg1 from "../../assets/images/chair.png";
import PrimaryBtn from "../../SharedComponents/Buttons/PrimaryBtn";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-between align-items  gap-10 lg:flex-row-reverse flex-col min-h-[600px] pt-3 mb-20">
        <div className="flex-1">
          <img src={bannerImg1} className=" shadow-2xl" alt="" />
        </div>
        <div className="flex-1">
          <span className="btn-xs btn-primary bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-md">
            Get an appoinment now
          </span>
          <h1 className="lg:text-6xl text-4xl font-bold mt-5">
            Book Your Meetings !
          </h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
