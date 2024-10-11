import AdminSidebar from "@/components/admin/AdminSidebar";
import { ReactNode } from "react";

export default function layout({
  children,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) {
  return (
    <>
      <div className="w-full flex gap-10 ">
        <div className="w-2/5">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <AdminSidebar />
          </div>
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </>
  );
}
