import React from "react";
import LeftSideBar from "./leftsidebar";
import MainContent from "./maincontent";

const DashBoard = () => {
  return (
    <div className="flex h-full">
      <LeftSideBar />
      <MainContent />
    </div>
  );
};

export default DashBoard;
