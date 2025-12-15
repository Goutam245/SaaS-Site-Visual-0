import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Benefits from "@/components/sections/Benefits";
import Integrations from "@/components/sections/Integrations";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <FeaturesGrid />
        <HowItWorks />
        <Testimonials />
        <Benefits />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
