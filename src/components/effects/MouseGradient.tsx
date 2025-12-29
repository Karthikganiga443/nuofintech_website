import { useEffect, useState, useRef } from "react";

const MouseGradient = () => {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Smooth animation
    const animate = () => {
      positionRef.current.x += (targetPosition.x - positionRef.current.x) * 0.05;
      positionRef.current.y += (targetPosition.y - positionRef.current.y) * 0.05;
      setCurrentPosition({ x: positionRef.current.x, y: positionRef.current.y });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [targetPosition.x, targetPosition.y]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div
      className="mouse-gradient"
      style={{
        left: currentPosition.x - 200,
        top: currentPosition.y - 200,
      }}
    />
  );
};

export default MouseGradient;