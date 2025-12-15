import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Briefcase, 
  User, 
  Lock, 
  Zap, 
  Star, 
  Shield,
  Calendar,
  PartyPopper
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoFull from "@/assets/logo-full.png";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  password: string;
  companySize: string;
  industry: string;
  role: string;
  goal: string;
  tools: string[];
  teamSize: number;
  onboardingCall: boolean;
  communications: string[];
  termsAccepted: boolean;
}

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    companySize: "",
    industry: "",
    role: "",
    goal: "",
    tools: [],
    teamSize: 5,
    onboardingCall: true,
    communications: ["updates", "tips", "newsletter"],
    termsAccepted: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const handleInputChange = (field: keyof FormData, value: string | number | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === "password" && typeof value === "string") {
      checkPasswordStrength(value);
    }
  };

  const toggleTool = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter(t => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const toggleCommunication = (comm: string) => {
    setFormData(prev => ({
      ...prev,
      communications: prev.communications.includes(comm)
        ? prev.communications.filter(c => c !== comm)
        : [...prev.communications, comm],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.company && formData.password && passwordStrength >= 3;
      case 2:
        return formData.companySize && formData.industry && formData.role;
      case 3:
        return formData.termsAccepted;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    setIsSubmitted(true);
    toast.success("Account created successfully!", {
      description: "Welcome to Customer Sentry!",
    });
  };

  const steps = [
    { number: 1, title: "Account Info" },
    { number: 2, title: "Company Details" },
    { number: 3, title: "Preferences" },
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1,000 employees",
    "1,000+ employees",
  ];

  const industries = [
    "SaaS/Technology",
    "E-commerce/Retail",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Education",
    "Professional Services",
    "Other",
  ];

  const roles = [
    "CEO/Founder",
    "Product Manager",
    "Customer Success Lead",
    "Support Manager",
    "Marketing Manager",
    "Operations",
    "Other",
  ];

  const tools = [
    "Zendesk", "Intercom", "Salesforce", "HubSpot", 
    "Freshdesk", "Help Scout", "Slack", "Email", "Other"
  ];

  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Full access to all features",
    "Unlimited team members",
    "50+ integrations included",
    "Real-time analytics dashboard",
    "AI-powered insights",
    "White-glove onboarding",
    "24/7 email & chat support",
    "Cancel anytime, no questions",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background-soft flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg animate-scale-in">
            {/* Success Icon */}
            <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#96cd32] to-[#7db828] flex items-center justify-center animate-pulse-subtle">
              <PartyPopper className="w-14 h-14 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Welcome to Customer Sentry! 🎉
            </h1>
            <p className="text-lg text-foreground/70 mb-10 max-w-md mx-auto">
              Your account is ready! Check your email for login credentials and next steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button variant="hero" size="lg">
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Calendar className="w-5 h-5" />
                Schedule Onboarding
              </Button>
            </div>

            {/* Next Steps */}
            <div className="bg-background-soft rounded-xl p-8 text-left">
              <h3 className="text-xl font-bold text-foreground mb-6">What happens next?</h3>
              <div className="space-y-4">
                {[
                  "Check your email (within 2 minutes)",
                  "Confirm your email address",
                  "Log in and connect your first tool",
                  "Start analyzing feedback!",
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#7d1419] flex items-center justify-center text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-soft">
      {/* Header */}
      <header className="bg-white border-b border-border py-4">
        <div className="section-container flex items-center justify-between">
          <Link to="/">
            <img src={logoFull} alt="Customer Sentry" className="h-10 w-auto" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-white border-b border-border py-12 md:py-16">
        <div className="section-container text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-[#7d1419] text-white text-sm font-medium mb-6">
            🎉 START YOUR FREE TRIAL
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Start Your Free 14-Day Trial
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto">
            No credit card required. Full access to all features. Cancel anytime.
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center items-center gap-4 mt-10 max-w-lg mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      currentStep > step.number
                        ? "bg-[#96cd32] text-white"
                        : currentStep === step.number
                        ? "bg-primary text-white scale-110"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                  </div>
                  <span className={`text-xs mt-2 ${currentStep === step.number ? "text-primary font-medium" : "text-muted-foreground"}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 rounded-full ${currentStep > step.number ? "bg-[#96cd32]" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
              {/* Step 1: Account Info */}
              {currentStep === 1 && (
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Let's start with your account
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="John Smith"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground mt-2">We'll send your login credentials here</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                      <Input
                        type="text"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number (Optional)</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Create Password *</label>
                      <Input
                        type="password"
                        placeholder="Min. 8 characters"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                      />
                      
                      {/* Password Strength */}
                      <div className="mt-3">
                        <div className="flex gap-1 mb-2">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-1.5 flex-1 rounded-full transition-colors ${
                                passwordStrength >= level
                                  ? passwordStrength <= 2
                                    ? "bg-primary"
                                    : passwordStrength === 3
                                    ? "bg-[#E6C520]"
                                    : "bg-[#96cd32]"
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <p className={`text-xs ${passwordStrength >= 3 ? "text-[#96cd32]" : "text-muted-foreground"}`}>
                          {passwordStrength <= 1 ? "Weak" : passwordStrength === 2 ? "Fair" : passwordStrength === 3 ? "Good" : "Strong"}
                        </p>
                        <div className="space-y-1 mt-3 text-xs text-muted-foreground">
                          {[
                            { label: "At least 8 characters", met: formData.password.length >= 8 },
                            { label: "One uppercase letter", met: /[A-Z]/.test(formData.password) },
                            { label: "One number", met: /[0-9]/.test(formData.password) },
                            { label: "One special character", met: /[^A-Za-z0-9]/.test(formData.password) },
                          ].map((req) => (
                            <div key={req.label} className={`flex items-center gap-2 ${req.met ? "text-[#96cd32]" : ""}`}>
                              <Check className={`w-3 h-3 ${req.met ? "opacity-100" : "opacity-30"}`} />
                              {req.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Company Details */}
              {currentStep === 2 && (
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Tell us about your company
                  </h2>
                  <p className="text-muted-foreground mb-8">This helps us personalize your experience</p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Building2 className="w-4 h-4 inline mr-2" />
                        How many employees? *
                      </label>
                      <select
                        className="flex h-14 w-full rounded-lg border-2 border-border bg-background px-5 py-4 text-base transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        value={formData.companySize}
                        onChange={(e) => handleInputChange("companySize", e.target.value)}
                      >
                        <option value="">Select company size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Briefcase className="w-4 h-4 inline mr-2" />
                        Industry *
                      </label>
                      <select
                        className="flex h-14 w-full rounded-lg border-2 border-border bg-background px-5 py-4 text-base transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        value={formData.industry}
                        onChange={(e) => handleInputChange("industry", e.target.value)}
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        What's your role? *
                      </label>
                      <select
                        className="flex h-14 w-full rounded-lg border-2 border-border bg-background px-5 py-4 text-base transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                      >
                        <option value="">Select your role</option>
                        {roles.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        What's your biggest customer feedback challenge? (Optional)
                      </label>
                      <textarea
                        className="flex min-h-[120px] w-full rounded-lg border-2 border-border bg-background px-5 py-4 text-base transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 resize-y"
                        placeholder="Tell us what you're hoping to achieve..."
                        value={formData.goal}
                        onChange={(e) => handleInputChange("goal", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <div className="animate-fade-in-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Customize your setup
                  </h2>
                  <p className="text-muted-foreground mb-8">We'll configure everything based on your needs</p>

                  <div className="space-y-8">
                    {/* Tools */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Which tools do you currently use?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                          <button
                            key={tool}
                            type="button"
                            onClick={() => toggleTool(tool)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                              formData.tools.includes(tool)
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-foreground border-border hover:border-primary"
                            }`}
                          >
                            {formData.tools.includes(tool) && <Check className="w-3 h-3 inline mr-1" />}
                            {tool}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Team Size */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        How many team members will use Customer Sentry?
                      </label>
                      <div className="space-y-4">
                        <div className="text-center text-3xl font-bold text-primary">
                          {formData.teamSize}{formData.teamSize >= 50 ? "+" : ""}
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="50"
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange("teamSize", parseInt(e.target.value))}
                          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                      </div>
                    </div>

                    {/* Onboarding */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Would you like a personalized onboarding call?
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => handleInputChange("onboardingCall", true)}
                          className={`flex-1 p-4 rounded-xl border-2 text-left transition-all ${
                            formData.onboardingCall
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-medium text-foreground">Yes, schedule a call</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Our team will help you get set up in 30 minutes
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleInputChange("onboardingCall", false)}
                          className={`flex-1 p-4 rounded-xl border-2 text-left transition-all ${
                            !formData.onboardingCall
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-medium text-foreground">No, I'll explore on my own</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            You can always schedule one later
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Communications */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-4">
                        Stay in the loop
                      </label>
                      <div className="space-y-3">
                        {[
                          { id: "updates", label: "Product updates and new features" },
                          { id: "tips", label: "Best practices and tips" },
                          { id: "stories", label: "Customer success stories" },
                          { id: "newsletter", label: "Monthly newsletter" },
                        ].map((comm) => (
                          <label key={comm.id} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.communications.includes(comm.id)}
                              onChange={() => toggleCommunication(comm.id)}
                              className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                            />
                            <span className="text-foreground">{comm.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="pt-6 border-t border-border">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                          className="w-5 h-5 mt-0.5 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-foreground">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">Terms of Service</a>
                          {" "}and{" "}
                          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-10 pt-8 border-t border-border">
                {currentStep > 1 ? (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}
                
                {currentStep < 3 ? (
                  <Button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    disabled={!canProceed()}
                  >
                    Continue to Step {currentStep + 1}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="px-10"
                  >
                    Create My Account 🚀
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 bg-gradient-to-br from-primary to-[#7d1419] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-display mb-8">What's Included?</h3>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-white/90">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/20 pt-8 space-y-4">
                {[
                  { icon: Lock, label: "Bank-level encryption" },
                  { icon: Zap, label: "Setup in 5 minutes" },
                  { icon: Star, label: "98% satisfaction rate" },
                  { icon: Shield, label: "GDPR compliant" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur text-sm"
                  >
                    <badge.icon className="w-4 h-4" />
                    {badge.label}
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border-t border-white/20 pt-8 mt-8">
                <p className="text-white/90 italic mb-4">
                  "The setup was incredibly simple. We were analyzing feedback within an hour!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="font-medium">Sarah J.</p>
                    <p className="text-sm text-white/70">VP of Success</p>
                  </div>
                </div>
              </div>

              <a href="#" className="block text-center text-white/80 hover:text-white mt-8 text-sm">
                Need help? Chat with our team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
