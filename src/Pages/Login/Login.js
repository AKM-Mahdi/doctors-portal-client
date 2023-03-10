import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    // react hook form
    <div className="lg:h-[90vh] h-[100vh]  flex  justify-center items-center">
      <form
        className="w-[500px] border-2 rounded-md px-5 py-[30px]"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2 className="text-center text-2xl font-bold pb-5">User Login</h2>

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
        <p className="text-sm py-4">Forget password?</p>

        <input
          className="input btn btn-secondary input-bordered w-full "
          type="submit"
          value="Login"
        />

        <p className="text-sm text-center pt-4">
          New to Doctor's Portal?
          <span className="text-primary">
            <Link to="/signup"> Create a New Account</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </form>
    </div>
  );
};

export default Login;
