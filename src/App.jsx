import { useState } from "react";
import { Search, Star, ChevronLeft, ChevronRight } from "lucide-react";

import BrandNewSection from "./components/BrandNewSection";
import CategorySection from "./components/CategorySection";

import BestSellers from "./components/BestSellers";

import HeroSection from "./components/HeroSection/HeroSection";


export default function Index() {

  const phoneCategories = [
    {
      name: "iPhone (iOS)",
      items: "74 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4dcaa793924ebfbcca1dd1091caece9310877cde?width=102",
    },
    {
      name: "Android",
      items: "35 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/93aee6723bcc1217ac9e596e09bcd32749e91174?width=100",
    },
    {
      name: "5G Support",
      items: "12 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/caf6c32b70d0b5c8b0ac6b44660f05cae757dcb7?width=102",
    },
    {
      name: "Gaming",
      items: "9 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/06d7e2b5bb1c2efa2c6f22e434f9b9f09a598ef7?width=100",
    },
    {
      name: "Xiaomi",
      items: "52 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5df6519975b742b37d570d121016f2af023ccb85?width=100",
    },
    {
      name: "Accessories",
      items: "29 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/69f0d8825fbca8fcb490702d61d3d5ad3720ee5b?width=100",
    },
  ];

  const laptopCategories = [
    {
      name: "Macbook",
      items: "74 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/efa3b60af90d644b89ae8c69625c0b2e17873d50?width=100",
    },
    {
      name: "Gaming PC",
      items: "5 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4ba545aabef21e2118763eaee67d31262d2d7d3c?width=100",
    },
    {
      name: "Laptop Office",
      items: "22 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a91dc72430bf8f624e4121b90b156e92ce0a525b?width=100",
    },
    {
      name: "Laptop 15''",
      items: "55 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/af9da21b3004286c012fca3872129c1d37eea07b?width=102",
    },
    {
      name: "M1 2023",
      items: "32 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b3803b422ae69d3cfcccf5c52d57e8cbc711dc47?width=100",
    },
    {
      name: "Secondhand",
      items: "16 Items",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8c836d54ff9932e242762f117499446776650542?width=100",
    },
  ];

  const audioCameraProducts = [
    { name: "Speaker", items: "12 Items", icon: "🔊" },
    { name: "DSLR Camera", items: "9 Items", icon: "📷" },
    { name: "Earbuds", items: "5 Items", icon: "🎧" },
    { name: "Microphone", items: "12 Items", icon: "🎤" },
  ];

  const gamingProducts = [
    { name: "Monitors", items: "28 Items", icon: "🖥️" },
    { name: "Chair", items: "12 Items", icon: "🪑" },
    { name: "Controller", items: "9 Items", icon: "🎮" },
    { name: "Keyboards", items: "30 Items", icon: "⌨️" },
  ];

  const officeProducts = [
    { name: "Printers", items: "9 Items", icon: "🖨️" },
    { name: "Network", items: "90 Items", icon: "🌐" },
    { name: "Security", items: "12 Items", icon: "🔒" },
    { name: "Projectors", items: "12 Items", icon: "📽️" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <HeroSection />

        {/* Featured Brands */}
        <section className="mt-16">
          <div className="bg-white rounded-lg p-8">
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
        </section>

        {/* Top Categories */}
        <section className="mt-8">
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
        </section>

        {/* Deals Section */}
        <section className="mt-8">
          <div className="bg-green-500 text-white rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold uppercase">Deals of the day</h2>
              <a href="#" className="text-white text-sm">
                View All →
              </a>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="mt-8">
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="space-y-4">
                    {[
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/dbfd82ce217a3697a4a2796b6f445e6b7df67731?width=70",
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/db3f232691976deb7cf3b9f78cd0f2f374e67979?width=70",
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/8cda2f8a6b7ba6fc7c7776887a884541ef6fdf3b?width=70",
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/1c974c1d28485e67e427a446e94fa5f6b49176ad?width=70",
                    ].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Product view ${index + 1}`}
                        className="w-12 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                  <div className="flex-1 relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6760e9ef66313f8a4f3b57388f0f752de9390a09?width=810"
                      alt="Main Product"
                      className="w-full h-72 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded">
                      <div className="text-xs">save</div>
                      <div className="font-bold">$199.00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500">(12)</span>
                </div>

                <h2 className="text-2xl font-bold">
                  Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                </h2>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-red-500">
                    $569.00
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    $759.00
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">
                      DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                    free shipping
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">
                    free gift
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">
                    hurry up! Promotion will expires in
                  </p>
                  <div className="flex gap-2">
                    {[
                      { value: "-162", unit: "d" },
                      { value: "-9", unit: "h" },
                      { value: "-32", unit: "m" },
                      { value: "-34", unit: "s" },
                    ].map((time, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 rounded p-2 text-center min-w-[60px]">
                        <div className="font-bold text-xl">{time.value}</div>
                        <div className="text-sm text-gray-500">{time.unit}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-2/5"></div>
                  </div>
                  <p className="text-sm">
                    Sold: <span className="font-bold">26/75</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Banner */}
        <section className="mt-8">
          <div
            className="rounded-lg p-8 text-white text-center"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/561c919a898f552e04680c052aba1a514ffea01f?width=2600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9595eb9e047d28201d405452926b5969965180fd?width=60"
                alt="Star"
                className="w-8 h-8"
              />
              <span className="text-lg">Member get</span>
              <span className="text-lg text-yellow-400 font-bold">
                FREE SHIPPING*
              </span>
              <span className="text-lg">
                with no order minimum!. *Restriction apply
              </span>
              <a href="#" className="underline">
                Try free 30-days trial!
              </a>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <BestSellers />

        {/* Brand New Section */}
        <BrandNewSection />

        {/* Phone & Tablets Section */}
        <CategorySection
          title="Top Cellphones & Tablets"
          heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b14644599f43028fd9744180abb62546f4921c5e?width=1210"
          heroTitle="redmi note 12 Pro+ 5g"
          heroSubtitle="Rise to the challenge"
          categories={phoneCategories}
        />

        {/* Laptops & Computers Section */}
        <CategorySection
          title="Best Laptops & Computers"
          heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/8444822a1b75359583d5f9e7b30216b4f360954a?width=1210"
          heroTitle="Mobok 2 supercharged by M2"
          heroPrice="$1,199"
          categories={laptopCategories}
        />

        {/* Category Grid Sections */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Audio & Cameras */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold uppercase">
                  Audios & Cameras
                </h3>
                <a href="#" className="text-gray-500 text-sm">
                  View All →
                </a>
              </div>

              <div className="mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9cb4511c24beb56c945a5a6d6efa0c5be285f4a?width=736"
                  alt="Best Speaker 2023"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {audioCameraProducts.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => console.log(`Clicked on ${product.name}`)}
                    className="text-center p-3 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto group-hover:bg-green-100 group-hover:scale-105 transition-all duration-200">
                      {product.icon}
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-gray-500 text-xs group-hover:text-gray-700 transition-colors">
                      {product.items}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Gaming */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold uppercase">Gaming</h3>
                <a href="#" className="text-gray-500 text-sm">
                  View All →
                </a>
              </div>

              <div className="mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c765af29ebae9bb192b354b2d9316450852d78a7?width=736"
                  alt="Gaming Mouse"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {gamingProducts.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => console.log(`Clicked on ${product.name}`)}
                    className="text-center p-3 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto group-hover:bg-green-100 group-hover:scale-105 transition-all duration-200">
                      {product.icon}
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-gray-500 text-xs group-hover:text-gray-700 transition-colors">
                      {product.items}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Office Equipment */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold uppercase">
                  Office Equipments
                </h3>
                <a href="#" className="text-gray-500 text-sm">
                  View All →
                </a>
              </div>

              <div className="mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1203fd5403a7da3529389ba00fb81c9d2c2114?width=736"
                  alt="Laser Projector"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="mt-2 text-center">
                  <h4 className="text-lg font-bold">Laser Projector</h4>
                  <p className="text-xs text-gray-500">Home Theater 4K</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {officeProducts.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => console.log(`Clicked on ${product.name}`)}
                    className="text-center p-3 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto group-hover:bg-green-100 group-hover:scale-105 transition-all duration-200">
                      {product.icon}
                    </div>
                    <h4 className="font-bold text-sm group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-gray-500 text-xs group-hover:text-gray-700 transition-colors">
                      {product.items}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b89e3e6407d44c7442fdf7e8e7b483bf1d08334?width=1292"
                alt="10% Back Promotion"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                  10% Back
                </h3>
                <p className="text-white text-sm">
                  Earn 10% Cash back on Swootech.{" "}
                  <a href="#" className="underline">
                    Learn How
                  </a>
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c50223be3a62f6f8f522c522614717bcb627c2f?width=1292"
                alt="Download App"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-white mb-2">
                  Download our app
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Enter your phone number and we'll send you a download link.
                </p>
                <div className="flex bg-white bg-opacity-10 rounded">
                  <input
                    type="text"
                    placeholder="(+xx) xxx..."
                    className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-300 outline-none"
                  />
                  <button className="px-4 py-2 text-green-400 text-sm uppercase">
                    Send Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="mt-16">
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold uppercase">
                Your Recently Viewed
              </h2>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 rounded-full opacity-35">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 bg-gray-100 rounded-full">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  image:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/14b7df8f50c982a50be28709e3ffcb1cf4b6f496?width=240",
                  title: "Xomie Remid 8 Sport Water Resistance Watch",
                  price: "$579.00",
                  isNew: true,
                },
                {
                  image:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/9e3df247a93c9ff795ea9eebd0cd1ddb44775928?width=240",
                  title: "Microte Surface 2.0 Laptop",
                  price: "$979.00",
                  isNew: true,
                },
                {
                  image:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/625502937fa9f37c80592c920cc9747d237599a8?width=240",
                  title:
                    "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
                  price: "$979.00 - $1,259.00",
                },
                {
                  image:
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/fff3ff54c662005883cdc0b86c6ea8353b75153b?width=240",
                  title: "SROK Smart Phone 128GB, Oled Retina",
                  price: "$579.00",
                  originalPrice: "$779.00",
                  discount: "$192.00",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm mb-2 line-clamp-2">
                      {product.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-16">
          <div className="space-y-6">
            <h2 className="text-xl font-bold">
              Swoo – #1 Online Marketplace for technology
            </h2>
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae posuere mi. Quisque iaculis dignissim scelerisque. Morbi
                condimentum sagittis leo vitae tempor. Suspendisse in dolor
                odio. Sed aliquet ac lacus ut luctus. Fusce mattis sollicitudin
                sem, id lobortis nibh ullamcorper a. Donec vehicula dolor et
                arcu consequat mattis. Fusce mattis nec nulla in scelerisque.
              </p>
              <p>
                Morbi pharetra sem mauris, nec aliquet ipsum vestibulum
                suscipit. Curabitur non euismod dui. Proin eget justo eu erat
                luctus placerat. Nam rhoncus ipsum ac enim faucibus, at
                consequat ante maximus. Vestibulum at nibh ac odio ultrices
                varius. Duis vitae libero mollis, lobortis ligula id, varius
                erat. Sed id odio dictum, laoreet enim ac, commodo magna.
                Praesent sodales porttitor maximus. Sed a lacus felis. Maecenas
                consectetur consequat orci scelerisque malesuada. Fusce vel orci
                eu tortor consequat mattis quis at ante. Class aptent taciti
                sociosqu ad litora torquent per conubi,
              </p>
            </div>
            <a href="#" className="text-sm">
              View All →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
