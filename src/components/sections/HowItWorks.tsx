import { Plug, Bot, Rocket } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  isLast?: boolean;
}

const Step = ({ number, icon, title, description, color, isLast }: StepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-1 bg-[#e0e0e0] rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#eb2328] via-[#E6C520] to-[#96cd32] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
        </div>
      )}
      
      {/* Number Badge */}
      <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-display shadow-lg transition-all duration-300 group-hover:scale-110 ${color}`}>
        {number}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mt-8 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${color}`}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-[#5a5a5a] mb-4">{title}</h3>
      <p className="text-[#5a5a5a]/70 max-w-sm leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <Plug className="w-7 h-7 text-white" />,
      title: "Connect Your Systems",
      description: "Integrate with your CRM, ERP, helpdesk, and email in minutes. Pre-built connectors for Salesforce, SAP, ServiceNow, Zendesk, and 50+ more enterprise tools.",
      color: "bg-gradient-to-br from-[#eb2328] to-[#7d1419]",
    },
    {
      number: 2,
      icon: <Bot className="w-7 h-7 text-white" />,
      title: "AI Analyzes Everything",
      description: "Our proprietary AI engine processes every customer interaction, extracting sentiment, intent, and actionable insights in real-time with 97% accuracy.",
      color: "bg-gradient-to-br from-[#E6C520] to-[#d4b01c]",
    },
    {
      number: 3,
      icon: <Rocket className="w-7 h-7 text-white" />,
      title: "Take Intelligent Action",
      description: "Receive prioritized recommendations, auto-assign tasks to the right team members, and track impact on retention and revenue with built-in analytics.",
      color: "bg-gradient-to-br from-[#96cd32] to-[#7db828]",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#eb2328] mb-4">
            SIMPLE IMPLEMENTATION
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#5a5a5a] mb-4 leading-tight">
            Go Live in Less Than a Day
          </h2>
          <p className="text-lg md:text-xl text-[#5a5a5a]/80">
            No lengthy implementations or consulting projects. Our team handles everything so you can focus on your customers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <Step key={step.number} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
