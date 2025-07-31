import { useCart } from "@/context/CartContext";
import WhatsAppButton from "./WhatsAppButton";

const dishes = [
  {
    id: 1,
    name: "Breakfast Box (Veg)",
    emoji: "🥦",
    price: 80,
    image: "/food-images/BojanamBox/2b045d361ca6d0b02bd8b10f0fc55b8f.jpg",
    description: "Healthy vegetarian breakfast with balanced calories and medium spice"
  },
  {
    id: 2,
    name: "Lunch Box (Veg)",
    emoji: "🥗",
    price: 145,
    image: "/food-images/BojanamBox/18bc977962547c723b955e8092997635.jpg",
    description: "Nutritious vegetarian lunch with mild spices and fresh ingredients"
  },
  {
    id: 3,
    name: "Lunch Box (Non-Veg)",
    emoji: "🍗",
    price: 200,
    image: "/food-images/BojanamBox/eefc3ca47b1f0a99eb5c20be5136dfeb.jpg",
    description: "Protein-packed non-vegetarian lunch with tender meat and mild spice"
  },
  {
    id: 4,
    name: "Lunch Box (Veg & Non-Veg)",
    emoji: "🍱",
    price: 175,
    image: "/food-images/BojanamBox/18bc977962547c723b955e8092997635.jpg",
    description: "Mixed combo of vegetarian and non-vegetarian dishes with balanced flavors"
  }
];

const FeaturedFoods = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Foods
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most popular dishes, crafted with love and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover 
                         transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-2xl">{dish.emoji}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ₹{dish.price}
                  </span>
                  <button
                    onClick={() =>
                      addToCart(
                        {
                          id: dish.id,
                          name: dish.name,
                          emoji: dish.emoji,
                          image: dish.image,
                          variant: "full", // default
                          price: dish.price
                        },
                        1
                      )
                    }
                    className="bg-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-primary/90"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;
