import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

const topSellers = [
  {
    id: 5,
    name: "Curry Box (Veg)",
    price: 125,
    labels: ["Vegetarian", "Medium Spice"],
    image: "/food-images/BojanamBox/0e715939aedc11cc8f16be414482d60e.jpg"
  },
  {
    id: 6,
    name: "Curry Box (Non-Veg)",
    price: 180,
    labels: ["Non-Veg", "Hot"],
    image: "/food-images/BojanamBox/15f0365f4dddf1cf22d67613af8dc95d.jpg"
  },
  {
    id: 7,
    name: "Curry Box (Veg & Non-Veg)",
    price: 155,
    labels: ["Mixed", "Medium Spice"],
    image: "https://source.unsplash.com/combo-curry"
  },
  {
    id: 8,
    name: "Dinner Box (Veg)",
    price: 100,
    labels: ["Vegetarian", "Mild"],
    image: "/food-images/BojanamBox/49df111dc4962648a4cfb9aa5756b161.jpg"
  },
  {
    id: 9,
    name: "Dinner Box (Non-Veg)",
    price: 130,
    labels: ["Non-Veg", "Mild"],
    image: "/food-images/BojanamBox/81724aca51bf628586e4497f4d469a40.jpg"
  },
  {
    id: 21,
    name: "Diet Lunch Box (Veg)",
    price: 220,
    labels: ["Vegetarian", "Healthy"],
    image: "/food-images/DietFood/3731c8de8b2061eb9ebf083963c2bca6.jpg"
  }
];


const MostOrdered = () => {
  const { addToCart } = useCart();

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
                      variant={
                        label === "Spicy"
                          ? "destructive"
                          : label === "Kids Special"
                          ? "secondary"
                          : label === "High-Protein"
                          ? "default"
                          : "outline"
                      }
                      className="text-xs bg-green-500 text-white"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                  <span className="text-xl font-bold text-primary">₹{item.price}</span>
                </div>

                <button
                  onClick={() =>
                    addToCart(
                      {
                        id: item.id,
                        name: item.name,
                        emoji: "🍛", // You can customize emoji if needed
                        image: item.image,
                        variant: "full",
                        price: item.price
                      },
                      1
                    )
                  }
                  className="w-full bg-primary text-white py-2 rounded-lg text-sm hover:bg-primary/90"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostOrdered;