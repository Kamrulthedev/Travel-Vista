import MyProfileHome from "@/components/modules/MyProfilePage/MyProfileHome";
import Footer from "@/components/ui/shared/Footer";
import Navber from "@/components/ui/shared/Navber";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navber></Navber>
      <MyProfileHome></MyProfileHome>
      {children}
      <Footer></Footer>
    </>
  );
}
