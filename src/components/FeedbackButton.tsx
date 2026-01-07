import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function FeedbackButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isExpanded) {
      navigate('/ask-us');
    } else {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 3000); // Auto-collapse after 3 seconds
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setTimeout(() => setIsExpanded(false), 500)}
        className={`
          group flex items-center gap-3 px-4 py-3 
          bg-gradient-to-r from-[#e07a5f] to-[#81b29a] 
          hover:from-[#e07a5f]/90 hover:to-[#81b29a]/90
          text-white rounded-full shadow-lg 
          hover:shadow-2xl hover:shadow-[#d4a853]/50
          transform hover:scale-110 
          transition-all duration-300 ease-out
          ${isExpanded ? 'pr-6' : 'pr-4'}
        `}
        aria-label="Share feedback or ask a question"
      >
        <MessageSquare className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        <span 
          className={`
            whitespace-nowrap font-semibold overflow-hidden transition-all duration-300
            ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}
          `}
        >
          Ask Us / Feedback
        </span>
      </button>
      
      {/* Tooltip for first-time users */}
      <div 
        className={`
          absolute bottom-full right-0 mb-2 px-4 py-2 
          bg-[#0a1628] text-[#f5f0e6] text-sm rounded-lg 
          shadow-xl border border-[#d4a853]/30
          whitespace-nowrap pointer-events-none
          transition-all duration-300
          ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
      >
        Questions? Feedback? We'd love to hear from you!
        <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#0a1628]"></div>
      </div>
    </div>
  );
}

