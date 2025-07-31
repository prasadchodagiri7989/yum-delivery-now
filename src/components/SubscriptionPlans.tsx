import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

export const plans = [
  {
    id: 2,
    name: "Monthly Lunch Box (Veg)",
    emoji: "🥗",
    color: "green-gradient",
    description: "Nutritious vegetarian lunch delivered daily for a month.",
    weeklyPrice: "₹1,100",
    monthlyPrice: "₹4,000",
    dishes: ["Rice", "Dal", "Vegetable Curry"],
    features: ["Balanced Nutrition", "Fresh Veggies", "No Preservatives", "High Fiber"],
  },
  {
    id: 4,
    name: "Monthly Full-Day Meals (Veg)",
    emoji: "🍱",
    color: "pure-gradient",
    description: "Complete subscription of breakfast, lunch, and dinner for vegetarians.",
    weeklyPrice: "₹2,300",
    monthlyPrice: "₹9,000",
    dishes: ["All 3 Meals - Veg"],
    features: ["All-Day Energy", "Hygienic Prep", "Full Day Plan", "Best Value Veg"],
    popular: true,
  },
  {
    id: 5,
    name: "Monthly Lunch Box (Non-Veg)",
    emoji: "🍗",
    color: "spicy-gradient",
    description: "Daily non-vegetarian lunch subscription with flavorful curries.",
    weeklyPrice: "₹1,400",
    monthlyPrice: "₹5,200",
    dishes: ["Rice", "Chicken Curry", "Fry Item"],
    features: ["Protein-Rich", "Fresh Meat Daily", "No Artificial Additives", "Balanced Meal"],
  }
]


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