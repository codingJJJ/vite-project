import { PageContainer } from "@/components";
import type { FC } from "react";
import { UserInfomation } from "./components";

import headimg from "@pub/asserts/support/headimg.png";

const infoData = {
  headimg,
  online: true,
};

export const Support: FC = () => {
  console.log(1);

  return (
    <PageContainer title="CSR View" className="flex">
      <div className="flex-1">
        <UserInfomation {...infoData} />
      </div>
      <div className="flex-1 ml-2">2</div>
    </PageContainer>
  );
};
