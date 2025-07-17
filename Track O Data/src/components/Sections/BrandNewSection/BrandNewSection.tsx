import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react"; // Import useRef

const brandNewData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d2834b764fe07bce415b6c88b0b28b3636c99ef?width=605",
    title: "Zumac Steel Computer Case",
    description: "And an option to upgrade every three years",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5d2834b764fe07bce415b6c88b0b28b3636c99ef?width=605",
    title: "Zumac Steel Computer Case",
    description: "And an option to upgrade every three years",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c355a05dc436a3e644cc3e0fa869ba30e5bd9f71?width=605",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
    {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c355a05dc436a3e644cc3e0fa869ba30e5bd9f71?width=605",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
    {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c355a05dc436a3e644cc3e0fa869ba30e5bd9f71?width=605",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c355a05dc436a3e644cc3e0fa869ba30e5bd9f71?width=605",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4fc54c9ac86575df672e9f916f6d26a8c3b8a29e?width=605",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c94ba29408e82a0ab61bdad423b3ba5d6011c831?width=605",
    title: "iPed Pro Mini 6 - Powerful l in hand",
    description:
      "From $19.99/month for 36 months. $280.35 final payment due in month 37",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4fc54c9ac86575df672e9f916f6d26a8c3b8a29e?width=605",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
  },
];


export default function BrandNewSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref for the scrollable container
  const scrollAmount = 300; // Adjust this value for how much to scroll per click

  // Function to scroll to the next set of items
  const loadNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll to the previous set of items
  const loadPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mt-8">
      <div className="bg-gray-300 mx-auto dark:bg-gray-800 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] dark:text-white rounded-2xl w-full p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold uppercase">Brand New For You</h2>
          <div className="flex gap-2">
            <button
              onClick={loadPrev}
              className="p-2 bg-gray-100 dark:bg-gray-600 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={loadNext}
              className="p-2 bg-gray-100 dark:bg-gray-600 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next items"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Grid - Added ref and ensured items have min-width */}
        {/* Changed overflow-x-auto to overflow-x-hidden */}
        <div
          ref={scrollContainerRef} // Attach the ref here
          className="flex overflow-x-hidden pb-4 space-x-4 px-4" // Removed scrollbar-thin classes as scrollbar is hidden
        >
          {brandNewData.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer flex-none w-64 sm:w-72 md:w-80 lg:w-64 xl:w-72" // Added fixed width classes
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg" // Adjusted hover effect
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/605x300/E0E0E0/333333?text=Image+Not+Found';
                  }}
                />
              </div>
              <h3 className="font-bold text-base mb-2 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-1">
                {item.description}
              </p>
              <button className="border border-green-500 text-green-500 px-6 py-2 rounded font-medium hover:bg-green-500 cursor-pointer hover:text-white transition-colors uppercase text-sm">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
