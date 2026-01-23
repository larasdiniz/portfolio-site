import { Trophy, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NasaBadge = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/nasa")}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 group"
    >
      <Trophy className="w-4 h-4" />
      <span className="font-bold">NASA 2025 Global Winners</span>
      <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
    </button>
  );
};

export default NasaBadge;