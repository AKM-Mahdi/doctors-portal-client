import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-none rounded-md">
      {children}
    </button>
  );
};

export default PrimaryBtn;
