import MyProfileHome from "@/components/modules/MyProfilePage/MyProfileHome";
import Footer from "@/components/ui/shared/Footer";
import { ReactNode } from "react";

export default function layout({
  children,

}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) {
  return (
    <>
    <MyProfileHome></MyProfileHome>
      {children}
      <Footer></Footer>
    </>
  );
}
