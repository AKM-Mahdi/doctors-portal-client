import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "./AppoinmentOption";
import BookingModal from "./BookingModal";
const AvailableAppoinments = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatmentInfo, setTreatmentInfo] = useState(null);

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
        {appoinmentOptions.map((appoinmentOption, index) => (
          <AppoinmentOption
            key={appoinmentOption._id}
            appoinmentOption={appoinmentOption}
            setTreatmentInfo={setTreatmentInfo}
          ></AppoinmentOption>
        ))}
      </div>
      {treatmentInfo && (
        <BookingModal
          treatmentInfo={treatmentInfo}
          setTreatmentInfo={setTreatmentInfo}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
