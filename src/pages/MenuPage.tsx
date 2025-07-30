import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ProductDetailModal, { Product } from "@/components/ProductDetailModal";
import biryaniImage from "@/assets/biryani.jpg";
import saladImage from "@/assets/salad.jpg";
import chickenImage from "@/assets/chicken.jpg";
import pastaImage from "@/assets/pasta.jpg";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Chicken Biryani",
    emoji: "🍗",
    price: "₹299",
    image: biryaniImage,
    description: "Aromatic basmati rice with tender chicken, cooked with traditional spices and garnished with fried onions and fresh herbs",
    category: "Main Course",
    rating: 4.8,
    reviews: 156,
    ingredients: ["Basmati Rice", "Chicken", "Onions", "Yogurt", "Garam Masala", "Saffron", "Mint", "Coriander"],
    isVeg: false,
    spiceLevel: "Medium",
    nutritionInfo: {
      calories: 550,
      protein: "28g",
      carbs: "65g",
      fat: "18g"
    }
  },
  {
    id: 2,
    name: "Fresh Garden Salad",
    emoji: "🥗",
    price: "₹199",
    image: saladImage,
    description: "Crispy mixed greens with seasonal vegetables, cherry tomatoes, and homemade dressing",
    category: "Salads",
    rating: 4.6,
    reviews: 89,
    ingredients: ["Mixed Greens", "Cherry Tomatoes", "Cucumber", "Bell Peppers", "Carrots", "Olive Oil", "Lemon"],
    isVeg: true,
    nutritionInfo: {
      calories: 180,
      protein: "8g",
      carbs: "15g",
      fat: "12g"
    }
  },
  {
    id: 3,
    name: "Grilled Chicken",
    emoji: "🍖",
    price: "₹349",
    image: chickenImage,
    description: "Perfectly grilled chicken breast marinated in herbs and spices, served with roasted vegetables",
    category: "Main Course",
    rating: 4.7,
    reviews: 203,
    ingredients: ["Chicken Breast", "Rosemary", "Thyme", "Garlic", "Olive Oil", "Black Pepper", "Sea Salt"],
    isVeg: false,
    spiceLevel: "Mild",
    nutritionInfo: {
      calories: 420,
      protein: "45g",
      carbs: "8g",
      fat: "22g"
    }
  },
  {
    id: 4,
    name: "Pasta Primavera",
    emoji: "🍝",
    price: "₹249",
    image: pastaImage,
    description: "Fresh pasta tossed with seasonal vegetables in a light cream sauce with parmesan cheese",
    category: "Italian",
    rating: 4.5,
    reviews: 142,
    ingredients: ["Penne Pasta", "Bell Peppers", "Zucchini", "Cherry Tomatoes", "Cream", "Parmesan", "Basil"],
    isVeg: true,
    nutritionInfo: {
      calories: 380,
      protein: "15g",
      carbs: "52g",
      fat: "14g"
    }
  },
  {
    id: 5,
    name: "Paneer Tikka",
    emoji: "🧀",
    price: "₹279",
    image: biryaniImage, // Placeholder
    description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions",
    category: "Appetizers",
    rating: 4.6,
    reviews: 98,
    ingredients: ["Paneer", "Bell Peppers", "Onions", "Yogurt", "Tandoori Masala", "Ginger-Garlic"],
    isVeg: true,
    spiceLevel: "Medium",
    nutritionInfo: {
      calories: 320,
      protein: "18g",
      carbs: "12g",
      fat: "24g"
    }
  },
  {
    id: 6,
    name: "Fish Curry",
    emoji: "🐟",
    price: "₹389",
    image: chickenImage, // Placeholder
    description: "Fresh fish cooked in aromatic coconut curry with traditional South Indian spices",
    category: "Main Course",
    rating: 4.9,
    reviews: 167,
    ingredients: ["Fresh Fish", "Coconut Milk", "Curry Leaves", "Mustard Seeds", "Turmeric", "Red Chili", "Tamarind"],
    isVeg: false,
    spiceLevel: "Hot",
    nutritionInfo: {
      calories: 450,
      protein: "35g",
      carbs: "15g",
      fat: "28g"
    }
  }
];

const categories = ["All", "Main Course", "Appetizers", "Salads", "Italian", "Desserts"];
const filters = ["All", "Veg", "Non-Veg", "Spicy", "Mild"];

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesFilter = selectedFilter === "All" || 
      (selectedFilter === "Veg" && product.isVeg) ||
      (selectedFilter === "Non-Veg" && !product.isVeg) ||
      (selectedFilter === "Spicy" && product.spiceLevel === "Hot") ||
      (selectedFilter === "Mild" && product.spiceLevel === "Mild");
    
    return matchesSearch && matchesCategory && matchesFilter;
  });

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-warm-gradient py-16">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Discover our delicious range of freshly prepared meals
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-muted/30 sticky top-16 z-30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Additional Filters */}
            <div className="flex gap-2">
              <Filter className="h-4 w-4 text-muted-foreground mt-2" />
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover 
                           transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => openProductModal(product)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-2xl">{product.emoji}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant={product.isVeg ? "secondary" : "destructive"}>
                      {product.isVeg ? "🌱" : "🍖"}
                    </Badge>
                  </div>
                  {product.spiceLevel && (
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-white/90">
                        🌶️ {product.spiceLevel}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-muted-foreground">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No items found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};

export default MenuPage;