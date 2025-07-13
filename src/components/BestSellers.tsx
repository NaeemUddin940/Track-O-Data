import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const bestSellersData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/096a43f18a8618f52ad3d31d4c590d641e4ddd83?width=384",
    title: "BOSO 2 Wireless On Ear Headphone",
    price: "$359.00",
    rating: 5,
    reviews: 152,
    freeShipping: true,
    freeGift: true,
    inStock: true,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/589c0f1b7b6e8c27cb39101493aa4572f3400dd1?width=384",
    title: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "$569.00",
    originalPrice: "$759.00",
    rating: 5,
    reviews: 152,
    discount: "$199.00",
    freeShipping: true,
    inStock: true,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/15b2a22fccd89badc24cebd1e98a5f8f452706b8?width=384",
    title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
    price: "$1,729.00",
    originalPrice: "$2,119.00",
    rating: 5,
    reviews: 8,
    discount: "$59.00",
    freeShipping: true,
    inStock: false,
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/45cc5f575b9b211008f1fa5b25c7ab99bbc8aaf8?width=384",
    title:
      "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "$979.00 - $1,259.00",
    inStock: true,
    badge: "PRE-ORDER",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fca4cbf9213ac80baf726cd009043c31d2e84449?width=384",
    title: "iSmart 24V Charger",
    price: "$9.00",
    originalPrice: "$12.00",
    rating: 5,
    reviews: 9,
    discount: "$3.00",
    inStock: true,
  },
];

export default function BestSellers() {
  return (
    <section className="mt-16">
      <div className="bg-white rounded-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-8">
            <h2 className="text-xl font-bold uppercase text-black border-b-2 border-black pb-2">
              Best seller
            </h2>
            <span className="text-xl text-gray-400 uppercase">New in</span>
            <span className="text-xl text-gray-400 uppercase">Popular</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 text-sm">
              View All →
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {bestSellersData.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-100 p-3 rounded opacity-35">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-100 p-3 rounded">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
