import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react'; // Importing icons

// Dummy Button component (re-used from previous immersives for consistency)
const Button = ({ children, className, onClick, variant }) => {
  const baseClasses = "rounded-md transition-colors duration-200";
  const variantClasses = {
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200",
    // Add other variants if needed
  };
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant] || ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Dummy cn utility (re-used from previous immersives)
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Dummy Product Data for the slider
const sliderProducts = [
  {
    id: 1,
    name: "BOSO 2 Wireless On Ear Headphone",
    price: 359.00,
    oldPrice: null,
    rating: 152,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Headphone",
    features: ["free shipping", "free gift"],
    status: "In stock",
    save: null,
  },
  {
    id: 2,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB - Wifi, GPS",
    price: 569.00,
    oldPrice: 759.00,
    rating: 152,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Tablet",
    features: ["free shipping"],
    status: "In stock",
    save: 199.00,
  },
  {
    id: 3,
    name: "uLook Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /...",
    price: 1729.00,
    oldPrice: 2119.00,
    rating: 8,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Mini+PC",
    features: ["free shipping"],
    status: "Out of stock",
    save: 59.00,
  },
  {
    id: 4,
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case...",
    price: 979.00,
    oldPrice: 1259.00,
    rating: null,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Smartwatch",
    features: [],
    status: "In stock",
    save: null,
    preOrder: true,
  },
  {
    id: 5,
    name: "iSmart 24V Charger",
    price: 9.00,
    oldPrice: 12.00,
    rating: 9,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Charger",
    features: [],
    status: "In stock",
    save: 3.00,
  },
  {
    id: 6,
    name: "New Product X",
    price: 120.00,
    oldPrice: null,
    rating: 50,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Product+X",
    features: ["limited stock"],
    status: "In stock",
    save: null,
  },
  {
    id: 7,
    name: "Gaming Mouse Pro",
    price: 75.00,
    oldPrice: 90.00,
    rating: 200,
    image: "https://placehold.co/200x200/E0E0E0/333333?text=Gaming+Mouse",
    features: ["RGB lighting"],
    status: "In stock",
    save: 15.00,
  }
];

// ProductCard component for individual product display
const ProductCard = ({ product }) => {
  return (
    <div className="flex-none w-64 md:w-72 lg:w-80 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col items-center text-center">
      <div className="relative w-full h-40 mb-4 flex justify-center items-center overflow-hidden rounded-md">
        {product.save && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            SAVE ${product.save.toFixed(2)}
          </span>
        )}
        {product.preOrder && (
          <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            PRE-ORDER
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/200x200/333/FFF?text=Image+Error";
          }}
        />
      </div>
      {product.rating && (
        <div className="flex items-center text-yellow-500 text-sm mb-2">
          <span className="mr-1">⭐</span> ({product.rating})
        </div>
      )}
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
      <p className="text-red-500 font-bold text-xl mb-2">${product.price.toFixed(2)}</p>
      {product.oldPrice && (
        <p className="text-gray-500 text-sm line-through mb-2">${product.oldPrice.toFixed(2)}</p>
      )}
      {product.features.length > 0 && (
        <ul className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <p className={cn("text-sm font-medium", product.status === "In stock" ? "text-green-600" : "text-red-600")}>
        {product.status}
      </p>
    </div>
  );
};


// ProductSlider Component
export function ProductSlider() {
  const [activeTab, setActiveTab] = useState('BEST SELLER');
  const [currentIndex, setCurrentIndex] = useState(0); // New state for current product index
  const scrollContainerRef = useRef(null);
  const autoPlayIntervalRef = useRef(null); // Ref to hold the interval ID

  const productsToDisplay = sliderProducts; // In a real app, this would filter based on activeTab

  // Function to scroll to a specific index
  const scrollToProduct = (index) => {
    if (scrollContainerRef.current) {
      const productElement = scrollContainerRef.current.children[index];
      if (productElement) {
        productElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        setCurrentIndex(index);
      }
    }
  };

  // Function to handle manual scrolling via arrows
  const scroll = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'left') {
      newIndex = (currentIndex - 1 + productsToDisplay.length) % productsToDisplay.length;
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
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % productsToDisplay.length;
        scrollToProduct(nextIndex);
        return nextIndex;
      });
    }, 3000); // Change product every 3 seconds
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
      className="w-full max-w-6xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg"
      onMouseEnter={stopAutoPlay} // Pause on hover
      onMouseLeave={startAutoPlay} // Resume when mouse leaves
    >
      {/* Tabs and View All */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4 md:space-x-8">
          {['BEST SELLER', 'NEW IN', 'POPULAR'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "text-lg md:text-xl font-semibold pb-1 cursor-pointer transition-colors duration-300",
                activeTab === tab
                  ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm md:text-base">
          View All →
        </a>
      </div>

      {/* Product Cards Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hidden md:block hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar space-x-4"
          // Removed inline style for scrollBehavior as it's now handled by scrollIntoView
        >
          {productsToDisplay.map((product, index) => (
            <div key={index} className="snap-center flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hidden md:block hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Scroll right"
        >
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

// Main App component to render the ProductSlider and manage dark mode
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Best Seller</h1>
      <ProductSlider /> {/* Render the new ProductSlider component */}
    </div>
  );
}
