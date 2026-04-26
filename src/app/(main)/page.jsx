import LeftSideBar from "@/components/news/LeftSideBar";
import RightSideBar from "@/components/news/RightSideBar";
import React from "react";

async function Categories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
const HomePage = async () => {
  const categories = await Categories();
  console.log(categories);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
      <LeftSideBar categories={categories} activeId={"1"}/>
      <div className="col-span-6">News</div>
      <RightSideBar />
    </div>
  );
};

export default HomePage;
