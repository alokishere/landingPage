import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-(--color-primary-purple) to-(--color-primary-teal) flex items-center justify-center text-white">
            <Sparkles size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight text-(--color-text-primary)">
            Mark<span className="text-(--color-primary-purple)">AI</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {["Product", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-(--color-text-secondary) hover:text-(--color-primary-purple) transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="btn px-5 py-2.5 rounded-xl text-sm font-medium hover:text-(--color-primary-purple) transition-colors">
            Log In
          </button>
          <button className="fillbtn px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/20">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 md:hidden shadow-xl flex flex-col gap-4">
          {["Product", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 text-gray-600 hover:text-(--color-primary-purple)"
            >
              {item}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <button className="w-full py-2 text-center text-gray-600">
            Log In
          </button>
          <button className="w-full fillbtn py-3 rounded-xl">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
