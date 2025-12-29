import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedY: number;
  originalX: number;
}

const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = [];
    const count = 25;

    for (let i = 0; i < count; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 2 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.4,
        speedY: 0.3 + Math.random() * 0.5,
        originalX: Math.random() * window.innerWidth,
      });
    }

    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setParticles(prev => prev.map(particle => {
        let newY = particle.y - particle.speedY;
        
        // Reset particle when it goes off screen
        if (newY < -20) {
          newY = window.innerHeight + 20;
        }

        // Calculate distance from mouse for repel effect
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        let newX = particle.x;
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 2;
          newX = particle.x - (dx / distance) * force;
        } else {
          // Slowly return to original X position
          newX += (particle.originalX - particle.x) * 0.01;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
        };
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;