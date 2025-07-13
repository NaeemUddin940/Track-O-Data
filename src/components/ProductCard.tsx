import { Star, Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
  discount?: string;
  badge?: string;
  badgeColor?: string;
  inStock?: boolean;
  freeShipping?: boolean;
  freeGift?: boolean;
  isNew?: boolean;
}

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  rating = 5,
  reviews = 0,
  discount,
  badge,
  badgeColor = "bg-green-500",
  inStock = true,
  freeShipping = false,
  freeGift = false,
  isNew = false,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow relative group">
      {/* Product Image */}
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Badges */}
        {discount && (
          <div
            className={`absolute top-2 left-2 ${badgeColor} text-white px-2 py-1 rounded text-xs`}
          >
            <div className="text-xs uppercase">save</div>
            <div className="font-bold">{discount}</div>
          </div>
        )}

        {isNew && (
          <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs uppercase">
            new
          </div>
        )}

        {badge && (
          <div
            className={`absolute top-2 left-2 ${badgeColor} text-white px-2 py-1 rounded text-xs uppercase`}
          >
            {badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < rating ? "fill-current" : ""}`}
              />
            ))}
          </div>
          {reviews > 0 && (
            <span className="text-gray-500 text-xs">({reviews})</span>
          )}
        </div>
      )}

      {/* Product Title */}
      <h3 className="font-bold text-sm mb-2 line-clamp-2">{title}</h3>

      {/* Price */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg font-bold text-red-500">{price}</span>
        {originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            {originalPrice}
          </span>
        )}
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-1 mb-3">
        {freeShipping && (
          <span className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs">
            free shipping
          </span>
        )}
        {freeGift && (
          <span className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs">
            free gift
          </span>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-1 text-xs">
        <div
          className={`w-2 h-2 rounded-full ${inStock ? "bg-green-500" : "bg-red-500"}`}
        ></div>
        <span>{inStock ? "In stock" : "Out of stock"}</span>
      </div>
    </div>
  );
}
