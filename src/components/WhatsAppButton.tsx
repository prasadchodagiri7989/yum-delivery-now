import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  message = "Hi! I want to place an order", 
  className = "",
  children 
}: WhatsAppButtonProps) => {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp business number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-6 py-3 
                  transition-all duration-300 hover:scale-105 hover:shadow-hover 
                  inline-flex items-center gap-2 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "Order on WhatsApp"}
    </button>
  );
};

export default WhatsAppButton;