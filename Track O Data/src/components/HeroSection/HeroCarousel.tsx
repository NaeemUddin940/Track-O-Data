import { Button } from "../UIComponent/button";

import { Check } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/82039943ba14def529b8e9364f1068f52e16c7b4?width=1300",
    title: "aPodOs",
    subtitle: "Work wonders with easy",
    description: "Experience aPod 2023 with new technology from $769",
    buttonText: "DISCOVER NOW",
    buttonColor: "bg-white",
    titleColor: "text-white",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ecf00f44bb8a64f3ffa633717f472d62081d5b88?width=1300",
    title: "PC GAMING CASES",
    subtitle: "SALE up to 50% off",
    description: "",
    buttonText: "BUY NOW",
    buttonColor: "bg-black",
    titleColor: "text-black",
    buttonTextColor: "text-white",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ac5eab4762bb311626db9212d2ae60f1ce66e5?width=1300",
    title: "Noise Cancelling",
    subtitle: "Headphone",
    description: "Boso Over-Ear Headphone",
    features: ["Wifi, Voice Assistant", "Low latency game mode"],
    buttonText: "BUY NOW",
    buttonColor: "bg-white text-black",
    titleColor: "text-white",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative  overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-90 rounded-2xl overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-12 py-8 max-w-md">
            <h1
              className={`text-3xl font-bold mb-4 ${slide.titleColor} ${
                slide.id === 1 ? "leading-tight" : ""
              }`}
            >
              {slide.id === 1 ? (
                <>
                  <span className="text-white">aPodOs</span>
                  <br />
                  <span className="text-white font-normal">
                    Work wonders with easy
                  </span>
                </>
              ) : slide.id === 2 ? (
                <>
                  <span className="text-sm uppercase block">
                    pc gaming cases
                  </span>
                  <span className="text-black">SAle up to </span>
                  <span className="text-swoo-green">50% </span>
                  <span className="text-black">off</span>
                </>
              ) : (
                <>
                  <span className="font-bold">Noise Cancelling</span>
                  <br />
                  <span className="font-normal">Headphone</span>
                </>
              )}
            </h1>

            {slide.description && (
              <p className="text-white text-sm mb-4">{slide.description}</p>
            )}

            {slide.features && (
              <div className="space-y-1 mb-6">
                {slide.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white text-sm"
                  >
                    <Check className="w-3 h-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <Button
              className={`${slide.buttonColor} ${slide.buttonTextColor} text-sm cursor-pointer font-medium px-6 py-2`}
            >
              {slide.buttonText}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-4 text-sm">
          <button
            onClick={prevSlide}
            className="text-gray-600 cursor-pointer hover:text-black"
          >
            prev
          </button>
          <span>
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="text-gray-600 cursor-pointer hover:text-black"
          >
            next
          </button>
        </div>
      </div>

      {/* Bottom Mini Banners */}
      <div className="flex gap-4 mt-4">
        <div className="flex-1 relative shadow-xl rounded-2xl overflow-hidden h-40">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/def16e54425ce8cf5e31b315258b5a6d69e23c29?width=634"
            alt="Sono Playgo 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <div className="text-sm">
              <span className="text-black">Sono Playgo 5 from </span>
              <span className="text-swoo-green font-semibold">$569</span>
            </div>
            <button className="text-xs underline text-black mt-2 text-left">
              DISCOVER NOW
            </button>
          </div>
        </div>

        <div className="flex-1 relative shadow-2xl rounded-2xl overflow-hidden h-40">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23684abd2fe29624c4044eafbc4aaa0d6d842cc1?width=634"
            alt="Logitek Bluetooth Keyboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <div className="text-sm">
              <span className="text-white">Logitek Bluetooth </span>
              <span className="text-swoo-yellow font-semibold">Keyboard</span>
            </div>
            <div className="text-xs text-white mt-2">Best for all device</div>
          </div>
        </div>
      </div>
    </div>
  );
}
