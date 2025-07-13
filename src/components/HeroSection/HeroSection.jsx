
import { CategorySidebar } from "../Categories/CategorySidebar";

export default function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Categories */}
        <CategorySidebar />

        {/* Hero Section */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg overflow-hidden h-80 mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4ac5eab4762bb311626db9212d2ae60f1ce66e5?width=1300"
              alt="Hero Product"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Noise Cancelling
                <br />
                Headphone
              </h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Boso Over-Ear Headphone</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Wifi, Voice Assistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Low latency game mode</span>
                </li>
              </ul>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-medium">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Promotions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/def16e54425ce8cf5e31b315258b5a6d69e23c29?width=634"
                alt="Sono Playgo 5"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Sono Playgo 5</h3>
                <p className="text-green-500 font-bold">from $569</p>
                <a href="#" className="text-sm underline">
                  Discover now
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden text-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23684abd2fe29624c4044eafbc4aaa0d6d842cc1?width=634"
                alt="Logitek Keyboard"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Logitek Bluetooth</h3>
                <p className="text-yellow-400 font-bold">Keyboard</p>
                <p className="text-sm">Best for all device</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f222b6ce4b6ac3277317f7cb6c074c8a689d7c?width=618"
              alt="Sport Watch"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-xs uppercase text-gray-500">xomia</span>
              <h3 className="font-bold text-lg">
                Sport Water Resistance Watch
              </h3>
              <button className="mt-2 bg-gray-800 text-white px-4 py-2 rounded text-sm">
                Shop Now
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92b6518b729dfeb38f1be3de454e894587ca8fd?width=618"
              alt="OKODo Hero 11+"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl uppercase">
                OKODo
                <br />
                hero 11+
                <br />
                black
              </h3>
              <p className="text-xs text-gray-400 uppercase mt-2">from</p>
              <p className="text-2xl font-bold text-green-500">$169</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
