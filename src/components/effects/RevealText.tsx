import { useReveal } from "@/hooks/useReveal";

interface RevealTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

const RevealText = ({ children, className = "", as: Component = "p", delay = 0 }: RevealTextProps) => {
  const { ref, isRevealed } = useReveal<HTMLDivElement>({ delay });

  const words = children.split(" ");

  return (
    <div ref={ref} className="text-split-line">
      <Component className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`text-split-word ${isRevealed ? "revealed" : ""}`}
            style={{
              transitionDelay: isRevealed ? `${index * 0.05}s` : "0s",
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </Component>
    </div>
  );
};

export default RevealText;