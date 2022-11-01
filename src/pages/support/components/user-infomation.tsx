import React, { useState } from "react";
import type { FC } from "react";
import { Divider } from "@/components";
import classNames from "classnames";

import preferred from "@pub/asserts/support/preferred.png";
import lastContact from "@pub/asserts/support/lastContact.png";
import customerTime from "@pub/asserts/support/customerTime.png";
import { InfoTab } from "./info-tab";
import headimg from "@pub/asserts/support/headimg.png";

const tabsData = [
  {
    title: "English",
    desc: "Preferred Language",
    img: preferred,
  },
  {
    title: "3 months ago",
    desc: "Last contact",
    img: lastContact,
  },
  {
    title: "5 years",
    desc: "customer time",
    img: customerTime,
  },
];

export const UserInfomation: FC = () => {
  const online = useState(false);
  return (
    <div className="h-[237px] w-full mt-10 rounded-xl border-[1px] border-solid border-gray-300 px-5">
      {/* top container */}
      <div className="flex">
        {/* headimg */}
        <div className="relative bottom-9 h-[118px] w-[118px] z-1">
          <img
            className="w-full h-full rounded-full"
            src={headimg}
            alt="headimg"
          />
          <div
            className={classNames(
              "absolute w-3 h-3 rounded-full bg-[#00B27C] bottom-3 right-3 border-2",
              online ? "bg-[#00B27C]" : "bg-gray-500"
            )}
          ></div>
        </div>
        {/* title */}
        <div className="flex flex-1 flex-col  ml-4">
          <div className="text-black font-bold text-[39px]">Mr.Charles</div>
          <div className="flex">
            <div
              className={classNames(
                "mr-2 px-2 rounded",
                online
                  ? "text-[#00B27C] bg-[#E4F6F1]"
                  : "text-black bg-gray-300"
              )}
            >
              {online ? "Account active" : "Account disactive"}
            </div>
            <div>Last synced at 10:45</div>
          </div>
        </div>
        {/* full profile button */}
        <div>
          <button className="h-8 w-32 mt-4 border-[1px] border-solid border-[#0057A5] rounded-xl text-[#0057A5] font-['Roboto'] hover:bg-[#E4F6F1] hover:border-[#00B27C]">
            Full Profile
          </button>
        </div>
      </div>
      <Divider />
      {/* bottom container */}
      <div className="flex">
        {tabsData.map((items) => {
          return <InfoTab key={items.title} className="flex-1" {...items} />;
        })}
      </div>
    </div>
  );
};
