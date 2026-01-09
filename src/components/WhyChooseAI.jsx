import React from "react";
import { DollarSign, Users, RefreshCw, BarChart } from "lucide-react";

const ReasonCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-(--color-bg-primary) rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-(--color-border-light) group">
    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-(--color-primary-purple) mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="font-bold text-lg mb-2 text-(--color-text-primary)">
      {title}
    </h3>
    <p className="text-(--color-text-secondary) text-sm">{description}</p>
  </div>
);

const WhyChooseAI = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Reduce ad spend by up to 30% while scaling output.",
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Reach the exact personas engaged with your brand.",
    },
    {
      icon: RefreshCw,
      title: "Marketing Automation",
      description: "Set flows once and let AI handle the nurturing.",
    },
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      description: "Move from guesswork to actionable intelligence.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-(--color-text-primary)">
            Why Marketing Teams Choose AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={i} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAI;
