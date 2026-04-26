import LeftSideBar from "@/components/news/LeftSideBar";
import NewsCard from "@/components/news/NewsCard";
import RightSideBar from "@/components/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8 my-15">
      <LeftSideBar categories={categories} activeId={id} />
      <div className=" col-span-6">
        <h2 className="font-bold text-lg text-center">News by category</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((n) => <NewsCard key={n._id} news={n}/>)
          ) : (
            <h2 className="font-bold text-4xl text-center my-7">
              NO news found!
            </h2>
          )}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default NewsCategoryPage;
