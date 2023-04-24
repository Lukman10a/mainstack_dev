import React from "react";
import ButtomContent from "./buttomcontent";
import info from "../../assets/icons/info.svg";
import PageViews from "./pageviews";

const MainContent = () => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold px-7 py-4 mb-4">Dashboard</h2>
      <main className="px-7">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Good morning, Blessing ⛅️
          </h1>
          <div className="flex justify-between text-sm">
            <p className="text-[#31373D]">Check out your dashboard summary.</p>
            <p className="text-[#FF5403]">View analytics</p>
          </div>
        </div>
        <div className="my-6">
          <ul className="flex gap-3 text-sm">
            <li className="p-3 border rounded-full">1 Day</li>
            <li className="p-3 border rounded-full">3 Days</li>
            <li className="p-3 border rounded-full">30 Days</li>
            <li className="p-3 border rounded-full bg-[#FFDDCD] text-[#FF5403] border-[#FF5403]">
              All Time
            </li>
            <li className="p-3 border rounded-full">Custom Date</li>
          </ul>
        </div>
        <section className=" border rounded-md p-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">Page Views</h2>
            <img src={info} alt="" />
          </div>
          <p className="text-sm text-[#31373D]">All time</p>
          <p className="text-5xl my-7 font-bold">500</p>

          <PageViews />
        </section>
        <ButtomContent />
      </main>
    </div>
  );
};

export default MainContent;
