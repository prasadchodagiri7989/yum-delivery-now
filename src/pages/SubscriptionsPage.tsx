import { Check, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const subscriptionPlans = [
  {
    id: 1,
    name: "Pure Veg Plan",
    emoji: "🌱",
    price: "₹3,999",
    duration: "Monthly",
    originalPrice: "₹4,999",
    description: "Delicious vegetarian meals prepared with fresh, organic ingredients",
    popular: false,
    features: [
      "30 meals per month",
      "Fresh vegetables daily",
      "No onion, no garlic options",
      "Jain food available",
      "Free delivery",
      "Weekend special meals"
    ],
    sampleMeals: [
      "Dal Tadka with Rice",
      "Paneer Butter Masala",
      "Vegetable Biryani",
      "Chole Bhature",
      "South Indian Thali"
    ],
    rating: 4.7,
    subscribers: 1200
  },
  {
    id: 2,
    name: "Non-Veg Delight",
    emoji: "🍗",
    price: "₹5,499",
    duration: "Monthly", 
    originalPrice: "₹6,999",
    description: "Premium non-vegetarian meals with the finest cuts of meat and seafood",
    popular: true,
    features: [
      "30 meals per month",
      "Premium chicken & mutton",
      "Fresh seafood twice a week",
      "Authentic regional recipes",
      "Free delivery",
      "Special weekend barbecue"
    ],
    sampleMeals: [
      "Butter Chicken with Naan",
      "Mutton Biryani",
      "Fish Curry with Rice",
      "Chicken Tikka Masala",
      "Tandoori Mixed Grill"
    ],
    rating: 4.9,
    subscribers: 2100
  },
  {
    id: 3,
    name: "Mixed Combo",
    emoji: "🍽️",
    price: "₹4,799",
    duration: "Monthly",
    originalPrice: "₹5,999",
    description: "Perfect balance of vegetarian and non-vegetarian meals for variety lovers",
    popular: false,
    features: [
      "30 meals per month",
      "15 veg + 15 non-veg meals",
      "Flexible meal swapping",
      "Regional cuisine rotation",
      "Free delivery",
      "Custom dietary preferences"
    ],
    sampleMeals: [
      "Alternating Veg/Non-Veg",
      "Chicken Curry & Dal",
      "Paneer + Fish Options",
      "Mixed Thali Varieties",
      "Seasonal Specials"
    ],
    rating: 4.8,
    subscribers: 1800
  }
];

const weeklyPlans = [
  {
    id: 4,
    name: "7-Day Trial",
    emoji: "🔥",
    price: "₹999",
    duration: "Weekly",
    originalPrice: "₹1,299",
    description: "Try our service with a week-long meal plan",
    popular: false,
    features: [
      "7 meals included",
      "Mix of veg & non-veg",
      "Free delivery",
      "No commitment",
      "Cancel anytime"
    ],
    sampleMeals: [
      "Different meal each day",
      "Taste our variety",
      "Perfect for beginners"
    ],
    rating: 4.6,
    subscribers: 890
  }
];

const SubscriptionsPage = () => {
  const getWhatsAppMessage = (plan: any) => {
    return `Hi! I want to subscribe to the ${plan.name} (${plan.emoji}) for ${plan.duration} at ${plan.price}. Please send me more details and confirm my subscription.`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-fresh-gradient py-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Subscription Plans
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Save more with our convenient meal subscription plans. Fresh, delicious meals delivered daily to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Monthly Plans
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect plan for your daily meal needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover 
                           transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular ⭐
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{plan.emoji}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{plan.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{plan.subscribers}+ subscribers</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">per {plan.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-full p-1">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sample Meals */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Sample Meals:</h4>
                    <div className="space-y-2">
                      {plan.sampleMeals.map((meal, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg px-3 py-2">
                          <span className="text-sm text-muted-foreground">{meal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <WhatsAppButton
                    message={getWhatsAppMessage(plan)}
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Subscribe Now
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trial Plans
            </h2>
            <p className="text-xl text-muted-foreground">
              New to our service? Start with our trial plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {weeklyPlans.map((plan) => (
              <div 
                key={plan.id}
                className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover 
                           transition-all duration-300 hover:scale-105"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{plan.emoji}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{plan.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{plan.subscribers}+ tried</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">for {plan.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-primary/10 rounded-full p-1">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <WhatsAppButton
                    message={getWhatsAppMessage(plan)}
                    className="w-full"
                    variant="secondary"
                    size="lg"
                  >
                    Start Trial
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How does the subscription work?",
                answer: "Once you subscribe, we'll deliver fresh meals to your doorstep daily according to your chosen plan. You can pause, modify, or cancel anytime by contacting us on WhatsApp."
              },
              {
                question: "Can I customize my meal preferences?",
                answer: "Absolutely! We accommodate dietary restrictions, spice preferences, and specific ingredient requests. Just let us know your preferences when subscribing."
              },
              {
                question: "What if I want to skip a day?",
                answer: "You can skip meals or modify your delivery schedule by messaging us on WhatsApp at least 24 hours in advance."
              },
              {
                question: "Is there a delivery charge?",
                answer: "All our subscription plans include free delivery within our service areas. For one-time orders, a small delivery fee may apply."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-muted/30 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionsPage;