import { Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import integrationsImage from "@/assets/integrations.png";

const Integrations = () => {
  const enterpriseIntegrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "SAP", category: "ERP" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Zendesk", category: "Support" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Microsoft 365", category: "Productivity" },
  ];

  const additionalIntegrations = [
    "Oracle", "NetSuite", "Dynamics 365", "Freshdesk", "Intercom", "Jira",
    "Slack", "Teams", "Asana", "Monday", "Pipedrive", "Zoho"
  ];

  const categories = [
    { name: "CRM Systems", count: 12 },
    { name: "ERP Platforms", count: 8 },
    { name: "Help Desks", count: 15 },
    { name: "Communication", count: 10 },
    { name: "Analytics", count: 7 },
  ];

  return (
    <section id="integrations" className="bg-gradient-to-b from-[#fafafa] to-white py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-[2px] uppercase text-[#eb2328] mb-4">
            ENTERPRISE INTEGRATIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#5a5a5a] mb-4 leading-tight">
            Works With Your Existing Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-[#5a5a5a]/80">
            Pre-built connectors for 50+ enterprise platforms. Custom integrations via REST API. No IT project required.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Integrations Image */}
          <div className="relative">
            <img 
              src={integrationsImage} 
              alt="Customer Sentry integrations with enterprise systems" 
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Integration List */}
          <div>
            <h3 className="text-2xl font-bold text-[#5a5a5a] mb-6">Popular Enterprise Connectors</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {enterpriseIntegrations.map((integration) => (
                <div
                  key={integration.name}
                  className="group bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-[#e0e0e0]/50"
                >
                  <div className="w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-[#fafafa] to-white flex items-center justify-center text-xl font-bold text-[#5a5a5a]/60 group-hover:text-[#eb2328] transition-colors border border-[#e0e0e0]/50">
                    {integration.name[0]}
                  </div>
                  <p className="font-medium text-[#5a5a5a]">{integration.name}</p>
                  <p className="text-xs text-[#b4b4b4]">{integration.category}</p>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <span
                  key={cat.name}
                  className="px-4 py-2 bg-white rounded-full text-sm text-[#5a5a5a]/70 shadow-sm border border-[#e0e0e0]/50 hover:border-[#eb2328]/30 transition-colors cursor-pointer"
                >
                  {cat.name} <span className="text-[#eb2328] font-medium">({cat.count})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Integrations */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {additionalIntegrations.map((name) => (
            <span
              key={name}
              className="px-4 py-2 bg-white rounded-full text-sm text-[#5a5a5a]/70 shadow-sm border border-[#e0e0e0]/50 hover:shadow-md hover:text-[#eb2328] transition-all duration-200 cursor-pointer"
            >
              {name}
            </span>
          ))}
          <span className="px-4 py-2 bg-[#eb2328]/10 rounded-full text-sm text-[#eb2328] font-medium">
            +38 more integrations
          </span>
        </div>

        {/* API Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#5a5a5a] to-[#3d3d3d] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb2328]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display mb-3">Need a Custom Integration?</h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Our REST API provides full access to all Customer Sentry capabilities. Enterprise webhooks, real-time events, and dedicated integration support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg">
                View API Documentation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Talk to Solutions Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
