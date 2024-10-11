import AdminNavber from "@/components/admin/AdminNavber/AdminNavber";


import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AdminNavber></AdminNavber>
{children}
    </div>
  );
}
