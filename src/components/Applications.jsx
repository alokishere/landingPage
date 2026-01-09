import React from "react";
import {
  Target,
  MessageSquare,
  Mail,
  BarChart3,
  PenTool,
  Search,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, colorClass }) => (
  <div className="bg-white p-8 rounded-2xl border border-(--color-border-light) shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
    <div
      className={`w-14 h-14 rounded-xl ${colorClass} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
    >
      <Icon className={`w-7 h-7 ${colorClass.replace("bg-", "text-")}`} />
    </div>
    <h3 className="text-xl font-bold text-(--color-text-primary) mb-3">
      {title}
    </h3>
    <p className="text-(--color-text-secondary) mb-4">{description}</p>
    <a
      href="#"
      className="font-medium text-(--color-primary-purple) hover:text-(--color-accent-violet) flex items-center gap-1 text-sm"
    >
      Learn More
    </a>
  </div>
);

const Applications = () => {
  const features = [
    {
      icon: Target,
      title: "AI Ads Optimization",
      description: "Maximize ROI on ad spend with auto-adjusting audiences.",
      colorClass: "bg-blue-600 text-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Chatbots & Support",
      description: "24/7 instant solutions for customer queries.",
      colorClass: "bg-purple-600 text-purple-600",
    },
    {
      icon: Mail,
      title: "Email Personalization",
      description: "Deliver hyper-focused emails to specific user segments.",
      colorClass: "bg-teal-500 text-teal-500",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast market trends and actionable insights.",
      colorClass: "bg-orange-500 text-orange-500",
    },
    {
      icon: PenTool,
      title: "AI Content Generation",
      description: "Generate marketing copy, visuals and blogs instantly.",
      colorClass: "bg-pink-500 text-pink-500",
    },
    {
      icon: Search,
      title: "SEO Automation",
      description: "Automate keyword research and on-page optimization.",
      colorClass: "bg-indigo-500 text-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-(--color-bg-primary)">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-(--color-text-primary) mb-6">
            AI Applications Transforming Marketing
          </h2>
          <p className="text-(--color-text-secondary)">
            Discover how intelligent tools are rewriting the rules of
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
