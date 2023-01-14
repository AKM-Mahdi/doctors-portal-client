import React from "react";
import bgAppoinment from "../../assets/images/appointment.png";
import doctorPic from "../../assets/images/doctor.png";
import PrimaryBtn from "../../SharedComponents/Buttons/PrimaryBtn";
const AppoinmentSection = () => {
  return (
    <section
      className="lg:p-0 py-10"
      style={{
        background: `url(${bgAppoinment})`,
        borderRadius: "10px",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={doctorPic}
            className="w-[50%] -mb-16 -mt-56 hidden lg:block "
            alt=""
          />
          <div className="py-10">
            <p className="text-primary text-lg pb-3">Appoinment</p>
            <h1 className="text-5xl font-bold text-white">
              Make An Appoinment Today
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt, doloremque.psum dolor sit amet consectetur
              adipisicing elit. Nesciunt, doloremque.
            </p>
            <PrimaryBtn>Get Appoinment</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentSection;
