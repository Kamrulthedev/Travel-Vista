import AdminNavber from "@/components/admin/AdminNavber/AdminNavber";
import DiscoverNavber from "@/components/modules/discover/DiscoverNavber";

import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AdminNavber></AdminNavber>
      {children}
      <DiscoverNavber></DiscoverNavber>
    </div>
  );
}
