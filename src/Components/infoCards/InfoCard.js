import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bg } = card;

  return (
    <div>
      <div
        className={`card card-side ${bg} shadow-sm border-2 px-3 lg:p-5 text-white`}
      >
        <figure>
          <img className="w-[70%]" src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
