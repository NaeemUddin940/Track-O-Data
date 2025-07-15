import { ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Apple",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/66d0fa2c39543b682fc9e98ac79018cd73b41811?width=194",
    width: "w-24",
  },
  {
    name: "Samsung",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/37d264582215f2c3fdae7f2a3a81623f08d3bab6?width=158",
    width: "w-20",
  },
  {
    name: "LG",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef211b67e07259d31faf591650df25e27468a692?width=144",
    width: "w-18",
  },
  {
    name: "Sony",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8632dbe8fa2d188e94d413d7f6c1a7eaf6926671?width=180",
    width: "w-22",
  },
  {
    name: "HP",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0df10f5cf75e3c63f079a855708cf744ddd7500?width=116",
    width: "w-16",
  },
  {
    name: "Dell",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce71f17bbea384ba65cc341bdc0c771ef26f6c31?width=184",
    width: "w-23",
  },
  {
    name: "Canon",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c2d36b1d8ea5b3517e9d4dfe9b3724c840fcfb0?width=138",
    width: "w-17",
  },
  {
    name: "Asus",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/83f54e141c686909ccffa94ea206ef396dc3cb79?width=174",
    width: "w-22",
  },
  {
    name: "Acer",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9176552ef1c0c7996ee60fd1b85295dc68e422d?width=162",
    width: "w-20",
  },
  {
    name: "Lenovo",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0dfb37ea9c4a72fbcc24f1ecdcd942c6876298a?width=120",
    width: "w-15",
  },
];

export default function FeaturedBrands() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] dark:text-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold uppercase">Featured Brands</h2>
        <div className="flex items-center gap-1 text-gray-700 dark:text-gray-200 text-sm">
          <span>View All</span>
          <ChevronRight className="w-3 h-3" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 hover:bg-gray-100 hover:shadow-xl rounded-[10px] transition-colors cursor-pointer"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className={`${brand.width} h-auto object-contain hover:scale-125 hover:grayscale-0 transition-all`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
