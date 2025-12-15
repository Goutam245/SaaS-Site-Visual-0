import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, TrendingUp, Zap, Shield } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-[#fef7f7] to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#E6C520]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#96cd32]/8 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Pre-headline Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#eb2328] to-[#7d1419] text-white text-sm font-medium shadow-red">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Customer Intelligence Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in-up animation-delay-200 text-4xl md:text-5xl lg:text-[3.5rem] font-display text-[#5a5a5a] leading-[1.1]">
              Turn Every Customer Conversation Into{" "}
              <span className="text-[#eb2328] relative inline-block">
                Revenue Growth
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path d="M2 6C80 2 220 2 298 6" stroke="#eb2328" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up animation-delay-400 text-lg md:text-xl text-[#5a5a5a]/80 leading-relaxed max-w-xl">
              Customer Sentry uses advanced AI to analyze feedback from every channel, predict churn before it happens, and uncover hidden revenue opportunities. Trusted by 10,000+ B2B manufacturers worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up animation-delay-600 flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button variant="hero" size="lg" className="group shadow-red hover:shadow-red-lg">
                  Start Free 14-Day Trial
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="hero-outline" size="lg" className="group">
                <Play className="w-5 h-5" />
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up animation-delay-800 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#5a5a5a]/70 pt-4">
              {[
                "No credit card required",
                "Setup in under 5 minutes",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#96cd32]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="relative animate-fade-in-right animation-delay-600">
            {/* Main Dashboard Image */}
            <div className="relative">
              <img 
                src={dashboardHero} 
                alt="Customer Sentry Analytics Dashboard" 
                className="w-full rounded-2xl shadow-2xl border border-[#e0e0e0]/50"
              />
              
              {/* Floating Stat Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-[#96cd32] animate-float">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#96cd32]" />
                  <div>
                    <p className="text-sm font-bold text-[#5a5a5a]">+47% NPS Score</p>
                    <p className="text-xs text-[#b4b4b4]">vs. last quarter</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-lg p-4 border-l-4 border-[#E6C520] animate-float-delayed">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#E6C520]" />
                  <div>
                    <p className="text-sm font-bold text-[#5a5a5a]">32% Less Churn</p>
                    <p className="text-xs text-[#b4b4b4]">Predicted & prevented</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 right-10 bg-white rounded-xl shadow-lg p-4 border-l-4 border-[#eb2328] animate-float-slow">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#eb2328]" />
                  <div>
                    <p className="text-sm font-bold text-[#5a5a5a]">$2.4M Revenue</p>
                    <p className="text-xs text-[#b4b4b4]">Upsell opportunities found</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
