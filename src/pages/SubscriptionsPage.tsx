import { Check, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const subscriptionPlans = [
  {
    id: 1,
    name: "Monthly Breakfast Box (Veg)",
    emoji: "🍽️",
    color: "sunrise-gradient",
    description: "Monthly vegetarian breakfast subscription with homemade items.",
    weeklyPrice: "₹550",
    monthlyPrice: "₹2,000",
    dishes: ["Idli", "Upma", "Chutney"],
    features: ["100% Vegetarian", "Homemade Taste", "Healthy Breakfast", "Daily Fresh Prep"],
    rating: 4.7,
    subscribers: 350,
    price: "₹2,000",
    originalPrice: "₹2,400",
    duration: "Monthly",
    sampleMeals: ["Idli + Chutney", "Upma", "Pesarattu"]
  },
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
    rating: 4.8,
    subscribers: 420,
    price: "₹4,000",
    originalPrice: "₹4,500",
    duration: "Monthly",
    sampleMeals: ["Rice + Dal", "Curry + Roti", "Sambar + Veg Fry"]
  },
  {
    id: 3,
    name: "Monthly Dinner Box (Veg)",
    emoji: "🌙",
    color: "evening-gradient",
    description: "Healthy homemade vegetarian dinner meals delivered every evening.",
    weeklyPrice: "₹850",
    monthlyPrice: "₹3,000",
    dishes: ["Chapati", "Dry Curry", "Curd Rice"],
    features: ["Low Fat", "Light Meals", "Homemade", "Daily Delivery"],
    rating: 4.6,
    subscribers: 390,
    price: "₹3,000",
    originalPrice: "₹3,400",
    duration: "Monthly",
    sampleMeals: ["Chapati + Subji", "Curd Rice", "Tomato Bath"]
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
    rating: 4.9,
    subscribers: 540,
    price: "₹9,000",
    originalPrice: "₹10,000",
    duration: "Monthly",
    sampleMeals: ["Idli + Lunch + Dinner", "Upma + Dal + Curry", "Oats + Veg + Chapati"],
    popular: true
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
    rating: 4.7,
    subscribers: 480,
    price: "₹5,200",
    originalPrice: "₹5,800",
    duration: "Monthly",
    sampleMeals: ["Chicken Curry + Rice", "Egg Curry + Fry", "Fish Fry + Rasam"]
  },
  {
    id: 6,
    name: "Monthly Dinner Box (Non-Veg)",
    emoji: "🥘",
    color: "night-gradient",
    description: "Hearty non-veg dinners delivered daily including rice and curry.",
    weeklyPrice: "₹1,050",
    monthlyPrice: "₹3,900",
    dishes: ["Rice", "Chapati", "Chicken Curry"],
    features: ["Healthy Dinner", "Protein-Focused", "Tasty Recipes", "Home Style"],
    rating: 4.5,
    subscribers: 310,
    price: "₹3,900",
    originalPrice: "₹4,400",
    duration: "Monthly",
    sampleMeals: ["Chapati + Chicken", "Egg Curry + Rice", "Veg + Chicken Mix"]
  },
  {
    id: 7,
    name: "Monthly Full-Day Meals (Non-Veg)",
    emoji: "🍛",
    color: "bold-gradient",
    description: "Includes lunch and dinner for 4 days non-veg and 3 days veg each week.",
    weeklyPrice: "₹3,000",
    monthlyPrice: "₹11,500",
    dishes: ["All 3 Meals - Mixed"],
    features: ["Mixed Diet", "High Protein", "Homestyle Meals", "Popular Choice"],
    rating: 4.9,
    subscribers: 670,
    price: "₹11,500",
    originalPrice: "₹13,000",
    duration: "Monthly",
    sampleMeals: ["Chicken + Veg Day", "Fish + Chapati", "Eggs + Curd Rice"],
    popular: true
  },
  {
    id: 8,
    name: "Diet Full-Day Plan (Veg)",
    emoji: "🥗",
    color: "healthy-gradient",
    description: "Complete veg diet plan including breakfast, lunch, and dinner.",
    weeklyPrice: "₹3,500",
    monthlyPrice: "₹13,000",
    dishes: ["Oats", "Sprouts", "Veg Lunch", "Soup", "Chapati"],
    features: ["Low Carb", "High Fiber", "Weight Control", "Balanced Diet"],
    rating: 4.6,
    subscribers: 290,
    price: "₹13,000",
    originalPrice: "₹14,500",
    duration: "Monthly",
    sampleMeals: ["Oats + Soup", "Sprouts + Roti", "Salad + Chapati"]
  },
  {
    id: 9,
    name: "Diet Full-Day Plan (Non-Veg)",
    emoji: "🍴",
    color: "fitness-gradient",
    description: "Monthly plan: 4 days non-veg, 3 days veg — all 3 meals covered.",
    weeklyPrice: "₹4,200",
    monthlyPrice: "₹16,500",
    dishes: ["Eggs", "Chicken", "Fish", "Oats", "Brown Rice"],
    features: ["High Protein", "Fitness Focused", "Fresh Lean Meat", "Weight Management"],
    rating: 4.8,
    subscribers: 420,
    price: "₹16,500",
    originalPrice: "₹18,000",
    duration: "Monthly",
    sampleMeals: ["Oats + Chicken", "Boiled Eggs + Salad", "Fish + Brown Rice"]
  },
  {
    id: 10,
    name: "Diet Fruit Bowl & Juice",
    emoji: "🍓",
    color: "fruit-gradient",
    description: "Monthly subscription of fruit bowls and healthy cold-pressed juices.",
    weeklyPrice: "₹1,300",
    monthlyPrice: "₹5,000",
    dishes: ["Apple", "Papaya", "Banana", "Mint Juice", "Carrot Juice"],
    features: ["Immunity Boost", "Fresh Daily", "Cold-Pressed", "No Sugar Added"],
    rating: 4.5,
    subscribers: 310,
    price: "₹5,000",
    originalPrice: "₹5,500",
    duration: "Monthly",
    sampleMeals: ["Apple Bowl + Juice", "Banana Bowl + Mint", "Papaya + Carrot Juice"]
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