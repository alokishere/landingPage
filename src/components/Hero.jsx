import {
  ArrowRight,
  Brain,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Play,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-b from-slate-50 to-white overflow-hidden">

      {/* Gradient Orb */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-linear-to-br from-purple-300/20 to-teal-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-100 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-linear-to-r from-purple-500 to-teal-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Powered by Advanced AI</span>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>

          {/* Hero Headline */}
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            How AI is <br />
            <span className="relative inline-block mt-2">
              <span className="bg-linear-to-r from-purple-600 via-violet-600 to-teal-500 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4" stroke="url(#gradient)" strokeWidth="6" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#9333EA" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            Digital Marketing
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your marketing with intelligent automation, hyper-personalization, 
            and predictive analytics that drive real results.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-teal-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 shadow-sm hover:shadow transition-all">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 - ROI */}
          <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-4xl font-bold text-gray-900">245%</h3>
                <span className="text-sm text-gray-500">Average ROI</span>
              </div>
              <p className="text-sm text-gray-600">
                Businesses see dramatic growth with AI-powered campaigns
              </p>
            </div>
          </div>

          {/* Card 2 - Users */}
          <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-teal-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-4xl font-bold text-gray-900">10K+</h3>
                <span className="text-sm text-gray-500">Active Users</span>
              </div>
              <p className="text-sm text-gray-600">
                Join thousands of marketers scaling with AI technology
              </p>
            </div>
          </div>

          {/* Card 3 - Automation */}
          <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-violet-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-violet-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-4xl font-bold text-gray-900">24/7</h3>
                <span className="text-sm text-gray-500">Automation</span>
              </div>
              <p className="text-sm text-gray-600">
                AI works around the clock to optimize your marketing
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            {/* Pulsing Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            
            {/* Central Icon */}
            <div className="relative w-20 h-20 bg-linear-to-br from-purple-500 via-violet-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-500 mb-6">Trusted by leading marketing teams</p>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;