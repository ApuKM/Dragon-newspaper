"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const handleLoginFunc = async (data) => {
  // console.log(data);
  const { name, photo, email, password } = data;
  const { data: res, error } = await authClient.signUp.email({
    name,
    email,
    password,
    image: photo,
    callbackURL: "/",
  });

  // console.log(res, error);
  if (error) {
    toast.error(error.message);
  }

  if (res) {
    toast.success("Signup successful");
  }
};

const RegisterForm = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here name"
            {...register("name", {
              required: "Name field is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here photo url"
            {...register("photo", {
              required: "Photo URL field is required",
            })}
          />
          {errors.photo && (
            <p className="text-red-500 text-xs">{errors.photo.message}</p>
          )}
        </fieldset>
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
            className="input"
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

        <button className="btn w-full bg-slate-800 text-white">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
