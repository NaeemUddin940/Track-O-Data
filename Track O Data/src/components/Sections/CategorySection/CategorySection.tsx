import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryItem {
  name: string;
  items: string;
  image: string;
}

interface CategorySectionProps {
  title: string;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroPrice?: string;
  categories: CategoryItem[];
  className?: string;
}

export default function CategorySection({
  title,
  heroImage,
  heroTitle,
  heroSubtitle,
  heroPrice,
  categories,
  className = "",
}: CategorySectionProps) {
  return (
    <section className={`mt-8  ${className}`}>
      <div className="bg-gray-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold uppercase">{title}</h2>
          <a href="#" className="text-gray-500 text-sm">
            View All →
          </a>
        </div>

        {/* Hero Banner and Categories */}
        <div className="lg:flex space-y-5 lg:space-x-5">
          {/* Hero Section */}
          {heroImage && (
            <div className="lg:w-1/2">
              <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg overflow-hidden h-48">
                <img
                  src={heroImage}
                  alt={heroTitle}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                <div className="relative p-6 text-white">
                  {heroTitle && (
                    <h3 className="text-2xl font-bold mb-2">{heroTitle}</h3>
                  )}
                  {heroSubtitle && (
                    <p className="text-sm mb-4">{heroSubtitle}</p>
                  )}
                  {heroPrice && (
                    <p className="text-lg">
                      Start from{" "}
                      <span className="text-green-400 font-bold">
                        {heroPrice}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Categories Grid */}
          <div
            className={`grid md:grid-cols-3 grid-cols-2 gap-4 ${heroImage ? "" : "lg:col-span-3"}`}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => console.log(`Clicked on ${category.name}`)}
                className="text-center  group cursor-pointer w-full"
              >
                <div className="flex items-center gap-3 p-4 hover:bg-gray-50 hover:shadow-sm rounded-lg transition-all duration-200 border border-transparent hover:border-green-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-contain group-hover:scale-105 transition-transform  duration-200"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-sm group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-gray-500 text-xs group-hover:text-gray-700 transition-colors">
                      {category.items}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          <button className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
