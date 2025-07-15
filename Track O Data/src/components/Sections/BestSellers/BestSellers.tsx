import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sun, Moon, Star } from "lucide-react"; // Importing icons, added Star
import { ProductCard } from "./ProductCard";

// Dummy Button component (re-used from previous immersives for consistency)
const Button = ({ children, className, onClick, variant }) => {
  const baseClasses = "rounded-md transition-colors duration-200";
  const variantClasses = {
    ghost:
      "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200",
    // Add other variants if needed
  };
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant] || ""} ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

// Dummy cn utility (re-used from previous immersives)
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Dummy Product Data for the slider
const sliderProducts = [
  {
    id: 1,
    name: "BOSO 2 Wireless On Ear Headphone",
    price: 359.0,
    oldPrice: null,
    rating: 152,
    image: "https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg",
    features: ["Free Shipping", "Free Gift"],
    status: "In stock",
    save: null,
  },
  {
    id: 2,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB - Wifi, GPS",
    price: 569.0,
    oldPrice: 759.0,
    rating: 152,
    image:
      "https://files.refurbed.com/ii/64-gb-spacegrau-wifi-lte-1563860587.jpg?t=fitdesign&h=600&w=800",
    features: ["Free Shipping"],
    status: "In stock",
    save: 199.0,
  },
  {
    id: 3,
    name: "uLook Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /...",
    price: 1729.0,
    oldPrice: 2119.0,
    rating: 8,
    image: "https://media.s-bol.com/YNLXlp7zVqJ2/pYYk0JX/550x368.jpg",
    features: ["Free Shipping"],
    status: "Out of stock",
    save: 59.0,
  },
  {
    id: 4,
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case...",
    price: 979.0,
    oldPrice: 1259.0,
    rating: null,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-cell-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aWp3UWRQeU9ENTVkdnpWZ2VCQ1JYVkF1Z0RaeFB5LzRxZEliRVE2WkswOW5YNUh6UG9VcVpLK2VQampYMHFQR0ZraFRqYm9IdFcyZHNBc3g5MFNqQkIxRVpGM0VTYkFEYWkrVUpmdm5HMEsvZzdYL1dmbHI1ck0vS0dDZmJkTUNtcXlYK1hMV0U1ZW9xcCtlRHF3V3gyZThGL0dtL1JkeEJQSnRCMXJsZFBFY2doN2ZiODFwWklZeDgrZ0RtbVRXag",
    features: [],
    status: "In stock",
    save: null,
    preOrder: true,
  },
  {
    id: 5,
    name: "iSmart 24V Charger",
    price: 9.0,
    oldPrice: 12.0,
    rating: 9,
    image: "https://m.media-amazon.com/images/I/41MAlBJ6BhL.jpg",
    features: [],
    status: "In stock",
    save: 3.0,
  },
  {
    id: 6,
    name: "Gamin Keybord",
    price: 120.0,
    oldPrice: null,
    rating: 50,
    image: "https://jmau.imgix.net/media/catalog/product/r/a/razer-blackwidow-v4-x-mechanical-gaming-keyboard-5_b17zherlwykmrywa.jpg",
    features: ["Limited Stock"],
    status: "In stock",
    save: null,
  },
  {
    id: 7,
    name: "Gaming Mouse Pro",
    price: 75.0,
    oldPrice: 90.0,
    rating: 200,
    image: "https://gamepc.nl/files/file_system/file/file/6719/04.%20RAIDER-Pro-Gaming-Mouse.png",
    features: ["RGB Lighting"],
    status: "In stock",
    save: 15.0,
  },
];

// ProductCard component for individual product display

// ProductSlider Component
export function ProductSlider() {
  const [activeTab, setActiveTab] = useState("BEST SELLER");
  const [currentIndex, setCurrentIndex] = useState(0); // New state for current product index
  const scrollContainerRef = useRef(null);
  const autoPlayIntervalRef = useRef(null); // Ref to hold the interval ID

  const productsToDisplay = sliderProducts; // In a real app, this would filter based on activeTab

  // Function to scroll to a specific index and center the product
  const scrollToProduct = (index) => {
    if (scrollContainerRef.current) {
      const productElement = scrollContainerRef.current.children[index];
      if (productElement) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const productWidth = productElement.offsetWidth;
        const productOffsetLeft = productElement.offsetLeft;

        // Calculate the scroll position to center the product
        const scrollPosition =
          productOffsetLeft - containerWidth / 2 + productWidth / 2;

        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  // Function to handle manual scrolling via arrows
  const scroll = (direction) => {
    let newIndex = currentIndex;
    if (direction === "left") {
      newIndex =
        (currentIndex - 1 + productsToDisplay.length) %
        productsToDisplay.length;
    } else {
      newIndex = (currentIndex + 1) % productsToDisplay.length;
    }
    scrollToProduct(newIndex);
    // Pause auto-play briefly on manual interaction
    resetAutoPlay();
  };

  // Auto-play logic
  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current); // Clear any existing interval
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % productsToDisplay.length;
        scrollToProduct(nextIndex);
        return nextIndex;
      });
    }, 2000); // Change product every 3 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  // Effect for auto-play
  useEffect(() => {
    startAutoPlay(); // Start auto-play when component mounts

    // Clear interval when component unmounts
    return () => {
      stopAutoPlay();
    };
  }, [productsToDisplay.length]); // Restart auto-play if product list changes

  return (
    <div
      className="w-full mx-auto rounded-lg"
      onMouseEnter={stopAutoPlay} // Pause on hover
      onMouseLeave={startAutoPlay} // Resume when mouse leaves
    >
      {/* Tabs and View All */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4 md:space-x-8 ">
          {["BEST SELLER", "NEW IN", "POPULAR"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "text-lg md:text-xl cursor-pointer font-semibold pb-1 transition-colors duration-300",
                activeTab === tab
                  ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              )}>
              {tab}
            </button>
          ))}
        </div>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm md:text-base">
          View All →
        </a>
      </div>

      {/* Product Cards Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Scroll left">
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Scrollable Container (without drag event listeners) */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 hide-scrollbar space-x-4 px-4" // Removed cursor-grab
          style={{ scrollBehavior: "smooth" }} // Ensures smooth scrolling for scrollBy
        >
          {productsToDisplay.map((product, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Scroll right">
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>

      {/* Custom scrollbar hide for better aesthetics on webkit browsers */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}
