import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "./AppoinmentOption";
const AvailableAppoinments = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);

  useEffect(() => {
    fetch("availableAppoinment.json")
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);

  return (
    <div>
      <p className="text-center font-semibold text-primary text-xl pb-12">
        Available Appoinments in: {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 gap-5 lg:gap-10">
        {appoinmentOptions.map((appoinmentOption) => (
          <AppoinmentOption
            key={appoinmentOption._id}
            appoinmentOption={appoinmentOption}
          ></AppoinmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppoinments;
