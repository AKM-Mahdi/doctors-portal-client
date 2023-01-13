import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9:00 am to 5:00 pm",
      icon: clock,
      bg: "bg-gradient-to-r from-primary to-secondary text-white",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "301/7, Austin, Dhaka-1200",
      icon: marker,
      bg: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "01521332723",
      icon: phone,
      bg: "bg-gradient-to-l from-primary to-secondary text-white",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 gap-5 lg:gap-10">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
