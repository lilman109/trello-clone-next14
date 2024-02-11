import { ReactNode } from "react";
import { NavBar } from "@/src/app/(platform)/(dashboard)/_components/index";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
