import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "./WhatsAppButton";

const topSellers = [
  {
    id: 1,
    name: "Butter Chicken",
    price: "₹329",
    labels: ["Spicy", "Popular"],
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: "₹279",
    labels: ["Kids Special", "Cheese Loaded"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    price: "₹449",
    labels: ["High-Protein", "Healthy"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Paneer Tikka",
    price: "₹299",
    labels: ["Vegetarian", "Spicy"],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Caesar Salad",
    price: "₹229",
    labels: ["Healthy", "Light"],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Chicken Wings",
    price: "₹319",
    labels: ["Spicy", "High-Protein"],
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop"
  }
];

const MostOrdered = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Most Ordered This Week
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who can't get enough of these favorites
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSellers.map((item) => (
            <div 
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover 
                         transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {item.labels.map((label, index) => (
                    <Badge 
                      key={index}
                      variant={label === "Spicy" ? "destructive" : 
                              label === "Kids Special" ? "secondary" : 
                              label === "High-Protein" ? "default" : "outline"}
                      className="text-xs"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <WhatsAppButton
                  message={`Hi! I want to order ${item.name} for ${item.price}`}
                  className="w-full text-sm py-2"
                >
                  Order on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostOrdered;