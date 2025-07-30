import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-lg">
          Your Daily Meals
        </h1>
        <p className="text-6xl md:text-8xl font-display font-bold mb-4 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
          One Click Away
        </p>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
          Fresh, hygienic, and delicious meals delivered to your doorstep. 
          Choose from instant orders or convenient subscription plans.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <WhatsAppButton 
            message="Hi! I want to place an instant order"
            className="text-lg px-10 py-4 min-w-[200px]"
          >
            Order Now
          </WhatsAppButton>
          <Button 
            variant="outline" 
            size="xl"
            className="text-lg min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white hover:text-accent"
            onClick={() => document.getElementById('subscription-plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Subscribe & Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;