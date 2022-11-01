import React from "react";
import type { FC, PropsWithChildren } from "react";
import { Header, Menu } from "./components";
import { Outlet } from "react-router-dom";
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Header />
      <div style={{ height: "calc(100% - 68px)" }} className="flex">
        <Menu />
        <div className="flex-1 h-full min-w-[1400px] border-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
