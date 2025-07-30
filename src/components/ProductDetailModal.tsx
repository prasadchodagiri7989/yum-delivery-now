import { X, Plus, Minus, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "./WhatsAppButton";

export interface Product {
  id: number;
  name: string;
  emoji: string;
  price: string;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  ingredients: string[];
  isVeg: boolean;
  spiceLevel?: string;
  nutritionInfo?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const totalPrice = parseInt(product.price.replace('₹', '')) * quantity;

  const getWhatsAppMessage = () => {
    return `Hi! I want to order ${product.name} (${product.emoji}) x${quantity} - Total: ₹${totalPrice}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
          {/* Header */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-2xl">{product.emoji}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Title & Rating */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-3xl font-display font-bold text-foreground">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2">
                  <Badge variant={product.isVeg ? "secondary" : "destructive"}>
                    {product.isVeg ? "🌱 Veg" : "🍖 Non-Veg"}
                  </Badge>
                  {product.spiceLevel && (
                    <Badge variant="outline">
                      🌶️ {product.spiceLevel}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-muted-foreground"
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price & Quantity */}
            <div className="bg-muted/30 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-primary">
                    ₹{totalPrice}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    ({product.price} each)
                  </span>
                </div>
                
                <div className="flex items-center gap-3 bg-background rounded-xl p-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Badge variant="secondary" className="h-10 px-4 text-base">
                    {quantity}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={onClose}
                >
                  Add to Cart
                </Button>
                <WhatsAppButton
                  message={getWhatsAppMessage()}
                  className="flex-1"
                >
                  Order Now
                </WhatsAppButton>
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="outline">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Nutrition Info */}
            {product.nutritionInfo && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Nutrition Information
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {product.nutritionInfo.calories}
                    </div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {product.nutritionInfo.protein}
                    </div>
                    <div className="text-sm text-muted-foreground">Protein</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {product.nutritionInfo.carbs}
                    </div>
                    <div className="text-sm text-muted-foreground">Carbs</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {product.nutritionInfo.fat}
                    </div>
                    <div className="text-sm text-muted-foreground">Fat</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailModal;