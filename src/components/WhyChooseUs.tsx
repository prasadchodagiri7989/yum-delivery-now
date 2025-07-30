import { Shield, Leaf, Clock, ChefHat } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Hygienic",
    description: "Prepared in clean, sanitized kitchens with highest food safety standards"
  },
  {
    icon: Leaf,
    title: "Daily Fresh",
    description: "Fresh ingredients sourced daily for the best taste and nutrition"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable delivery within 30-45 minutes, right to your doorstep"
  },
  {
    icon: ChefHat,
    title: "Tasty Recipes",
    description: "Crafted by expert chefs with authentic flavors and perfect spicing"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional food experiences that you can trust
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105">
                <div className="bg-warm-gradient rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;