import { useEffect, useRef, useState } from "react";
import { Building2, MessageSquare, TrendingUp, Puzzle } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  color: string;
}

const Stat = ({ icon, value, label, suffix = "", color }: StatProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = numericValue / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${color}`}>
        {icon}
      </div>
      <p className="text-3xl md:text-4xl font-display text-[#eb2328] mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-[#5a5a5a]/70 font-medium">{label}</p>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    {
      icon: <Building2 className="w-7 h-7 text-white" />,
      value: "10000",
      suffix: "+",
      label: "Manufacturing Companies",
      color: "bg-gradient-to-br from-[#eb2328] to-[#7d1419]",
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-white" />,
      value: "500",
      suffix: "M+",
      label: "Customer Interactions Analyzed",
      color: "bg-gradient-to-br from-[#E6C520] to-[#d4b01c]",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      value: "32",
      suffix: "%",
      label: "Average Churn Reduction",
      color: "bg-gradient-to-br from-[#96cd32] to-[#7db828]",
    },
    {
      icon: <Puzzle className="w-7 h-7 text-white" />,
      value: "50",
      suffix: "+",
      label: "Enterprise Integrations",
      color: "bg-gradient-to-br from-[#5a5a5a] to-[#3d3d3d]",
    },
  ];

  return (
    <section className="bg-white py-16 border-y border-[#e0e0e0]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fef7f7] via-white to-[#fef7f7] opacity-50" />
      <div className="section-container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
