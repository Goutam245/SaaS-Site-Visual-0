import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "Enterprise", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "API Documentation", href: "#" },
    { name: "What's New", href: "#" },
  ];

  const resourceLinks = [
    { name: "Customer Stories", href: "#" },
    { name: "ROI Calculator", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Webinars", href: "#" },
    { name: "Community", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#", badge: "Hiring!" },
    { name: "Contact Sales", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Press", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
    { name: "GDPR", href: "#" },
    { name: "SOC 2", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-[#5a5a5a] text-white">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logoFull} alt="Customer Sentry" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/70 mb-6 text-sm leading-relaxed max-w-sm">
              The AI-powered customer intelligence platform trusted by 10,000+ B2B manufacturers to reduce churn, grow revenue, and deliver exceptional customer experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#eb2328] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/90">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/90">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/90">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="text-xs bg-[#96cd32] text-white px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase mb-5 text-white/90">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 Customer Sentry Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/50 text-sm">
            <span>Made with ❤️ for B2B manufacturers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
