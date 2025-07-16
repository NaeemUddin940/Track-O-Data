import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, Mail } from 'lucide-react';

// Dummy cn utility for the Canvas
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function ResponsiveFooter() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Assuming dark mode is managed globally

  // Dummy data for footer links
  const footerLinks = {
    "TOP CATEGORIES": ["Laptops", "PC & Computers", "Cell Phones", "Tablets", "Cameras", "Sounds", "Office"],
    "COMPANY": ["About Swooo", "Contact", "Career", "Blog", "Sitemap", "Store Locations"],
    "HELP CENTER": ["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"],
    // "PARTNER": ["Become Seller", "Affiliate", "Advertise", "Partnership"]
  };

  return (
    <footer className="bg-gray-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] mt-9 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4 md:px-8 lg:px-16 border-t rounded-2xl border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Company Info, Categories, Help, Partner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 pb-8 border-b border-gray-200 dark:border-gray-700">
          {/* SWOO - Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-4">SWOO - 1ST NYC TECH ONLINE MARKET</h3>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">HOTLINE 24/7</p>
              <a href="tel:(+880) 1311078039" className="text-green-500 font-bold text-xl md:text-2xl hover:underline">(+880) 1311078039</a>
            </div>
            <p className="text-sm mb-4">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
            <a href="mailto:contact@swootechmart.com" className="text-sm text-blue-500 hover:underline flex items-center gap-1">
              <Mail className="w-4 h-4" /> www.trackodata.com
            </a>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm hover:underline text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Currency, Language, Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-200 dark:border-gray-700">
          {/* Currency and Language Selectors */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <div className="relative">
              <select className="appearance-none bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 py-2 pl-3 pr-8 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>USD ▾</option>
                <option>EUR ▾</option>
                <option>BDT ▾</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 py-2 pl-3 pr-8 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Eng ▾</option>
                <option>বাংলা ▾</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="font-bold text-gray-900 dark:text-white mb-2">SUBSCRIBE & GET 10% OFF FOR YOUR FIRST ORDER</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition-colors">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">By subscribing, you've accepted the our <a href="#" className="underline hover:text-blue-500">Policy</a></p>
          </div>
        </div>

        {/* Bottom Section: Copyright, Payment Icons, Mobile Site */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2 md:mb-0">© 2024 Swootechmart. All Rights Reserved</p>
          <div className="flex space-x-4 mb-2 md:mb-0">
            {/* Payment Icons - Using placeholder images for now */}
            <img src="https://placehold.co/40x25/E0E0E0/333333?text=Visa" alt="Visa" className="h-6 object-contain" />
            <img src="https://placehold.co/40x25/E0E0E0/333333?text=Mastercard" alt="Mastercard" className="h-6 object-contain" />
            <img src="https://placehold.co/40x25/E0E0E0/333333?text=Stripe" alt="Stripe" className="h-6 object-contain" />
            <img src="https://placehold.co/40x25/E0E0E0/333333?text=Klarna" alt="Klarna" className="h-6 object-contain" />
          </div>
          <a href="#" className="text-blue-500 hover:underline">Mobile Site</a>
        </div>
      </div>
    </footer>
  );
}

// App component to demonstrate the footer
export function App() {


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-between transition-colors duration-300">

      <main className="flex-grow p-4 text-center text-gray-700 dark:text-gray-300">
        {/* This is just placeholder content to ensure the footer stays at the bottom */}
        <h1 className="text-3xl font-bold mb-4">Your Main Content Goes Here</h1>
        <p>Scroll down to see the responsive footer.</p>
      </main>

      <ResponsiveFooter /> {/* Render the new ResponsiveFooter component */}
    </div>
  );
}
