"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, isPending, "user");
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-8 ">
      <div className="w-30"></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      {isPending ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : user ? (
        <div className="flex items-center gap-2">
          <Image
            src={user.image || userAvatar}
            alt="User avatar"
            width={40}
            height={40}
            className="w-10 h-10 object-center object-contain rounded-full"
          />
          <button
            className="btn bg-pink-800 text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-pink-800 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
