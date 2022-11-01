import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";
import { Divider } from "..";

type PageContainerProps = {
  title: string;
  className?: string;
  contentProps?: JSX.IntrinsicElements["div"];
  wrapClassName?: string;
};

export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({
  title,
  children,
  className,
  contentProps = {},
  wrapClassName,
}) => {
  return (
    <div
      className={classNames("w-full px-7 pt-7 flex flex-col", wrapClassName)}
    >
      <div className="text-[32px]">{title}</div>
      <Divider />
      <div className={className} {...contentProps}>
        {children}
      </div>
    </div>
  );
};
