import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div className="col-span-3">
      <h2 className="font-bold text-lg text-center">All categories</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`
                ${activeId === category.category_id ? "bg-pink-800 text-white" : "text-zinc-800"}
                  rounded-md font-bold text-center `}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block  p-2"
              >
                {" "}
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
