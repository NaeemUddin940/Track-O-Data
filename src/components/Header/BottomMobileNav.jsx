import React, { useState, useEffect } from "react";
import { Home, Search, History, User, Sun, Moon } from "lucide-react"; // Importing icons from lucide-react

// Main App component that renders the Navbar
export default function App() {
  // State to keep track of the currently active navigation item
  const [activeItem, setActiveItem] = useState("home");
  // State to manage dark mode
 

  // Array of navigation items with their properties
  const navItems = [
    { name: "home", label: "Home", icon: Home },
    { name: "search", label: "Search", icon: Search },
    { name: "history", label: "History", icon: History },
    { name: "profile", label: "Profile", icon: User },
  ];

  // Function to handle click events on navigation items
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // In a real application, you would typically change routes or load different content here
    console.log(`Navigating to: ${itemName}`);
  };

  return (
    // Main container div, background changes based on dark mode
    // Added pb-24 to ensure content doesn't go under the fixed navbar
    <div
      className="min-h-screen flex flex-col items-center p-4 pb-24
                    bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 transition-colors duration-300">
      {/* Dark mode toggle button */}
     

      {/* Main content area */}

      <nav
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50
                      flex justify-around items-center 
                      bg-gray-800 dark:bg-gray-200 rounded-3xl shadow-xl 
                      w-11/12 max-w-sm p-2 transition-colors duration-300">
        {navItems.map((item) => (
          <button
            key={item.name} // Unique key for each item in the list
            onClick={() => handleItemClick(item.name)} // Click handler
            className={`
              flex flex-col items-center justify-center p-2 
              transition-all duration-300 ease-in-out 
              flex-1 // Ensure items take equal space
              ${
                item.isSpecial
                  ? "bg-purple-600 rounded-full w-16 h-16 -translate-y-4 shadow-2xl text-white text-3xl" // Special button styles
                  : `text-gray-400 dark:text-gray-600 text-sm ${
                      activeItem === item.name
                        ? "text-purple-400 dark:text-purple-700"
                        : ""
                    }` // Regular item styles
              }
              ${
                item.isSpecial && activeItem === item.name ? "scale-105" : ""
              } /* Slight scale for active special button */
            `}>
            {/* Conditionally render logo or icon */}
            {item.logoUrl ? (
              <img
                src={item.logoUrl}
                alt={`${item.name} logo`}
                className={`
                  ${
                    item.isSpecial ? "w-8 h-8" : "w-6 h-6"
                  } /* Logo size adjustment */
                  rounded-full object-cover /* Ensure logo fits and is circular */
                `}
              />
            ) : (
              <item.icon
                className={`
                  ${
                    item.isSpecial ? "w-8 h-8" : "w-6 h-6"
                  } /* Icon size adjustment */
                  ${
                    item.isSpecial
                      ? "text-white"
                      : activeItem === item.name
                      ? "text-purple-400 dark:text-purple-700"
                      : "text-gray-400 dark:text-gray-600"
                  } /* Icon color based on active state and dark mode */
                `}
              />
            )}

            {/* Render the label only if it's not a special button */}
            {item.label && (
              <span
                className={`
                mt-1 
                ${
                  activeItem === item.name
                    ? "font-semibold text-purple-400 dark:text-purple-700"
                    : "text-gray-400 dark:text-gray-600"
                }
              `}>
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
