import { Outlet } from "react-router";
import EcommerceNavbar from "../Components/Navbar/Navbar";

export default function CommonRoute() {
  return (
    <div>
      {/* <EcommerceNavbar
        brandName="ShopEase"
        cartItemCount={5}
        wishlistItemCount={12}
        // onSearch={handleSearch}
        // onCartClick={handleCartClick}
        // onWishlistClick={handleWishlistClick}
      /> */}
      <EcommerceNavbar />
      <Outlet />
    </div>
  );
}
