"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const handleLoginFunc = async (data) => {
  // console.log(data);
  const { data: res, error } = await authClient.signIn.email({
    email: data.email,
    password: data.password,
    rememberMe: true,
    callbackURL: "/",
  });
  if (error) {
    toast.error(error.message);
  }

  if (res) {
    toast.success("Signup successful");
  }
};

const LogInForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="email"
            className="input"
            placeholder="Type here email"
            {...register("email", {
              required: "Email field is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </fieldset>
        <fieldset className="fieldset relative">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input relative"
            placeholder="Type here password"
            {...register("password", {
              required: "Password field is required",
            })}
          />
          <span
            className="absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </fieldset>

        <button className="btn w-full bg-slate-800 text-white">Login</button>
      </form>
    </div>
  );
};

export default LogInForm;
