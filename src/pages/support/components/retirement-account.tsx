import { Divider } from "@/components";
import type { FC } from "react";

import retirementIcon from "@pub/asserts/support/retirementIcon.png";
import closeIcon from "@pub/asserts/support/close.png";

export const RetirementAccount: FC = () => {
  return (
    <div className="mt-4 rounded-xl border-[1px] border-solid border-gray-300 text-white">
      <div className="flex items-center justify-between px-2 rounded-tl-xl rounded-tr-xl h-16 bg-[#26A6DD]">
        <div>
          <img src={retirementIcon} alt="retirement icon" />
        </div>
        <div className="flex flex-1 ml-2">
          <div className="text-[20px]">Retirement Account</div>
          <div className="ml-2 text-[14px] leading-9">History</div>
        </div>

        <div className="cursor-pointer">
          <img src={closeIcon} alt="close Icon" />
        </div>
      </div>
      <div className="flex items-center  mx-2 h-16">
        <button className="py-1 px-3 inline-block rounded-[4px] bg-[#26A6DD]">
          Retirement Account
        </button>
        <div className="text-[#26A6DD] font-semibold ml-3">
          account: XXXX-010
        </div>
      </div>
      <div className="flex items-center h-16 mx-2 bg-gray-200">
        <div className="text-[#26A6DD] font-semibold ml-3">Total Balance</div>
        <div className="font-medium text-[#FF5C00] ml-3">$485,021.20</div>
      </div>
      <div className="">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>Account Created:1/12/2017</div>
          <Divider />
          <div>
            <div>april/2022</div>
            <div>card</div>
            <div>card</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
