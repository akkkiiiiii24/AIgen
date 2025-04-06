
import { Link } from "react-router-dom";

export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const dimensions = {
    small: "size-6",
    default: "size-8",
    large: "size-12",
  };

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className={`relative ${dimensions[size]} rounded-full overflow-hidden bg-gradient-ai p-[2px] animate-pulse-slow`}>
        <img 
          src="/lovable-uploads/6d95d520-560c-481e-a69c-b7a95fe98b53.png" 
          alt="AIgen Logo" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <span className="font-bold text-xl"><span className="ai-gradient-text">AI</span>gen</span>
    </Link>
  );
}
