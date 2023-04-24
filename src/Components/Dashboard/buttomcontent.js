import React from "react";
import TopLocationChart from "./TopLocationChart";
import TopReferralChart from "./TopReferralChart";

const ButtomContent = () => {
  return (
    <div className="flex gap-4 my-6 flex-wrap">
      <TopLocationChart />
      <TopReferralChart />
    </div>
  );
};

export default ButtomContent;
