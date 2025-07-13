import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Laptops",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4365b267629251459e3446d5f532979bf4181a6f?width=227",
  },
  {
    name: "PC Gaming",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/68112622602b710b08b2f2ccbba76133091a6421?width=227",
  },
  {
    name: "Headphones",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f989643e0a66618ff92fa4dc9a7d5971608393ed?width=227",
  },
  {
    name: "Monitors",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5e8eb4f9bbdefa0c0d310048744cf10b4a6517d8?width=227",
  },
];

export default function TopCategories() {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold uppercase">Top Categories</h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm mr-4">View All</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="text-center group cursor-pointer">
            <div className="bg-gray-50 rounded-lg p-6 mb-3 group-hover:bg-gray-100 transition-colors">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 mx-auto object-contain"
              />
            </div>
            <h3 className="font-bold text-sm">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
