import React from "react";
import type { FC, ReactNode } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

type MenuTabProps = {
  path: string;
  icon: string;
  desc: string;
  title: ReactNode;
  active: boolean;
};

export const MenuTab: FC<MenuTabProps> = ({
  path,
  icon,
  desc,
  title,
  active,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(
        "relative cursor-pointer",
        active ? "shadow bg-white" : ""
      )}
      onClick={() => navigate(path)}
    >
      <div className="w-20 h-16 flex flex-col justify-center items py-2">
        <img className="w-4 h-4 m-auto" src={icon} alt={desc} />
        <div className="text-center scale-75 text-sm">{title}</div>
      </div>
      <div
        className={classNames(
          "absolute h-full bg-blue-300 right-0 top-0 transition-all",
          active ? "w-1" : "w-0"
        )}
      ></div>
    </div>
  );
};
