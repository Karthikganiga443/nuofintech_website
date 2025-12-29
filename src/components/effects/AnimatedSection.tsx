import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "clip";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up" 
}: AnimatedSectionProps) => {
  const { ref, isRevealed } = useReveal<HTMLDivElement>({ delay });

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "reveal";
      case "fade-left":
        return "reveal";
      case "fade-right":
        return "reveal";
      case "scale":
        return "reveal";
      case "clip":
        return "clip-reveal";
      default:
        return "reveal";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;