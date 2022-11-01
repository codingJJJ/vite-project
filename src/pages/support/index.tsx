import { PageContainer } from "@/components";
import type { FC } from "react";
import { UserInfomation } from "./components";
import { RetirementAccount } from "./components/retirement-account";

export const Support: FC = () => {
  console.log(1);

  return (
    <PageContainer title="CSR View" className="flex">
      <div className="flex flex-col flex-1">
        <UserInfomation />
        <RetirementAccount />
      </div>
      <div className="flex-1 ml-2">2</div>
    </PageContainer>
  );
};
