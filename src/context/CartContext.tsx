import { createContext, useContext, useState, ReactNode } from 'react'

export type VariantType = 'mini' | 'half' | 'full'

export interface CartItem {
  id: number
  name: string
  emoji: string
  image: string
  variant: VariantType
  price: number
  quantity: number
}

interface CartContextProps {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void
  removeFromCart: (id: number, variant: VariantType) => void
  updateQuantity: (id: number, variant: VariantType, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (item, quantity) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.id === item.id && i.variant === item.variant
      )

      if (existingIndex !== -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }

      return [...prev, { ...item, quantity }]
    })
  }

  const removeFromCart = (id, variant) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.variant === variant)))
  }

  const updateQuantity = (id, variant, quantity) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    )
  }

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
