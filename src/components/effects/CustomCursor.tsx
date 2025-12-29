import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailerPosition, setTrailerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check for hoverable elements
    const handleElementHover = () => {
      const hoverable = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      
      hoverable.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Initial hover setup
    handleElementHover();
    
    // Re-run hover setup on DOM changes
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    // Trailer animation
    const animateTrailer = () => {
      trailerRef.current.x += (position.x - trailerRef.current.x) * 0.15;
      trailerRef.current.y += (position.y - trailerRef.current.y) * 0.15;
      setTrailerPosition({ x: trailerRef.current.x, y: trailerRef.current.y });
      requestAnimationFrame(animateTrailer);
    };

    const animationId = requestAnimationFrame(animateTrailer);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [position.x, position.y]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Trailer dot */}
      <div
        className="cursor-trailer"
        style={{
          left: trailerPosition.x,
          top: trailerPosition.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.6 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;