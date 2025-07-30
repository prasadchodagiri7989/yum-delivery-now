import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import WhatsAppButton from "./WhatsAppButton"
import { useCart } from "@/context/CartContext"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  if (!isOpen) return null

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const getWhatsAppMessage = () => {
    const itemsList = cartItems
      .map(
        (item) =>
          `${item.name} (${item.emoji}, ${item.variant}) x${item.quantity} - ₹${item.price} each`
      )
      .join("\n")

    return `Hi! I want to order:\n\n${itemsList}\n\nTotal: ₹${totalAmount}\n\nPlease confirm my order.`
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-display font-bold text-foreground">
              Your Cart
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="bg-muted/30 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl"
                        />
                        <div className="absolute -top-1 -right-1 bg-white rounded-full p-1">
                          <span className="text-sm">{item.emoji}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="text-xs text-muted-foreground capitalize">
                          Variant: {item.variant}
                        </p>
                        <p className="text-primary font-bold">₹{item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-2 bg-background rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.variant,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <Badge variant="secondary" className="h-8 px-3">
                              {item.quantity}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.variant,
                                  item.quantity + 1
                                )
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            onClick={() => removeFromCart(item.id, item.variant)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Total:</span>
                <span className="text-2xl font-bold text-primary">₹{totalAmount}</span>
              </div>

              <WhatsAppButton
                message={getWhatsAppMessage()}
                className="w-full"
                size="lg"
              >
                Order via WhatsApp
              </WhatsAppButton>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
