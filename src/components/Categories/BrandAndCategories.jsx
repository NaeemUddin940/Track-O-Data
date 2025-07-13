import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BrandAndCategories() {
  return (
    <div className="md:flex">
      {" "}
      {/* Featured Brands */}

        <div className="bg-white rounded-lg p-8 mt-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold uppercase">Featured Brands</h2>
            <a href="#" className="text-gray-500 text-sm">
              View All →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              "https://cdn.builder.io/api/v1/image/assets/TEMP/66d0fa2c39543b682fc9e98ac79018cd73b41811?width=194",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/37d264582215f2c3fdae7f2a3a81623f08d3bab6?width=158",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/ef211b67e07259d31faf591650df25e27468a692?width=144",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/8632dbe8fa2d188e94d413d7f6c1a7eaf6926671?width=180",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/f0df10f5cf75e3c63f079a855708cf744ddd7500?width=116",
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-8 object-contain"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mt-8">
            {[
              "https://cdn.builder.io/api/v1/image/assets/TEMP/ce71f17bbea384ba65cc341bdc0c771ef26f6c31?width=184",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/6c2d36b1d8ea5b3517e9d4dfe9b3724c840fcfb0?width=138",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/83f54e141c686909ccffa94ea206ef396dc3cb79?width=174",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/d9176552ef1c0c7996ee60fd1b85295dc68e422d?width=162",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/d0dfb37ea9c4a72fbcc24f1ecdcd942c6876298a?width=120",
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index + 6}`}
                className="h-8 object-contain"
              />
            ))}
          </div>
        </div>


      {/* Top Categories */}
      <div className="mt-6">
        <div className="bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold uppercase">Top Categories</h2>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-100 rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
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
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => console.log(`Clicked on ${category.name}`)}
                className="text-center p-4 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200 cursor-pointer group">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-16 object-contain mb-4 group-hover:scale-105 transition-transform duration-200"
                />
                <h3 className="font-bold group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
