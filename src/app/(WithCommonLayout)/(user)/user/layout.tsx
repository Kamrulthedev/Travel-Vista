import UserSidebar from "@/components/User/UserSidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full flex gap-10 bg-red-600 ">
        <div className="w-1/5">
          <div>
            <UserSidebar></UserSidebar>
          </div>
        </div>
        <div className="w-4/5 text-black font-serif">{children}</div>
      </div>
    </>
  );
}
