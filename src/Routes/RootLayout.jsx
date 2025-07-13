import { Outlet } from "react-router";
import TopHeader from "../components/Header/TopHeader";
import Navbar from "../components/Header/Navbar";
import BottomMobileNav from "../components/Header/BottomMobileNav";
import Header from "../components/Header/Header";

export default function RootLayout() {
  return (
    <div>
      {/* Top Header */}
      {/* <TopHeader /> */}
      {/* Main Header */}
      {/* <Navbar /> */}
<Header/>
      <Outlet />
      {/* <BottomMobileNav /> */}
    </div>
  );
}
