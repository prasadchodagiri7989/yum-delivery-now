import WhatsAppButton from "./WhatsAppButton";
import biryaniImage from "@/assets/biryani.jpg";
import saladImage from "@/assets/salad.jpg";
import chickenImage from "@/assets/chicken.jpg";
import pastaImage from "@/assets/pasta.jpg";

const dishes = [
  {
    id: 1,
    name: "Chicken Biryani",
    emoji: "🍗",
    price: "₹299",
    image: biryaniImage,
    description: "Aromatic basmati rice with tender chicken and traditional spices"
  },
  {
    id: 2,
    name: "Fresh Garden Salad",
    emoji: "🥗",
    price: "₹199",
    image: saladImage,
    description: "Crispy vegetables with homemade dressing and fresh herbs"
  },
  {
    id: 3,
    name: "Grilled Chicken",
    emoji: "🍖",
    price: "₹349",
    image: chickenImage,
    description: "Perfectly grilled chicken with herbs and special marinade"
  },
  {
    id: 4,
    name: "Pasta Primavera",
    emoji: "🍝",
    price: "₹249",
    image: pastaImage,
    description: "Fresh pasta with seasonal vegetables in creamy sauce"
  }
];

const FeaturedFoods = () => {
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
                    {dish.price}
                  </span>
                  <WhatsAppButton
                    message={`Hi! I want to order ${dish.name} for ${dish.price}`}
                    className="text-sm px-4 py-2"
                  >
                    Order Now
                  </WhatsAppButton>
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