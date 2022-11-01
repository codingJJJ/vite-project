import React, { type FC } from "react";
import { MenuTab } from "./menu-tab";
import { useLocation } from "react-router-dom";
import support from "@pub/asserts/icons/support.png";
import clients from "@pub/asserts/icons/clients.png";
import compliance from "@pub/asserts/icons/compliance.png";
import operation from "@pub/asserts/icons/operation.png";

const data = [
  {
    title: "Support",
    desc: "Support",
    icon: support,
  },
  {
    title: "Clients",
    desc: "Clients",
    icon: clients,
  },
  {
    title: "Compliance",
    desc: "Compliance",
    icon: compliance,
  },
  {
    title: "Operation",
    desc: "Operation",
    icon: operation,
  },
];

export const Menu: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-20 h-full shadow bg-gray-100 mt-1">
      {data.map((items) => {
        return (
          <MenuTab
            key={items.title}
            path={items.title}
            active={pathname
              .toLowerCase()
              .startsWith(items.title.toLowerCase(), 1)}
            {...items}
          />
        );
      })}
    </div>
  );
};
