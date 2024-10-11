import UserSidebar from "@/components/User/UserSidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full flex gap-10 bg-white">
        <div className="w-1/5">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <UserSidebar></UserSidebar>
          </div>
        </div>
        <div className="w-4/5 text-black font-serif">{children}</div>
      </div>
    </>
  );
}
