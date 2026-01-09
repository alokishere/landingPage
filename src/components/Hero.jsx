import React from "react";
import {
  ArrowRight,
  Brain,
  Zap,
  Target,
  BarChart3,
  Mail,
  MessageSquare,
  LineChart,
  Layers,
  Users,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-28 bg-(--color-bg-primary)">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-(--color-primary-purple) opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-(--color-text-primary) leading-tight">
              How AI is <br />
              <span className="text-gradient">Revolutionizing</span> <br />
              Digital Marketing
            </h1>

            <p className="text-lg lg:text-xl text-(--color-text-secondary) max-w-2xl mx-auto lg:mx-0">
              Unlock potential with intelligent automation,
              hyper-personalization, and data-driven strategies that scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="fillbtn px-8 py-3 rounded-xl font-medium flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn px-8 py-3 rounded-xl font-medium hover:bg-gray-50 text-(--color-text-primary)">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image / Visuals */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
            <div className="relative z-10 animate-float">
              {/* Main Graphic Representation - Abstract Brain/Circuit */}
              <div className="w-full h-auto aspect-square bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center border border-(--color-border-light) relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-(--color-bg-primary) to-white opacity-50 z-0"></div>
                <Brain
                  size={200}
                  className="text-(--color-primary-purple) opacity-10 absolute -right-10 -bottom-10"
                />

                <div className="relative z-10 grid grid-cols-2 gap-6 w-full h-full">
                  <div className="col-span-2 flex items-center justify-center">
                    <Cpu size={120} className="text-(--color-primary-purple)" />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-(--color-border-light) flex items-center gap-3 animate-bounce-slow"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <LineChart size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">ROI Increase</p>
                  <p className="text-lg font-bold text-green-600">+245%</p>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-(--color-border-light) flex items-center gap-3 animate-bounce-slow"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-(--color-accent-blue)">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Active Users</p>
                  <p className="text-lg font-bold text-(--color-text-primary)">
                    12.5k+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
