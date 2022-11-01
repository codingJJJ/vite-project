import React from "react";
import type { FC } from "react";

import logo from "@pub/asserts/icons/logo.png";
import headimg from "@pub/asserts/icons/headimg.png";
import bell from "@pub/asserts/icons/bell.png";

export const Header: FC = () => {
  return (
    <div className="flex items-center justify-between h-16 px-7 shadow">
      <div>
        <img className="m-auto" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center">
        <img className="w-5 h-5 m-auto mx-2" src={bell} alt="bell" />

        <img className="mx-1" src={headimg} alt="headimg" />
        <div className="m-auto">Demo CSR</div>
      </div>
    </div>
  );
};
