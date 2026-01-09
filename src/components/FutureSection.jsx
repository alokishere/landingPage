import React from "react";
import { ArrowRight } from "lucide-react";

const FutureCard = ({ tag, title, description, color }) => (
  <div className="flex-1 bg-white p-8 rounded-2xl border border-(--color-border-light) hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block ${color}`}
    >
      {tag}
    </span>
    <h3 className="text-xl font-bold text-(--color-text-primary) mb-3 group-hover:text-(--color-primary-purple) transition-colors">
      {title}
    </h3>
    <p className="text-(--color-text-secondary) text-sm leading-relaxed mb-4">
      {description}
    </p>
  </div>
);

const FutureSection = () => {
  return (
    <section className="py-20 bg-(--color-bg-primary)">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-(--color-text-primary) mb-2">
            The Future of AI in Marketing
          </h2>
          <p className="text-(--color-text-secondary)">
            A glimpse into what lies ahead.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <FutureCard
            tag="Near Future"
            title="Hyper-Personalization"
            description="AI will generate individual content experiences for every single user in real-time."
            color="bg-green-100 text-green-700"
          />
          <FutureCard
            tag="Emerging"
            title="Voice & Visual Search"
            description="Standard SEO will evolve into optimizing for voice assistants and visual recognition."
            color="bg-blue-100 text-blue-700"
          />
          <FutureCard
            tag="Transformative"
            title="Autonomous Marketing"
            description="Self-running campaigns that adjust strategy, budget, and creative without human input."
            color="bg-purple-100 text-purple-700"
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
          {[
            "Market Automation",
            "AI Design",
            "Data Analysis",
            "Prompt Engineering",
            "AI Ethics",
          ].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-(--color-primary-purple) hover:text-(--color-primary-purple) transition-colors cursor-pointer bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
