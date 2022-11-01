import React from "react";
import type { FC, ReactNode } from "react";
import classnames from "classnames";

type CardProps = {
  title: ReactNode;
  desc?: ReactNode;
  imgProps: JSX.IntrinsicElements["img"];
  className?: string;
};

export const IconCard: FC<CardProps> = ({
  imgProps,
  title,
  desc,
  className,
}) => {
  return (
    <div
      className={classnames(
        "flex items-center  p-6 space-x-4 max-w-sm mx-auto",
        className
      )}
    >
      <div className="flex-shrink-0">
        <img className="" {...imgProps} alt="123" />
      </div>
      <div className="flex-shrink-0">
        <div className="text-xl font-medium text-black">{title}</div>
        {desc && <p className="text-gray-500">{desc}</p>}
      </div>
    </div>
  );
};
