"use client";

import { useForm } from "react-hook-form";

const handleLoginFunc = (data) => {
  console.log(data);
};

const LogInForm = () => {
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
            type= "password"
            className="input"
            placeholder="Type here password"
            {...register("password", {
              required: "Password field is required",
            })}
          />
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
