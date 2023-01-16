import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);
  return (
    // react hook form
    <div className="lg:h-[90vh] h-[100vh]  flex  justify-center items-center">
      <form
        className="w-[400px] border-2 rounded-md px-5 py-[40px]"
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <h2 className="text-center text-2xl font-bold pb-5">User Login</h2>
        {/* email  */}
        <label className="label mt-3">
          <span className="label-text">Email</span>
        </label>
        <input
          className="input input-bordered w-full text-sm"
          type="email"
          {...register("email")}
          placeholder="enter your email"
        />
        {/* password  */}
        <label className="label mt-3">
          <span className="label-text ">Password</span>
        </label>
        <input
          className="input input-bordered w-full  text-sm"
          type="password"
          {...register("password")}
          placeholder="Enter password"
        />
        <p className=" text-sm pt-3">{data}</p>
        <input
          className="input btn btn-secondary input-bordered w-full mt-5"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
