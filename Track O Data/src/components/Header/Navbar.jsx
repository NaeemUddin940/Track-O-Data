import {
  Heart,
  Moon,
  ShoppingCart,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { PlaceholdersAndVanishInput } from "../UIComponent/placeholders-and-vanish-input";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to dark mode


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Re-run when isDarkMode changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const placeholders = [
    "Welcome to ShopHub",
    "What are you looking for?",
    "Search for products...",
    "Find the best deals",
    "Explore categories",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <div>
        {" "}
        <header className="bg-gray-300 shadow-2xl border-b-1 dark:bg-gray-800 dark:text-white border-t-1">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex lg:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae55593bf76c01c1ed34d89239911d7cc5ce8ee?width=322"
                  alt="Swoo Logo"
                  className="h-10"
                />
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">Home</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">About</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">Contact</span>
                </Link>
              </nav>
              <div>
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                {/* <div className="text-xs text-center">
                <div className="text-gray-600 uppercase">welcome</div>
                <div className="font-bold uppercase">log in / Register</div>
              </div> */}
                <div className="flex items-center gap-2">
                  <div className="relative hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer  p-2 rounded-full">
                    <Heart className="w-5 h-5 dark:text-gray-200" />
                  </div>
                  <div className="relative hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer  p-2 rounded-full">
                    <User className="w-5 h-5 dark:text-gray-200" />
                  </div>
                  <div className="relative hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer p-2 rounded-full">
                    <ShoppingCart className="w-5 h-5 dark:text-gray-200" />
                    <span className="absolute animate-bounce -top-1 -right-1 bg-green-500 text-black font-bold text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      5
                    </span>
                  </div>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className=" p-2 rounded-full cursor-pointer
                  hover:bg-gray-300 dark:hover:bg-gray-500
                   transition-colors duration-300"
                  aria-label="Toggle dark mode">
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 dark:text-gray-200 " />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                {/* <div className="text-xs text-center">
                <div className="text-gray-600 uppercase">cart</div>
                <div className="font-bold uppercase">$1,689.00</div>
              </div> */}
              </div>
            </div>
          </div>
        </header>
      </div>
      <div>
        {/* Search Bar */}
        {/* <div className="bg-green-500 hidden md:block py-4"> */}
        {/* <div className="max-w-7xl mx-auto px-4"> */}
        {/* <div className="flex flex-col lg:flex-row items-center gap-4"> */}
        {/* Search */}
        {/* <div className="flex-1 max-w-xl">
                <div className="flex bg-white z-11">
                  <div
                    className="relative" // Needed for absolute positioning of the dropdown content
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}>
                    <div className="px-4 py-3 w-40 cursor-pointer bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm font-bold rounded-full flex items-center justify-between">
                      <div>All Categories</div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isDropdownOpen ? "rotate-180" : ""
                        )}
                      />
                    </div>
                    {isDropdownOpen && (
                      // Increased z-index to z-50 to ensure it's on top of other content
                      <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 z-50 w-70 max-h-140 overflow-y-auto">
                        <CategorySidebar />
                      </div>
                    )}
                  </div>
                  <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                  />
                </div>
              </div> */}

        {/* Features */}
        {/* <div className="flex flex-wrap items-center gap-6 text-white text-sm">
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <span className="uppercase">free shipping over $199</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💰</span>
                  <span className="uppercase">30 days money back</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span className="uppercase">100% secure payment</span>
                </div>
              </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
