import { Star, Quote } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.png";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  delay: number;
}

const TestimonialCard = ({ quote, name, title, company, industry, delay }: TestimonialProps) => {
  return (
    <div 
      className="relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 animate-fade-in-up border border-[#e0e0e0]/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Quote Mark */}
      <div className="absolute top-4 left-4 text-[#eb2328]/10">
        <Quote className="w-16 h-16" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#E6C520] text-[#E6C520]" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-[#5a5a5a]/80 text-lg leading-relaxed mb-8 italic">
          "{quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#eb2328]/20 to-[#E6C520]/20 flex items-center justify-center text-[#5a5a5a] font-bold text-lg">
            {name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-bold text-[#5a5a5a]">{name}</p>
            <p className="text-sm text-[#b4b4b4]">{title}</p>
            <p className="text-sm text-[#eb2328] font-medium">{company} • {industry}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Customer Sentry helped us identify $4.2M in at-risk revenue and save 78% of those accounts. The predictive churn model is incredibly accurate for our complex manufacturing relationships.",
      name: "Jennifer Martinez",
      title: "VP of Customer Success",
      company: "Precision Parts Corp",
      industry: "Industrial Manufacturing",
    },
    {
      quote: "We reduced our response time to critical feedback by 85%. The AI categorization saves our team 25+ hours per week that we now spend actually solving problems instead of sorting tickets.",
      name: "Robert Chen",
      title: "Director of Service Operations",
      company: "TechMach Industries",
      industry: "Machinery & Equipment",
    },
    {
      quote: "The executive dashboards transformed how we present customer health to our board. We went from gut feelings to data-driven insights that directly influence our product roadmap.",
      name: "Amanda Thompson",
      title: "Chief Customer Officer",
      company: "GlobalSpec Solutions",
      industry: "B2B Technology",
    },
  ];

  const logos = [
    "Caterpillar", "Siemens", "Honeywell", "3M", "Rockwell", "Emerson"
  ];

  return (
    <section id="testimonials" className="bg-[#fafafa] py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#eb2328] mb-4">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#5a5a5a] mb-4 leading-tight">
            See Why 10,000+ Companies Choose Us
          </h2>
          <p className="text-lg md:text-xl text-[#5a5a5a]/80">
            From Fortune 500 manufacturers to growing industrial suppliers, Customer Sentry powers customer intelligence for B2B leaders worldwide
          </p>
        </div>

        {/* Logo Wall */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20">
          {logos.map((name) => (
            <div
              key={name}
              className="text-2xl font-display text-[#b4b4b4]/60 hover:text-[#5a5a5a] transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {name}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 150} />
          ))}
        </div>

        {/* Team Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={teamCollaboration} 
            alt="Teams using Customer Sentry for customer intelligence" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a5a5a]/80 to-transparent flex items-end p-8 md:p-12">
            <div className="text-white">
              <p className="text-2xl md:text-3xl font-display mb-2">Join the Customer Intelligence Revolution</p>
              <p className="text-white/80">See why forward-thinking manufacturers trust Customer Sentry</p>
            </div>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="text-center mt-16">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#E6C520] text-[#E6C520]" />
            ))}
          </div>
          <p className="text-2xl font-bold text-[#5a5a5a]">4.9 out of 5</p>
          <p className="text-[#b4b4b4]">Based on 1,200+ G2 & Capterra reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
