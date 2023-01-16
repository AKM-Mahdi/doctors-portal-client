import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatmentInfo, setTreatmentInfo, selectedDate }) => {
  const { name, slots } = treatmentInfo;
  console.log(slots);

  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appoinmentDate: date,
      treatment: treatmentInfo.name,
      patientName: name,
      slot: slot,
      email: email,
      phone: phone,
    };
    console.log(booking);

    // TODO: send data to the server
    // once data is saved remove the slot
    // and display success toast

    // setTreatmentInfo(null);
  };
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative px-8">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-5 top-5"
          ></label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form onSubmit={handleBooking} className="grid gap-5 mt-5" action="">
            <input
              name="date"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={date}
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Enter you name"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Enter email here"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="number"
              placeholder="Enter phone no"
              className="input input-bordered w-full "
            />

            <input
              type="submit"
              className="btn w-full bg-accent te xt"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
