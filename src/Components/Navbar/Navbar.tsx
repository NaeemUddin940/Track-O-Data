"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  Sun,
  Moon,
  User,
  ChevronDown,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "../Navbar/button";
import { Input } from "../Navbar/input";
import { Badge } from "../Navbar/badge";
import { Sheet, SheetContent, SheetTrigger } from "../Navbar/sheet";
import { Separator } from "../Navbar/separator";
import { Link } from "react-router";
import {
  PlaceholderAndVanishInput,
  PlaceholdersAndVanishInput,
} from "./placeholders-and-vanish-input";
import { SparklesText } from "../magicui/sparkles-text";

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string; description?: string }[];
}

interface SearchSuggestion {
  id: string;
  text: string;
  type: "product" | "category" | "history";
  image?: string;
  price?: string;
}

interface EcommerceNavbarProps {
  logo?: string;
  logoText?: string;
  navItems?: NavItem[];
  cartCount?: number;
  wishlistCount?: number;
  onSearch?: (query: string) => void;
  onCartClick?: () => void;
  onWishlistClick?: () => void;
  className?: string;
}

const EcommerceNavbar: React.FC<EcommerceNavbarProps> = ({
  logo = "🛍️",
  logoText = "ShopHub",
  navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    {
      label: "Categories",
      to: "#",
      submenu: [
        {
          label: "Electronics",
          href: "/electronics",
          description: "Latest gadgets and tech",
        },
        {
          label: "Fashion",
          href: "/fashion",
          description: "Trending styles and brands",
        },
        {
          label: "Home & Garden",
          href: "/home",
          description: "Decor and essentials",
        },
        {
          label: "Sports",
          href: "/sports",
          description: "Fitness and outdoor gear",
        },
      ],
    },
  ],
  cartCount = 3,
  wishlistCount = 7,
  onSearch = (query: string) => console.log("Search:", query),
  onCartClick = () => console.log("Cart clicked"),
  onWishlistClick = () => console.log("Wishlist clicked"),
  className = "",
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([
    "wireless headphones",
    "running shoes",
    "coffee maker",
  ]);

  const searchRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const mockSuggestions: SearchSuggestion[] = [
    {
      id: "1",
      text: "iPhone 15 Pro",
      type: "product",
      image: "📱",
      price: "$999",
    },
    {
      id: "2",
      text: "Samsung Galaxy",
      type: "product",
      image: "📱",
      price: "$799",
    },
    { id: "3", text: "Electronics", type: "category" },
    { id: "4", text: "Smartphones", type: "category" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setIsSearchLoading(true);
      setTimeout(() => {
        onSearch(query);
        setSearchHistory((prev) =>
          [query, ...prev.filter((item) => item !== query)].slice(0, 5)
        );
        setShowSuggestions(false);
        setIsSearchLoading(false);
      }, 500);
    }
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case "history":
        return <Clock className="w-4 h-4 text-muted-foreground" />;
      case "category":
        return <TrendingUp className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Search className="w-4 h-4 text-muted-foreground" />;
    }
  };
  const placeholders = [
    "Welcome to ShopHub",
    "What are you looking for?",
    "Search for products...",
    "Find the best deals",
    "Explore categories",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <nav
        ref={navRef}
        className={`
          sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur
          transition-all duration-200
          ${isSticky ? "shadow-lg" : ""}
          ${className}
        `}>
        <div className="px-10 dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e]">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Link
                to="/"
                className="text-xl cursor-pointer md:text-2xl font-bold text-primary">
                {logo}
              </Link>

              <Link to="/" className="cursor-pointer text-foreground xs:block">
                <SparklesText>{logoText}</SparklesText>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center justify-between">
              <div className="hidden lg:flex cursor-pointer items-center space-x-4  xl:space-x-6">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="flex items-center space-x-1 text-foreground dark:text-[#646cff] dark:text-shadow-[#646cff] dark:text-shadow-2xs hover:text-primary transition-colors py-2 text-xl ">
                      <Link to={item.to}>{item.label}</Link>
                      {item.submenu && (
                        <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.submenu && activeDropdown === item.label && (
                      <div className="absolute top-7 left-0 mt-1 w-56 xl:w-64 bg-background border border-border rounded-lg shadow-lg py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 xl:py-3 hover:bg-muted transition-colors">
                            <div className="font-medium text-foreground text-sm xl:text-base">
                              {subItem.label}
                            </div>
                            {subItem.description && (
                              <div className="text-xs xl:text-sm text-muted-foreground">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center ">
              {/* Desktop Search Bar */}
              {!isMobile && (
                <div
                  ref={searchRef}
                  className="relative flex-1 max-w-sm xl:max-w-md">
                  <div className="relative shadow-2xl rounded-full">
                    {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" /> */}
                    {/* <PlaceholderAndVanishInput
                      placeholders={[
                        "Search for products...",
                        "Try 'iPhone 15 Pro'",
                        "What do you need today?",
                        "Welcome to ShopHub",
                        "What are you looking for?",
                        "Search for products...",
                        "Find the best deals",
                        "Explore categories",
                      ]}
                      onChange={(e) => console.log(e.target.value)}
                      onSubmit={(e) => console.log("Submitted!")}
                    /> */}

                    <PlaceholdersAndVanishInput
                      placeholders={placeholders}
                      onChange={handleChange}
                      onSubmit={onSubmit}
                    />
                    {/* <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => handleSearchInputChange(e.target.value)}
                      onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch(searchQuery);
                        }
                      }}
                      className="pl-10 pr-4 w-60 text-sm"
                    /> */}
                    {/* {isSearchLoading && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      </div>
                    )} */}
                  </div>

                  {/* Search Suggestions */}
                  {showSuggestions && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-2 max-h-80 overflow-y-auto z-50">
                      {searchHistory.length > 0 && (
                        <>
                          <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                            Recent
                          </div>
                          {searchHistory.slice(0, 3).map((item, index) => (
                            <button
                              key={`history-${index}`}
                              onClick={() => handleSearch(item)}
                              className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-muted transition-colors">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-foreground text-sm">
                                {item}
                              </span>
                            </button>
                          ))}
                          <Separator className="my-2" />
                        </>
                      )}

                      <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                        Suggestions
                      </div>
                      {mockSuggestions
                        .filter((suggestion) =>
                          suggestion.text
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        )
                        .slice(0, 4)
                        .map((suggestion) => (
                          <button
                            key={suggestion.id}
                            onClick={() => handleSearch(suggestion.text)}
                            className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-muted transition-colors">
                            {suggestion.image ? (
                              <span className="text-base">
                                {suggestion.image}
                              </span>
                            ) : (
                              getSuggestionIcon(suggestion.type)
                            )}
                            <div className="flex-1 text-left">
                              <div className="text-foreground text-sm">
                                {suggestion.text}
                              </div>
                              {suggestion.price && (
                                <div className="text-xs text-primary font-medium">
                                  {suggestion.price}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              )}
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="relative h-8 w-8 md:h-10 md:w-10">
                <Sun className="h-4 w-4 transition-all dark:scale-0" />
                <Moon className="absolute h-4 w-4 scale-0 transition-all dark:scale-100" />
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onWishlistClick}
                className="relative h-8 w-8 md:h-10 md:w-10">
                <Heart className="h-4 w-4 md:h-5 md:w-5" />
                {wishlistCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute animate-pulse -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 text-xs">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onCartClick}
                className="relative h-8 w-8 md:h-10 md:w-10">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                {cartCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute animate-bounce -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount > 99 ? "99+" : cartCount}
                  </Badge>
                )}
              </Button>

              {/* User Account */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex h-8 w-8 md:h-10 md:w-10">
                <User className="h-4 w-4 md:h-5 md:w-5" />
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-8 w-8 md:h-10 md:w-10">
                    <Menu className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 sm:w-80">
                  <div className="flex flex-col space-y-2 mt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Menu</span>
                    </div>

                    <Separator />

                    {/* Mobile Navigation Items */}
                    {navItems.map((item) => (
                      <div key={item.label}>
                        <Link
                          to={item.to}
                          className="block py-2 px-5 text-foreground hover:bg-gray-700 hover:text-primary transition-colors">
                          {item.label}
                        </Link>
                        {item.submenu && (
                          <div className="pl-10 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <Separator />

                    {/* Mobile User Actions */}
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        My Account
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start cursor-pointer">
                        <Heart className="mr-2 h-4 w-4" />
                        Wishlist ({wishlistCount})
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start cursor-pointer">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Cart ({cartCount})
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Below Navigation */}
      {isMobile && (
        <div className="sticky md:hidden top-16 z-40 w-full bg-background border-b border-border px-4 py-3">
          <div ref={searchRef} className="relative">
            <div className="relative">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" /> */}
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
              {/* <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearchInputChange(e.target.value)}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(searchQuery);
                  }
                }}
                className="pl-10 pr-4 w-full"
              /> */}
              {isSearchLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                </div>
              )}
            </div>

            {/* Mobile Search Suggestions */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-2 max-h-60 overflow-y-auto z-50">
                {searchHistory.length > 0 && (
                  <>
                    <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                      Recent
                    </div>
                    {searchHistory.slice(0, 2).map((item, index) => (
                      <button
                        key={`history-${index}`}
                        onClick={() => handleSearch(item)}
                        className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-muted transition-colors">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">{item}</span>
                      </button>
                    ))}
                    <Separator className="my-2" />
                  </>
                )}

                <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                  Suggestions
                </div>
                {mockSuggestions
                  .filter((suggestion) =>
                    suggestion.text
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .slice(0, 3)
                  .map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSearch(suggestion.text)}
                      className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-muted transition-colors">
                      {suggestion.image ? (
                        <span className="text-lg">{suggestion.image}</span>
                      ) : (
                        getSuggestionIcon(suggestion.type)
                      )}
                      <div className="flex-1 text-left">
                        <div className="text-foreground">{suggestion.text}</div>
                        {suggestion.price && (
                          <div className="text-sm text-primary font-medium">
                            {suggestion.price}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EcommerceNavbar;
