// src/components/Preloader.tsx
import Lottie from "lottie-react";
const animationData = "/assets/Food Carousel.json"; // Ensure correct path

const Preloader = () => (
  <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
    <Lottie animationData={animationData} loop={true} style={{ width: 200, height: 200 }} />
  </div>
);

export default Preloader;
