import React from "react";
import treatment from "../../assets/images/treatment.png";

const ExceptionalDentalCareBanner = () => {
  return (
    <div>
      <div className="flex justify-between align-items  gap-10 lg:flex-row flex-col min-h-[600px] pt-3 mb-20">
        <div className="flex-1">
          <img
            src={treatment}
            className=" shadow-2xl rounded-md lg:w-[90%]"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="lg:text-6xl text-4xl font-bold">
            Exceptional Dental Care, On Your Terms..
          </h2>

          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            laudantium repudiandae totam non aspernatur laboriosam nobis libero
            unde sunt expedita aperiam possimus, molestiae tempora ipsa sequi
            rem alias! Laudantium molestias delectus iste maiores animi, earum
            et rem eos vel qui? Dolores voluptas cumque libero quod corrupti
            deleniti dignissimos ducimus veniam!
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-none rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDentalCareBanner;
