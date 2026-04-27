import LogInForm from "@/components/auth/LogInForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto mt-5 min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-8 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Login your account
        </h2>
        <LogInForm />
        <p className="mt-4">
          Do not have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
