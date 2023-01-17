import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="lg:h-[90vh] h-[100vh]  flex  justify-center items-center">
      <form
        className="w-[500px] border-2 rounded-md px-5 py-[30px]"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h2 className="text-center text-2xl font-bold pb-5">
          User Registration
        </h2>

        {/* name  */}
        <label className="label mt-3">
          <span className="label-text">Name</span>
        </label>
        <input
          className="input input-bordered w-full text-sm"
          type="text"
          {...register("name", {
            required: "name is required",
            maxLength: {
              value: 20,
              message: "name can not be more then 15 character",
            },
          })}
          placeholder="please enter your name"
        />
        {errors.name && (
          <p className="text-sm text-red-700 pt-2" role="alert">
            {errors.name?.message}
          </p>
        )}

        {/* email  */}
        <label className="label mt-3">
          <span className="label-text">Email</span>
        </label>
        <input
          className="input input-bordered w-full text-sm"
          type="email"
          {...register("email", {
            required: "Email address is required",
            maxLength: {
              value: 20,
              message: "email can not be more then 30 character",
            },
          })}
          placeholder="please enter your email"
        />
        {errors.email && (
          <p className="text-sm text-red-700 pt-2" role="alert">
            {errors.email?.message}
          </p>
        )}

        {/* password  */}
        <label className="label mt-3">
          <span className="label-text ">Password</span>
        </label>
        <input
          className="input input-bordered w-full  text-sm"
          type="password"
          {...register("password", { required: "please enter password" })}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="text-sm text-red-700 pt-2" role="alert">
            {errors.password?.message}
          </p>
        )}

        <input
          className="input btn btn-secondary input-bordered w-full mt-3"
          type="submit"
          value="Register"
        />

        <p className="text-sm text-center pt-4">
          Have an Account?
          <span className="text-primary">
            <Link to="/login"> Go to Login</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default SignUp;
