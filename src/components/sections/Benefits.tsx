import { Check, Clock, TrendingUp, Target, ArrowRight, DollarSign, AlertCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BenefitBlockProps {
  badge: string;
  badgeColor: string;
  headline: string;
  subheadline: string;
  description: string;
  stats: { value: string; label: string }[];
  features: string[];
  ctaText: string;
  imagePosition: "left" | "right";
  icon: React.ReactNode;
  iconBg: string;
}

const BenefitBlock = ({
  badge,
  badgeColor,
  headline,
  subheadline,
  description,
  stats,
  features,
  ctaText,
  imagePosition,
  icon,
  iconBg,
}: BenefitBlockProps) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
      {/* Visual */}
      <div className={`${imagePosition === "right" ? "lg:order-2" : ""}`}>
        <div className="relative bg-gradient-to-br from-[#fafafa] to-white rounded-2xl p-8 shadow-lg border border-[#e0e0e0]/50">
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}>
              {icon}
            </div>
            <div>
              <p className="text-sm text-[#b4b4b4]">{badge}</p>
              <p className="text-xl font-bold text-[#5a5a5a]">{subheadline}</p>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#e0e0e0]/30">
                <p className="text-2xl font-bold text-[#eb2328]">{stat.value}</p>
                <p className="text-sm text-[#5a5a5a]/70">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-[#e0e0e0]/30">
                <Check className="w-5 h-5 text-[#96cd32] flex-shrink-0" />
                <span className="text-[#5a5a5a]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${imagePosition === "right" ? "lg:order-1" : ""}`}>
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-6 ${badgeColor}`}>
          {badge}
        </span>
        <h3 className="text-3xl md:text-4xl font-display text-[#5a5a5a] mb-6 leading-tight">{headline}</h3>
        <p className="text-[#5a5a5a]/80 text-lg leading-relaxed mb-8">{description}</p>

        <Button variant="ghost" className="text-[#eb2328] hover:text-[#eb2328] hover:bg-[#eb2328]/5 group p-0">
          {ctaText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#eb2328] mb-4">
            MEASURABLE IMPACT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#5a5a5a] mb-4 leading-tight">
            ROI You Can Prove to the Board
          </h2>
          <p className="text-lg md:text-xl text-[#5a5a5a]/80">
            Customer Sentry delivers quantifiable results within 90 days or your money back
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-24">
          {/* Benefit 1 - Reduce Churn */}
          <BenefitBlock
            badge="REDUCE CHURN"
            badgeColor="bg-[#eb2328]"
            headline="Predict and Prevent Customer Defection"
            subheadline="Average 32% Churn Reduction"
            description="Our AI identifies at-risk accounts 6-8 weeks before they churn by analyzing subtle changes in communication patterns, service ticket sentiment, and engagement metrics. Receive automatic alerts and tailored playbooks to save each account."
            stats={[
              { value: "32%", label: "Less customer churn" },
              { value: "78%", label: "Save rate on alerts" },
              { value: "6 wks", label: "Early warning lead time" },
              { value: "$4.2M", label: "Avg. revenue saved" },
            ]}
            features={[
              "Predictive churn scoring for every account",
              "Automated early warning alerts",
              "Personalized retention playbooks",
            ]}
            ctaText="See Churn Prevention in Action"
            imagePosition="right"
            icon={<AlertCircle className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-[#eb2328] to-[#7d1419]"
          />

          {/* Benefit 2 - Increase Revenue */}
          <BenefitBlock
            badge="GROW REVENUE"
            badgeColor="bg-[#E6C520]"
            headline="Uncover Hidden Expansion Opportunities"
            subheadline="Average $2.4M in Upsell Revenue"
            description="Customer Sentry surfaces buying signals buried in support tickets, sales calls, and survey responses. Know exactly when customers are ready to expand, which products they need, and how to position the conversation."
            stats={[
              { value: "$2.4M", label: "Avg. upsell identified" },
              { value: "47%", label: "Higher expansion rate" },
              { value: "3.2x", label: "Faster deal velocity" },
              { value: "89%", label: "Signal accuracy" },
            ]}
            features={[
              "AI-detected expansion signals",
              "Buying intent scoring",
              "Automated sales team alerts",
            ]}
            ctaText="Explore Revenue Intelligence"
            imagePosition="left"
            icon={<DollarSign className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-[#E6C520] to-[#d4b01c]"
          />

          {/* Benefit 3 - Save Time */}
          <BenefitBlock
            badge="SAVE TIME"
            badgeColor="bg-[#96cd32]"
            headline="Automate the Work Your Team Hates"
            subheadline="Save 20+ Hours Per Week"
            description="Eliminate manual feedback sorting, report generation, and cross-referencing data between systems. Customer Sentry automatically categorizes, prioritizes, and routes insights to the right people with zero manual effort."
            stats={[
              { value: "20+", label: "Hours saved weekly" },
              { value: "95%", label: "Less manual sorting" },
              { value: "10x", label: "Faster reporting" },
              { value: "Zero", label: "Data entry needed" },
            ]}
            features={[
              "Auto-categorization of all feedback",
              "One-click executive reports",
              "Smart routing to right teams",
            ]}
            ctaText="See Automation in Action"
            imagePosition="right"
            icon={<Clock className="w-7 h-7 text-white" />}
            iconBg="bg-gradient-to-br from-[#96cd32] to-[#7db828]"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
