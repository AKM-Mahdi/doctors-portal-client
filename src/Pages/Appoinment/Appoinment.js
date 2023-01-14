import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentsBanner/AppoinmentBanner";
import AvailableAppoinments from "./AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  // states for date picker
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="max-w-[1200px] mx-auto">
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AvailableAppoinments selectedDate={selectedDate}></AvailableAppoinments>
      <div className="h-[50px] md:h-[150px]"></div>
    </div>
  );
};

export default Appoinment;
