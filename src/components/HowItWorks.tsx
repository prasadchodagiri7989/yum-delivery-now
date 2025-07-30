import { MousePointer, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Choose Plan",
    description: "Select from our Veg, Non-Veg, or Mixed subscription plans that suit your taste and budget"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send us a message on WhatsApp to confirm your order and delivery preferences"
  },
  {
    icon: Truck,
    title: "Get Delivered",
    description: "Enjoy fresh, hot meals delivered right to your doorstep at your preferred time"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting delicious meals is as easy as 1, 2, 3
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-secondary to-accent transform -translate-y-1/2"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <div className="bg-warm-gradient rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;