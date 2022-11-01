import React from "react";
import type { FC, ReactNode } from "react";
import classnames from "classnames";

type InfoProps = {
  title: ReactNode;
  desc?: ReactNode;
  img?: string;
  imgProps?: JSX.IntrinsicElements["img"];
  className?: string;
};

export const InfoTab: FC<InfoProps> = ({
  imgProps,
  img,
  title,
  desc = "",
  className,
}) => {
  return (
    <div
      className={classnames(
        "flex items-center  p-6 space-x-4 max-w-sm mx-auto",
        className
      )}
    >
      <div className="flex justify-center items-center flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full">
        <img className="" src={img} {...imgProps} alt="123" />
      </div>
      <div className="flex-shrink-0">
        <div className="text-lg font-medium">{title}</div>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};
