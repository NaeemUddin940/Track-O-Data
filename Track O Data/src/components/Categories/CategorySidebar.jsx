import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../UIComponent/button";
import { cn } from "../../lib/utils";

const categories = [
  {
    name: "Laptops",
    icon: "💻",
    salePercent: 40,
    subcategories: [
      "Gaming Laptops",
      "Business Laptops",
      "2-in-1 Laptops",
      "Chromebooks",
    ],
  },
  {
    name: "PC & Computers",
    icon: "🖥️",
    subcategories: [
      "Desktop PCs",
      "All-in-One PCs",
      "Mini PCs",
      "Workstations",
    ],
  },
  {
    name: "Cell Phones",
    icon: "📱",
    subcategories: [
      "Smartphones",
      "Feature Phones",
      "Unlocked Phones",
      "Prepaid Phones",
    ],
  },
  {
    name: "Tablets",
    icon: "📱",
    subcategories: [
      "Android Tablets",
      "iOS Tablets",
      "Windows Tablets",
      "Kids Tablets",
    ],
  },
  {
    name: "Gaming & VR",
    icon: "🎮",
    subcategories: [
      "Gaming Consoles",
      "VR Headsets",
      "Gaming Accessories",
      "PC Games",
    ],
  },
  {
    name: "Networking",
    icon: "📡",
    subcategories: [
      "Routers",
      "Modems",
      "Mesh Wi-Fi Systems",
      "Network Adapters",
    ],
  },
  {
    name: "Cameras",
    icon: "📷",
    subcategories: [
      "DSLR Cameras",
      "Mirrorless Cameras",
      "Action Cameras",
      "Security Cameras",
    ],
  },
  // {
  //   name: "Sounds",
  //   icon: "🔊",
  //   subcategories: ["Headphones", "Earbuds", "Bluetooth Speakers", "Soundbars"],
  // },
  // {
  //   name: "Office",
  //   icon: "🏢",
  //   subcategories: ["Printers", "Monitors", "Keyboards", "Mice", "Webcams"],
  // },
  // {
  //   name: "Storage, USB",
  //   icon: "💾",
  //   subcategories: [
  //     "External HDDs",
  //     "External SSDs",
  //     "USB Flash Drives",
  //     "Memory Cards",
  //   ],
  // },
  // {
  //   name: "Accessories",
  //   icon: "🔌",
  //   subcategories: [
  //     "Cables & Adapters",
  //     "Chargers",
  //     "Power Banks",
  //     "Cases & Covers",
  //   ],
  // },
  // {
  //   name: "Clearance",
  //   icon: "🏷️",
  //   subcategories: [
  //     "Discounted Laptops",
  //     "Clearance Phones",
  //     "Last Chance Deals",
  //     "Refurbished Items",
  //   ],
  // },
];

export function CategorySidebar() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="lg:col-span-1 hidden lg:block">
      <div className="bg-gray-300 rounded-2xl  dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:bg-gray-800 dark:text-white  p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-red-500">🔥</span>
          <span className="font-bold text-red-500 uppercase">Sale 40% Off</span>
        </div>
        <div className="space-y-2 ">
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          {categories.map((category) => (
            <div key={category.name}>
              <Button
                variant="ghost"
                className="w-full justify-between cursor-pointer text-left h-auto p-3"
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.name ? null : category.name
                  )
                }>
                {/* Display the emoji icon directly before the category name */}
                <span className="flex items-center">
                  <span className="mr-2 text-xl">{category.icon}</span>{" "}
                  {/* Emoji icon */}
                  <span>{category.name}</span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    expandedCategory === category.name ? "rotate-180" : ""
                  )}
                />
              </Button>
              {expandedCategory === category.name && (
                <div className="ml-4 mt-2 space-y-1">
                  {category.subcategories.map((sub) => (
                    <Button
                      key={sub}
                      variant="ghost"
                      className="w-full justify-start text-sm text-gray-500 dark:text-gray-300 h-auto p-2">
                      {sub}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
