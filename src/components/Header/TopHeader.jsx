import { ChevronDown } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="hidden md:block dark:bg-gray-800 dark:text-white bg-gray-100 text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-200 dark:bg-gray-800 font-bold px-2 py-1 rounded text-xs">
            📞 Hotline 24/7
          </span>
          <a href="tel:+8801311078039" className="font-semibold">
            01311-078039
          </a>
          <span>,</span>
          <a href="tel:+8801790970480" className="font-semibold">
            01790970480
          </a>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="font-medium">Sell on Track O Data</span>
          <span className="font-medium">Order Tracking</span>
          <div className="flex items-center gap-1">
            <span>💰 USD</span>
            <ChevronDown className="w-3 h-3" />
          </div>
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f2c0e1d0eb9037a70801edaac1250f655b43dca?width=30"
              alt="Flag"
              className="w-4 h-4"
            />
            <span>Eng</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
