import { useReveal, useCountUp } from "@/hooks/useReveal";

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

const CountUpNumber = ({ 
  end, 
  suffix = "", 
  prefix = "", 
  className = "",
  duration = 2000 
}: CountUpNumberProps) => {
  const { ref, isRevealed } = useReveal<HTMLSpanElement>();
  const count = useCountUp(end, duration, isRevealed);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CountUpNumber;