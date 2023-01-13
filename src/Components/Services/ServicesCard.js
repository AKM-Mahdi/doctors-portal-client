import React from "react";

const ServicesCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="card shadow-sm border-2">
      <figure className="px-10 pt-10">
        <img src={icon} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
