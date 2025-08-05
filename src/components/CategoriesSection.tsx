import React, { useState } from "react"

const categories = [
  { name: "Breakfast", image: "/assets/categories/salad.jpg" },
  { name: "Lunch", image: "/assets/categories/biryani.jpg" },
  { name: "Snacks", image: "/assets/categories/chicken.jpg" },
  { name: "Dinner", image: "/assets/categories/pasta.jpg" },
  { name: "Juices", image: "/assets/categories/juice.jpg" },
]

const CategoriesSection = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (image: string) => setHoveredImage(image)
  const handleMouseLeave = () => setHoveredImage(null)
  const handleMouseMove = (e: React.MouseEvent) =>
    setPosition({ x: e.clientX + 20, y: e.clientY + 20 })

  return (
    <section className="py-12 px-6 bg-muted">
      <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
      <div className="space-y-4 relative">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onMouseEnter={() => handleMouseEnter(cat.image)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="text-lg font-medium text-foreground px-4 py-3 bg-white rounded shadow cursor-pointer hover:bg-primary/10"
          >
            {cat.name}
          </div>
        ))}
        {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Preview"
            className="fixed pointer-events-none z-50 rounded-md shadow-lg"
            style={{
              top: position.y,
              left: position.x,
              width: "160px",
              height: "auto",
              transition: "opacity 0.2s ease",
            }}
          />
        )}
      </div>
    </section>
  )
}

export default CategoriesSection
