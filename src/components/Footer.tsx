import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              Piquant
            </h3>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Fresh, hygienic, and delicious meals delivered to your doorstep. 
              Experience the convenience of home-style cooking without the hassle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-accent-foreground/10 rounded-full p-3 hover:bg-accent-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-accent-foreground/10 rounded-full p-3 hover:bg-accent-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-accent-foreground/10 rounded-full p-3 hover:bg-accent-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Featured Foods</a></li>
              <li><a href="#subscription-plans" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Subscription Plans</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center text-accent-foreground/80">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Food Street, Vishakapatnam</span>
              </div>
              <div className="flex items-center text-accent-foreground/80">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">+91 1234567890</span>
              </div>
              <div className="flex items-center text-accent-foreground/80">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">hello@piquant.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 text-center text-accent-foreground/60">
          <p>&copy; 2025 Piquant. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;