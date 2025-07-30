import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

const plans = [
  {
    id: 1,
    name: "Veg Plan",
    emoji: "🥬",
    color: "fresh-gradient",
    description: "Pure vegetarian meals with fresh vegetables and grains",
    weeklyPrice: "₹1,299",
    monthlyPrice: "₹4,999",
    dishes: [
      "Dal Tadka with Rice",
      "Paneer Butter Masala",
      "Mixed Veg Curry",
      "Roti & Salad",
      "Fresh Fruit Bowl"
    ],
    features: [
      "100% Vegetarian",
      "High Fiber & Protein",
      "Fresh Daily",
      "No Preservatives"
    ]
  },
  {
    id: 2,
    name: "Non-Veg Plan",
    emoji: "🍗",
    color: "warm-gradient",
    description: "Protein-rich meals with chicken, fish, and meat specialties",
    weeklyPrice: "₹1,699",
    monthlyPrice: "₹6,499",
    dishes: [
      "Chicken Curry with Rice",
      "Fish Fry & Vegetables",
      "Mutton Biryani",
      "Egg Curry & Roti",
      "Grilled Chicken Salad"
    ],
    features: [
      "High Protein",
      "Premium Cuts",
      "Lean & Healthy",
      "Chef's Special"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Mixed Plan",
    emoji: "🍽️",
    color: "accent",
    description: "Best of both worlds with variety of veg and non-veg options",
    weeklyPrice: "₹1,499",
    monthlyPrice: "₹5,749",
    dishes: [
      "Veg & Non-Veg Curries",
      "Biryani Varieties",
      "Mixed Grill Platter",
      "Seasonal Specials",
      "Dessert of the Day"
    ],
    features: [
      "Maximum Variety",
      "Balanced Nutrition",
      "Seasonal Menu",
      "Flexible Options"
    ]
  }
];

const SubscriptionPlans = () => {
  return (
    <section id="subscription-plans" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Subscription Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save time and money with our convenient meal plans. Fresh food delivered daily to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-card rounded-3xl p-8 shadow-card hover:shadow-hover 
                         transition-all duration-300 hover:scale-105 relative
                         ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-full bg-${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{plan.emoji}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>
              
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-4 mb-2">
                  <div>
                    <span className="text-2xl font-bold text-primary">{plan.weeklyPrice}</span>
                    <span className="text-muted-foreground text-sm">/week</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-primary">{plan.monthlyPrice}</span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Save 20% with monthly plans</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Sample Dishes:</h4>
                <ul className="space-y-2">
                  {plan.dishes.map((dish, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {dish}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Features:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <WhatsAppButton
                message={`Hi, I want to subscribe to the ${plan.name} - Monthly Plan for ${plan.monthlyPrice}`}
                className="w-full"
              >
                Subscribe Now
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;