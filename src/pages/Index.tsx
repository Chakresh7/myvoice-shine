import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ChaiSection from "@/components/ChaiSection";
import WhoSection from "@/components/WhoSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <div className="noise-overlay" />
    <Navbar />
    <HeroSection />
    <SocialProofBar />
    <ProblemSection />
    <SolutionSection />
    <ChaiSection />
    <WhoSection />
    <TestimonialSection />
    <PricingSection />
    <Footer />
  </>
);

export default Index;
