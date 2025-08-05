import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";
const heroImage = "/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#fdf3e5] overflow-hidden">
      {/* Top Right Tagline */}
      <p className="absolute top-6 right-6 text-sm font-semibold tracking-wider text-[#3b2d26] z-10">
        PURE. FRESH. NOURISHING. HOMEMADE WITH CARE
      </p>

      {/* Decorative Sparkle & Line */}
      <div className="hidden md:flex flex-col items-center absolute right-4 bottom-10 z-10">
        <div className="h-44 w-px bg-[#c89c34]"></div>
        <div className="text-[#c89c34] text-2xl mt-1">✧</div>
      </div>

      {/* Left-side Curved Image */}
      <div className="absolute bottom-0 left-0 w-[55%] h-[70%] z-0">
        <div
          className="w-full h-full bg-cover bg-center rounded-br-[300px] rounded-tr-[80px]"
          style={{ backgroundImage: "url('/assets/categories/biryani.jpg')" }}
        ></div>
      </div>

      {/* Right-side Logo & Tagline */}
      <div className="flex flex-col items-end justify-center h-full pr-10 pt-32 text-right relative z-10">
        <img
          src="/assets/logo.png"
          alt="Piquant Logo"
          className="w-72 max-w-full mb-2"
        />
        <p className="text-lg md:text-xl text-[#1e1e1e] font-medium">
          Relish your taste buds
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
