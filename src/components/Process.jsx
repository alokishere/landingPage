import React from "react";
import { Layers, Zap, Database, TrendingUp, CheckCircle2 } from "lucide-react";

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-(--color-primary-purple) font-semibold uppercase tracking-wider text-sm">
              Workflow
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-(--color-text-primary)">
              AI-Powered Marketing: <br />
              The New Standard
            </h2>
            <p className="text-(--color-text-secondary) text-lg">
              Traditional approaches can't keep up. Experience the speed of
              modern marketing powered by intelligence.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Eliminate manual data entry",
                "Real-time audience segmentation",
                "Automated campaign scaling",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-(--color-primary-teal) bg-opacity-20 flex items-center justify-center text-(--color-primary-teal)">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-(--color-text-primary) font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-(--color-bg-primary) rounded-3xl p-8 border border-(--color-border-light) shadow-lg relative">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>

              <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
                <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md flex-1 md:mx-4 border border-(--color-border-light) hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Layers size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">Connect</h3>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md flex-1 md:mx-4 border border-(--color-border-light) hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">Automate</h3>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md flex-1 md:mx-4 border border-(--color-border-light) hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900">Scale</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
