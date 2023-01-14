import React from "react";

const AppoinmentOption = ({ appoinmentOption }) => {
  const { name, slots } = appoinmentOption;
  return (
    <div className="card shadow-sm border-2">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-semibold text-primary">{name}</h2>
        <p className="py-2">
          <span>{slots.length > 0 ? slots[0] : "Try another day"}</span>
          <br />
          <span className="text-sm text-secondary">
            {slots.length} {slots.length > 1 ? "spaces" : "space"} are available
          </span>
        </p>
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-none rounded-md">
          Book Appoinments
        </button>
      </div>
    </div>
  );
};

export default AppoinmentOption;
