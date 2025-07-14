import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sun, Moon, Star } from 'lucide-react'; // Importing icons, added Star

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
    features: ["Free Shipping", "Free Gift"],
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
    features: ["Free Shipping"],
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
    features: ["Free Shipping"],
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
    features: ["Limited Stock"],
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
    features: ["RGB Lighting"],
    status: "In stock",
    save: 15.00,
  }
];

// ProductCard component for individual product display
const ProductCard = ({ product }) => {
  return (
    // Set a fixed height for the card and use flex-col for internal layout
    <div className="flex-none w-64 md:w-72 lg:w-80 border hover:shadow-2xl border-gray-200 dark:border-gray-700 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col overflow-hidden h-[450px] md:h-[480px] lg:h-[500px] transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 flex justify-center items-center overflow-hidden rounded-t-xl">
        {product.save && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
            SAVE ${product.save.toFixed(2)}
          </span>
        )}
        {product.preOrder && (
          <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
            PRE-ORDER
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain p-4"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/333/FFF?text=Image+Error"; }}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow p-4 text-left">
        {/* Rating - Always render the div, content conditional */}
        <div className="flex items-center text-yellow-500 text-sm mb-2 min-h-[20px]"> {/* Added min-h to maintain space */}
          {product.rating ? (
            <>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn("w-4 h-4", i < Math.floor(product.rating / 50) ? "fill-current" : "stroke-current")} // Simple rating visual
                />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-400">({product.rating} reviews)</span>
            </>
          ) : (
            <span className="invisible">No rating</span> // Invisible placeholder
          )}
        </div>
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[56px]">{product.name}</h3> {/* Fixed height for name */}
        
        {/* Prices */}
        <div className="flex items-baseline mb-2 min-h-[28px]"> {/* Added min-h to maintain space */}
          <p className="text-red-500 font-bold text-xl mr-2">${product.price.toFixed(2)}</p>
          {product.oldPrice ? (
            <p className="text-gray-500 text-sm line-through">${product.oldPrice.toFixed(2)}</p>
          ) : (
            <span className="invisible text-sm">Placeholder</span> // Invisible placeholder
          )}
        </div>

        {/* Features - Always render the ul, li conditional */}
        <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside mb-2 min-h-[40px]"> {/* Added min-h for features */}
          {product.features.length > 0 ? (
            product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))
          ) : (
            <li className="invisible">No features</li> // Invisible placeholder
          )}
        </ul>
        
        {/* Status and Buy Now Button */}
        <div className="flex-grow flex flex-col justify-end"> {/* Pushes content to bottom */}
          <p className={cn("text-sm font-medium", product.status === "In stock" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
            {product.status}
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 w-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};


// ProductSlider Component
export function ProductSlider() {
  const [activeTab, setActiveTab] = useState('BEST SELLER');
  const [currentIndex, setCurrentIndex] = useState(0); // New state for current product index
  const scrollContainerRef = useRef(null);
  const autoPlayIntervalRef = useRef(null); // Ref to hold the interval ID

  // Drag functionality states (no longer used for dragging, but kept for reference if needed later)
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const dragAnimationFrameRef = useRef(null); // Ref for requestAnimationFrame

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
        const scrollPosition = productOffsetLeft - (containerWidth / 2) + (productWidth / 2);

        scrollContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
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

  // Drag functionality handlers (removed as per request)
  // const onMouseDown = (e) => { /* ... */ };
  // const onMouseMove = (e) => { /* ... */ };
  // const onMouseUp = () => { /* ... */ };
  // const onMouseLeave = () => { /* ... */ };


  return (
    <div
      className="w-full max-w-6xl mx-auto p-4 rounded-lg shadow-lg"
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
                "text-lg md:text-xl font-semibold pb-1 transition-colors duration-300",
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
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Scrollable Container (without drag event listeners) */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 hide-scrollbar space-x-4 px-4" // Removed cursor-grab
          style={{ scrollBehavior: 'smooth' }} // Ensures smooth scrolling for scrollBy
        >
          {productsToDisplay.map((product, index) => (
            <div key={product.id} className="flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
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
    <div className="min-h-screen  transition-colors duration-300 p-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 mt-8 text-center">Our Products</h1>
      <ProductSlider /> {/* Render the new ProductSlider component */}
    </div>
  );
}
