import React from "react";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-(--color-bg-dark) text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">
          <div className="md:col-span-1 space-y-4">
            <div className="text-2xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-(--color-primary-purple)"></div>
              MarkAI
            </div>
            <p className="text-gray-400 text-sm">
              Performance marketing solutions for the modern age.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center p-1 rounded-full bg-gray-800 hover:bg-(--color-primary-purple) transition-colors cursor-pointer"><Instagram /></div>
              <div className="w-8 h-8 flex items-center justify-center p-1 rounded-full bg-gray-800 hover:bg-(--color-primary-purple) transition-colors cursor-pointer"><Twitter /></div>
              <div className="w-8 h-8 flex items-center justify-center p-1 rounded-full bg-gray-800 hover:bg-(--color-primary-purple) transition-colors cursor-pointer"><Linkedin /></div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-600 text-xs">
          &copy; 2026 MarkAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const CTA = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-[2.5rem] bg-linear-to-r from-[#6C63FF] to-[#00C9A7] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.1)25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)50%,rgba(255,255,255,0.1)75%,transparent_75%,transparent)] bg-size-[20px_20px] opacity-10"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Ready to Leverage AI <br /> for Smarter Marketing?
          </h2>
          <p className="opacity-90 max-w-xl mx-auto mb-10 text-lg relative z-10">
            Join thousands of marketers who are scaling their campaigns with
            less effort.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-2 rounded-full max-w-md mx-auto flex items-center relative z-10 border border-white/20">
            <Mail className="ml-4 text-white opacity-70" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none text-white placeholder-white/60 flex-1 px-4 py-2"
            />
            <button className="bg-(--color-bg-dark) hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA, Footer };
