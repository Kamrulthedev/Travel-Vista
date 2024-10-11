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
      <div className="w-full flex gap-10 bg-purple-100">
        <div className="w-2/5">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="w-4/5 ">{children}</div>
      </div>
    </>
  );
}
