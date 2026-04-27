import LogInForm from "@/components/auth/LogInForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="container mx-auto mt-5 min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-8 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Register your account
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
