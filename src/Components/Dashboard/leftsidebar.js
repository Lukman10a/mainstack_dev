import React from "react";
import dashboard from "../../assets/icons/dashboard.svg";
import mainstack from "../../assets/icons/mainstack-logo.svg";
import edit from "../../assets/icons/edit.svg";
import group from "../../assets/icons/group.svg";
import hourglass from "../../assets/icons/hourglass_empty.svg";
import addphoto from "../../assets/icons/add_a_photo.svg";
import deletes from "../../assets/icons/delete.svg";
import subscriptions from "../../assets/icons/subscriptions.svg";
import file from "../../assets/icons/file_present.svg";
import alarm from "../../assets/icons/alarm.svg";

const LeftSideBar = () => {
  return (
    <div className=" border-r-2">
      <img src={mainstack} alt="" className="my-7 px-7" />

      <ul className="space-y-4">
        <li className="flex gap-4  text-[#FF5403] border-[#FF5403] px-7 border-l-2">
          <img src={dashboard} alt="" />
          <p>Dashboard</p>
        </li>

        <li className="px-7 flex gap-4">
          <img src={edit} alt="" />
          <p className="text-[#56616B]">Item 1</p>
        </li>

        <li className="px-7 flex gap-4">
          <img src={group} alt="" />
          <p className="text-[#56616B]">Item 2</p>
        </li>

        <li className="px-7 flex gap-4">
          <img src={deletes} alt="" />
          <p className="text-[#56616B]">Item 3</p>
        </li>
      </ul>
      <div>
        <p className="my-7 px-7 text-[#4D5760]">OTHERS 1</p>
        <ul className="space-y-4">
          <li className="px-7 flex gap-4">
            <img src={addphoto} alt="" />
            <p className="text-[#56616B]">Item 4</p>
          </li>

          <li className="px-7 flex gap-4">
            <img src={hourglass} alt="" />
            <p className="text-[#56616B] font-medium">Item 5</p>
          </li>
        </ul>
      </div>

      <div>
        <p className="my-7 px-7 text-[#4D5760]">OTHERS 2</p>
        <ul className="space-y-4">
          <li className="px-7 flex gap-4">
            <img src={subscriptions} alt="" />
            <p className="text-[#56616B] font-medium">Item 6</p>
          </li>

          <li className="px-7 flex gap-4">
            <img src={file} alt="" />
            <p className="text-[#56616B] font-medium">Item 7</p>
          </li>

          <li className="px-7 flex gap-4">
            <img src={alarm} alt="" />
            <p className="text-[#56616B]">Item 8</p>
          </li>
        </ul>

        <div>
          <img src="" alt="" />
          <p>Blessing Daniels</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
