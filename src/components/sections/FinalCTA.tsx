import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Lock, Award, Zap, ArrowRight, Shield, Clock } from "lucide-react";
import { toast } from "sonner";
import ctaBackground from "@/assets/cta-background.png";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Customer Sentry!", {
        description: "Check your email for next steps to start your free trial.",
      });
      setEmail("");
    }
  };

  const trustItems = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
    "Setup in 5 minutes",
  ];

  const badges = [
    { icon: Shield, label: "SOC 2 Type II Certified" },
    { icon: Award, label: "G2 Leader 2024" },
    { icon: Zap, label: "99.9% Uptime SLA" },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a5a5a]/95 via-[#5a5a5a]/90 to-[#3d3d3d]/95" />

      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#eb2328]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#E6C520]/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#eb2328] text-white text-sm font-bold mb-8 shadow-red">
            <Clock className="w-4 h-4" />
            LIMITED TIME: Get 3 Months Free on Annual Plans
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6 leading-tight">
            Ready to Transform Your Customer Intelligence?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join 10,000+ manufacturing leaders who trust Customer Sentry to reduce churn, grow revenue, and delight their customers.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto mb-10">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 bg-white border-0 rounded-lg sm:rounded-r-none text-[#5a5a5a] placeholder:text-[#b4b4b4] focus:ring-0 focus:ring-offset-0"
            />
            <Button 
              type="submit" 
              variant="gold" 
              size="lg"
              className="h-14 rounded-lg sm:rounded-l-none px-8 whitespace-nowrap"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/90 text-sm">
                <Check className="w-4 h-4 text-[#96cd32]" />
                {item}
              </span>
            ))}
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur text-white text-sm border border-white/20"
              >
                <badge.icon className="w-4 h-4" />
                {badge.label}
              </span>
            ))}
          </div>

          {/* Guarantee */}
          <p className="mt-10 text-white/70 text-sm">
            <Lock className="w-4 h-4 inline mr-2" />
            90-day money-back guarantee • Your data is always yours • GDPR & SOC 2 compliant
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
