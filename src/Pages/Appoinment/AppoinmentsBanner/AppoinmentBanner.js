import bannerImg1 from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex justify-between align-items  gap-10 lg:flex-row-reverse flex-col min-h-[600px] pt-3 mb-20">
      <div className="flex-1">
        <img src={bannerImg1} className=" shadow-2xl" alt="" />
      </div>
      <div className="flex-1">
        <div className="border-2 inline-block p-5">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <p> Your appoinment date is: {format(selectedDate, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
