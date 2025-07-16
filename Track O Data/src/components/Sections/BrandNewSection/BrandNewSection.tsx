import { ChevronLeft, ChevronRight } from "lucide-react";

const brandNewData = [
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
];

export default function BrandNewSection() {
  return (
    <section className="mt-8">
      <div className="bg-gray-300 dark:bg-background shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] dark:text-white rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold uppercase">Brand New For You</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100  dark:bg-gray-600 cursor-pointer rounded-full">
              <ChevronLeft className="w-4 h-4 " />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-600 cursor-pointer rounded-full">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandNewData.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full hover:scale-120 h-56 object-cover  transition-transform duration-300"
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
