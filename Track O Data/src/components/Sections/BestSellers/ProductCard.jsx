import { Star } from "lucide-react";
import { cn } from "../../../lib/utils";

export const ProductCard = ({ product }) => {
  return (
    // Set a fixed height for the card and use flex-col for internal layout
    <div className="flex-none w-64 md:w-72 lg:w-80 border hover:shadow-2xl border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col overflow-hidden transition-all duration-300]">
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
          className="max-w-full mix-blend-darken dark:mix-blend-hard-light max-h-full object-cover p-4"
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
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3> {/* Fixed height for name */}
        
        {/* Prices */}
        <div className="flex items-baseline min-h-[28px]"> {/* Added min-h to maintain space */}
          <p className="text-red-500 font-bold text-xl mr-2">${product.price.toFixed(2)}</p>
          {product.oldPrice ? (
            <p className="text-gray-500 text-sm line-through">${product.oldPrice.toFixed(2)}</p>
          ) : (
            <span className="invisible text-sm">Placeholder</span> // Invisible placeholder
          )}
        </div>

        {/* Features - Always render the ul, li conditional */}
        <ul className="text-sm flex list-none text-gray-600 dark:text-gray-400 gap-2 list-inside"> {/* Added min-h for features */}
          {product.features.length > 0 ? (
            product.features.map((feature, index) => (
              <li key={index} className={cn(" uppercase px-3 text-sm py-2 rounded-2xl font-medium", feature === "Free Shipping" ? "bg-green-50 text-green-500": "bg-red-50 text-red-500")}>{feature}</li>
            ))
          ) : (
            <li className="bg-violet-50 px-3 py-2 rounded-2xl text-violet-500 font-medium">No features</li> // Invisible placeholder
          )}
        </ul>
        
        {/* Status and Buy Now Button */}
        <div className=" flex flex-col justify-end"> {/* Pushes content to bottom */}
          <p className={cn("text-sm font-medium", product.status === "In stock" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400")}>
            {product.status}
          </p>
          <button className="mt-4 cursor-pointer bg-green-600 text-white px-4 py-2 rounded-2xl font-medium hover:bg-green-500 transition-colors duration-200 w-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
