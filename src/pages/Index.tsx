import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedFoods from "@/components/FeaturedFoods";
import MostOrdered from "@/components/MostOrdered";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <FeaturedFoods />
      <MostOrdered />
      <SubscriptionPlans />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;