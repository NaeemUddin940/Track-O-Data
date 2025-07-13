import { CategorySidebar } from "../Categories/CategorySidebar";
import HeroCarousel from "./HeroCarousel";
import PromoBanners from "./PromoBanners";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Categories Sidebar */}
      <div className="lg:col-span-3">
        <CategorySidebar />
      </div>

      {/* Hero Carousel */}
      <div className="lg:col-span-6">
        <HeroCarousel />
      </div>

      {/* Promo Banners */}
      <div className="lg:col-span-3">
        <PromoBanners />
      </div>
    </div>
  );
}
