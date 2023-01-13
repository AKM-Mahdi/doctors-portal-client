import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavityF from "../../assets/images/cavity.png";
import teethW from "../../assets/images/whitening.png";
import ServicesCard from "./ServicesCard";

const ServicesCards = () => {
  const services = [
    {
      id: 1,
      title: "Fluoride Treatments",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ducimus.",
      icon: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ducimus.",
      icon: cavityF,
    },
    {
      id: 1,
      title: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ducimus.",
      icon: teethW,
    },
  ];

  return (
    <>
      <div className="sectionTitle mt-16 mb-10  md:mt-32 md:mb-20  text-center">
        <p className="text-primary font-semibold text-xl">OUR SERVICES</p>
        <h2 className="text-3xl md:text-5xl font-bold pt-3">
          Services We Provide
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </>
  );
};

export default ServicesCards;
