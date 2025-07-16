import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import BrandNewSection from "./components/Sections/BrandNewSection/BrandNewSection";
import CategorySection from "./components/Categories/CategorySection";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturedBrands from "../src/components/Categories/FeaturedBrands";
import TopCategories from "../src/components/Categories/TopCategories";
import game from "../src/assets/NewFolder/game.png";
import main from "../src/assets/NewFolder/main.png";
import phone from "../src/assets/NewFolder/phone.png";
import { ProductSlider } from "./components/Sections/BestSellers/BestSellers";
import CategoryGridSection from "./components/Categories/CategoryGridSection";
import ResponsiveFooter from "./components/Footer/Footer";

export default function App() {
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

  const mobilePhone = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      price: 1199.0,
      oldPrice: 1299.0,
      rating: 250,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=Galaxy+S24",
      features: ["Snapdragon 8 Gen 3", "200MP Camera", "S-Pen Support"],
      status: "In stock",
      save: 100.0,
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 1399.0,
      oldPrice: null,
      rating: 300,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=iPhone+15",
      features: ["A17 Bionic Chip", "Titanium Design", "Dynamic Island"],
      status: "In stock",
      save: null,
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro",
      price: 899.0,
      oldPrice: 999.0,
      rating: 180,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=Pixel+8",
      features: ["Tensor G3 Chip", "Best AI Features", "Long Software Support"],
      status: "In stock",
      save: 100.0,
    },
    {
      id: 4,
      name: "OnePlus 12",
      price: 799.0,
      oldPrice: 849.0,
      rating: 120,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=OnePlus+12",
      features: ["Snapdragon 8 Gen 3", "120Hz AMOLED Display", "Fast Charging"],
      status: "In stock",
      save: 50.0,
    },
    {
      id: 5,
      name: "Xiaomi 14 Ultra",
      price: 999.0,
      oldPrice: null,
      rating: 190,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=Xiaomi+14",
      features: ["Leica Camera System", "HyperCharge", "Ceramic Back"],
      status: "In stock",
      save: null,
    },
    {
      id: 6,
      name: "Realme GT 5 Pro",
      price: 599.0,
      oldPrice: 649.0,
      rating: 90,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=Realme+GT",
      features: ["Snapdragon 8 Gen 3", "Periscope Telephoto", "Large Battery"],
      status: "In stock",
      save: 50.0,
    },
    {
      id: 7,
      name: "Oppo Find X7 Ultra",
      price: 1099.0,
      oldPrice: null,
      rating: 210,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=Oppo+Find",
      features: [
        "Dual Periscope Cameras",
        "Hasselblad Imaging",
        "Premium Design",
      ],
      status: "Pre-Order",
      save: null,
      preOrder: true,
    },
    {
      id: 8,
      name: "Vivo v20 pro",
      price: 109.0,
      oldPrice: null,
      rating: 210,
      image: "https://placehold.co/200x200/E0E0E0/333333?text=Oppo+Find",
      features: [
        "Dual Periscope Cameras",
        "Hasselblad Imaging",
        "Premium Design",
      ],
      status: "Pre-Order",
      save: null,
      preOrder: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-background">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Fetured Brands and Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6">
          <FeaturedBrands />
          <TopCategories />
        </div>

        {/* Best Sellers */}
        <section className="mt-8">
          <div className="dark:bg-gray-800 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e] bg-gray-300 text-white rounded-2xl p-6">
            <div className="flex mb-5 items-center justify-center">
              <h2 className="text-3xl font-bold uppercase dark:text-white text-black">
                Best Sellers
              </h2>
            </div>
            <ProductSlider />
          </div>
        </section>

        {/* Deals Section */}
        <section className="mt-8">
          <div className="dark:bg-gray-800 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e] bg-gray-300 text-white rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold uppercase dark:text-white text-black">
                Deals of the day
              </h2>
              <a href="#" className="dark:text-white text-black text-sm">
                View All →
              </a>
            </div>
          </div>
        </section>

        {/* Deals Section Product Showcase */}
        <div className="lg:flex gap-6 mt-8 dark:text-white">
          <div className="flex flex-col md:flex-row bg-gray-300 p-4 rounded-2xl  dark:bg-gray-800 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e]">
            {/* Product Images */}
            <div className="space-y-4 mb-5">
              <div className="flex gap-4 mt-10">
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
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute -top-11 -left-15 flex gap-5 items-center bg-green-500 text-white px-3 py-1 rounded-3xl">
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
                <span className="text-3xl font-bold text-red-500">$569.00</span>
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
                <div className="flex gap-2 dark:text-white">
                  {[
                    { value: "162", unit: "d" },
                    { value: "9", unit: "h" },
                    { value: "32", unit: "m" },
                    { value: "34", unit: "s" },
                  ].map((time, index) => (
                    <div
                      key={index}
                      className="bg-gray-300 dark:bg-gray-700 rounded p-2 text-center min-w-[60px]">
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
          <div className="rounded-2xl gap-5 mt-8 flex flex-col md:flex-row lg:flex-col">
            <div className="col-start-5">
              <img src={game} alt="" className="w-full" />
            </div>
            <div className="col-start-5 row-start-2">
              <img src={main} alt="" className="w-full" />
            </div>
            <div className="col-start-5 row-start-3">
              <img src={phone} alt="" className="w-full" />
            </div>
          </div>
        </div>

        {/* Membership Banner */}
        {/* <section className="mt-8">
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
        </section> */}

        {/* Brand New Section */}
        <BrandNewSection />

        {/* Phone & Tablets Section */}
        <div>
          <CategorySection
            title="Top Cellphones & Tablets"
            heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b14644599f43028fd9744180abb62546f4921c5e?width=1210"
            heroTitle="redmi note 12 Pro+ 5g"
            heroSubtitle="Rise to the challenge"
            categories={phoneCategories}
            mobilePhone={mobilePhone}
          />

          {/* Laptops & Computers Section */}
          <CategorySection
            title="Best Laptops & Computers"
            heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/8444822a1b75359583d5f9e7b30216b4f360954a?width=1210"
            heroTitle="Mobok 2 supercharged by M2"
            heroPrice="$1,199"
            categories={laptopCategories}
            mobilePhone={mobilePhone}
          />
        </div>

        {/* Category Grid Sections */}
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Audio & Cameras */}
            <CategoryGridSection
              title="Audio & Camera"
              more="View All →"
              products={audioCameraProducts}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/a9cb4511c24beb56c945a5a6d6efa0c5be285f4a?width=736"
            />

            {/* Gaming */}
            <CategoryGridSection
              title="Gaming"
              more="View All →"
              products={gamingProducts}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/c765af29ebae9bb192b354b2d9316450852d78a7?width=736"
            />

            {/* Office Equipment */}
            <CategoryGridSection
              title="Office Equipments"
              more="View All →"
              products={officeProducts}
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1203fd5403a7da3529389ba00fb81c9d2c2114?width=736"
            />
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="mt-8">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="relative shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] rounded-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b89e3e6407d44c7442fdf7e8e7b483bf1d08334?width=1292"
                alt="10% Back Promotion"
                className="w-full rounded-2xl h-48 object-cover"
              />
              <div className="absolute top-10 right-0 p-6 flex flex-col justify-center">
                <h3 className="text-4xl font-bold dark:text-yellow-400 text-white mb-2">
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

            <div className="relative rounded-2xl overflow-hidden shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c50223be3a62f6f8f522c522614717bcb627c2f?width=1292"
                alt="Download App"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-white mb-2">
                  Download our app
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Enter your phone number and we'll send you a download link.
                </p>
                <div className="flex bg-gray-700 bg-opacity-10 rounded">
                  <input
                    type="text"
                    placeholder="(+xx) xxx..."
                    className="flex-1 px-3 py-2 bg-transparent text-white dark:placeholder-gray-200 outline-none"
                  />
                  <button className="px-4 py-2 active:text-teal-500 cursor-pointer text-green-400 text-sm uppercase">
                    Send Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="mt-8">
          <div className="bg-gray-300 dark:text-white dark:bg-background rounded-2xl shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] p-8">
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
                  className="flex gap-4 p-4 dark:text-white border rounded-2xl hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] group dark:hover:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] transition-shadow">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-20 mix-blend-darken dark:mix-blend-lighten object-cover group-hover:scale-125 rounded"
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
        {/* <section className="mt-8">
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
        </section> */}

        <ResponsiveFooter/>

        {/* <ProductCard/> */}
      </main>
    </div>
  );
}
