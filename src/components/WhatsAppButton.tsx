import { MessageCircle } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

interface WhatsAppButtonProps extends Omit<ButtonProps, 'onClick' | 'asChild'> {
  message?: string;
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  message = "Hi! I want to place an order", 
  className = "",
  children,
  variant = "whatsapp",
  ...props
}: WhatsAppButtonProps) => {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp business number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleClick}
      {...props}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "Order on WhatsApp"}
    </Button>
  );
};

export default WhatsAppButton;