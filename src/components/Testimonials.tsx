import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing food quality and super fast delivery! The subscription plan saves me so much time.",
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Fresh ingredients, authentic taste, and always on time. Best cloud kitchen in the city!",
    location: "Delhi"
  },
  {
    id: 3,
    name: "Anita Patel",
    rating: 5,
    comment: "Love the variety in the mixed plan. My family enjoys every meal. Highly recommended!",
    location: "Bangalore"
  },
  {
    id: 4,
    name: "Vikram Singh",
    rating: 5,
    comment: "Hygienic packaging and delicious food. The non-veg plan is perfect for protein lovers.",
    location: "Pune"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who trust us for their daily meals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover 
                         transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;