import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ProductDetailModal, { Product } from "@/components/ProductDetailModal";
import rawFoodData from "@/data/data";
import fallbackImage from "@/assets/biryani.jpg";

const mapDataToProducts = (data: any[]): Product[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    emoji: item.Type === "veg" ? "🌱" : "🍗",
    price: item.PriceMini
      ? `₹${item.PriceMini}`
      : item.PriceHalf
      ? `₹${item.PriceHalf}`
      : item.PriceFull
      ? `₹${item.PriceFull}`
      : "₹0",
    image: item.Image || fallbackImage,
    description: "", // Can be extended if needed
    category: item.Category,
    rating: item.rating,
    reviews: item.reviews,
    ingredients: item.ingredients
      ? typeof item.ingredients === "string"
        ? item.ingredients.split(",")
        : item.ingredients
      : [],
    isVeg: item.Type === "veg",
    spiceLevel: item.spiceLevel || null,
    nutritionInfo: {
      calories: item.calories || 0,
      protein: item.protein || "0g",
      carbs: item.carbs || "0g",
      fat: item.fat || "0g",
    },
    // NEW: Extended pricing for popup
    priceMini: item.PriceMini || null,
    priceHalf: item.PriceHalf || null,
    priceFull: item.PriceFull || null,
  }));
};

const allProducts: Product[] = mapDataToProducts(rawFoodData);
const categories = [
  "All", // Keep 'All' at the beginning
  "bhojanam-box",
  "bhojanam-subscription",
  "diet-food",
  "diet-subscription",
  "podulu",
  "rice-mix",
  "traditional-snacks",
  "pickles",
  "cakes",
  "starters",
  "biryani",
  "noodles",
  "desserts",
  "beverages",
  "tandoori",
  "rice-curry",
  "indian-breads"
];
const filters = ["All", "Veg", "Non-Veg", "Spicy", "Mild"];

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesFilter =
      selectedFilter === "All" ||
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
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Discover our delicious range of freshly prepared meals
          </p>
        </div>
      </section>

      {/* Filters */}
<section className="py-8 bg-muted/20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
    {/* Search Input */}
    <div className="relative w-full md:w-1/3">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10"
      />
    </div>

    {/* Category Dropdown */}
    <div className="w-full md:w-1/4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 rounded-md border text-sm"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </option>
        ))}
      </select>
    </div>

    {/* Filter Dropdown */}
    <div className="w-full md:w-1/4">
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="w-full p-2 rounded-md border text-sm"
      >
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  </div>
</section>


      {/* Products */}
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
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {product.description || "A delicious meal prepared fresh."}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-md font-semibold text-primary">
                      Starts from {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
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
