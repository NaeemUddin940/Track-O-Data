import { FloatingNav } from "./FlotingNavbar";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <FloatingNav />
    </div>
  );
}
