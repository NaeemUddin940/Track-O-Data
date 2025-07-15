import { Button } from "../UIComponent/button";

export default function PromoBanners() {
  return (
    <div className="space-y-4">
      {/* Watch Banner */}
      <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden h-70">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f222b6ce4b6ac3277317f7cb6c074c8a689d7c?width=618"
          alt="Sport Water Resistance Watch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-8">
          <div className="text-right">
            <div className="text-xs uppercase text-black mb-2">XOMIA</div>
            <h3 className="text-lg font-bold text-black leading-tight mb-4">
              Sport Water
              <br />
              Resistance
              <br />
              Watch
            </h3>
            <Button
              size="sm"
              className="bg-gray-900 text-white text-xs px-4 py-2"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Camera Banner */}
      <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden h-60">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92b6518b729dfeb38f1be3de454e894587ca8fd?width=618"
          alt="OKODo Hero 11+ Black"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <h3 className="text-2xl font-bold text-white leading-tight mb-4">
            <span className="block">OKODo</span>
            <span className="block font-normal">hero 11+</span>
            <span className="block font-normal">black</span>
          </h3>
          <div className="text-white">
            <div className="text-xs uppercase mb-1 text-gray-300">from</div>
            <div className="text-2xl font-bold text-swoo-green">$169</div>
          </div>
        </div>
      </div>
    </div>
  );
}
