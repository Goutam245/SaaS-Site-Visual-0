import { 
  BarChart3, 
  Brain, 
  Link2, 
  AlertTriangle, 
  FileBarChart, 
  Users,
  ArrowRight
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  benefit: string;
  delay: number;
}

const FeatureCard = ({ icon, iconColor, title, description, benefit, delay }: FeatureCardProps) => {
  return (
    <div 
      className="group bg-white rounded-2xl p-8 shadow-card border-l-4 border-transparent hover:border-[#eb2328] transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#5a5a5a] mb-3">{title}</h3>
      <p className="text-[#5a5a5a]/70 leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-2 text-[#eb2328] font-medium text-sm group-hover:gap-3 transition-all">
        <span>{benefit}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <BarChart3 className="w-7 h-7 text-white" />,
      iconColor: "bg-gradient-to-br from-[#eb2328] to-[#7d1419]",
      title: "Real-Time Sentiment Dashboard",
      description: "Monitor customer sentiment across all channels as it happens. Get instant alerts when satisfaction drops or issues emerge in your service operations.",
      benefit: "Respond 10x faster to issues",
    },
    {
      icon: <Brain className="w-7 h-7 text-white" />,
      iconColor: "bg-gradient-to-br from-[#E6C520] to-[#d4b01c]",
      title: "Predictive Churn Analytics",
      description: "Our AI identifies at-risk accounts weeks before they churn. Receive actionable playbooks to re-engage customers and protect recurring revenue.",
      benefit: "Reduce churn by 32%",
    },
    {
      icon: <Link2 className="w-7 h-7 text-white" />,
      iconColor: "bg-gradient-to-br from-[#96cd32] to-[#7db828]",
      title: "Unified Feedback Hub",
      description: "Consolidate feedback from service tickets, NPS surveys, social media, and sales calls into one intelligent platform with automatic categorization.",
      benefit: "Save 20+ hours weekly",
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-white" />,
      iconColor: "bg-gradient-to-br from-[#eb2328] to-[#7d1419]",
      title: "Early Warning System",
      description: "Detect product quality issues, service failures, and emerging complaints before they escalate. Automated escalation to the right team members.",
      benefit: "Prevent 85% of escalations",
    },
    {
      icon: <FileBarChart className="w-7 h-7 text-white" />,
      iconColor: "bg-gradient-to-br from-[#E6C520] to-[#d4b01c]",
      title: "Executive Reporting Suite",
      description: "Generate beautiful board-ready reports in seconds. Track customer health scores, revenue impact, and team performance with customizable KPIs.",
      benefit: "Prove ROI instantly",
    },
    {
      icon: <Users className="w-7 h-7 text-white" />,
      iconColor: "bg-gradient-to-br from-[#96cd32] to-[#7db828]",
      title: "Cross-Team Collaboration",
      description: "Break down silos between sales, service, and product teams. Share insights, assign ownership, and track resolution across your entire organization.",
      benefit: "Align all departments",
    },
  ];

  return (
    <section id="features" className="bg-[#fafafa] py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#eb2328] mb-4">
            ENTERPRISE-GRADE FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#5a5a5a] mb-4 leading-tight">
            Everything B2B Manufacturers Need
          </h2>
          <p className="text-lg md:text-xl text-[#5a5a5a]/80">
            Purpose-built for complex B2B relationships with long sales cycles and high-touch service requirements
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
