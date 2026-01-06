import { useEffect, useState } from "react";

interface OpeningAnimationProps {
  onComplete: () => void;
}

export function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [phase, setPhase] = useState<"ai" | "wtf" | "complete">("ai");
  const [aiScale, setAiScale] = useState(0);
  const [wtfScale, setWtfScale] = useState(0);
  const [aiOpacity, setAiOpacity] = useState(1);
  const [wtfOpacity, setWtfOpacity] = useState(1);

  useEffect(() => {
    // AI? appears and grows
    const aiGrowTimer = setTimeout(() => {
      setAiScale(1);
    }, 100);

    // AI? scrolls up
    const aiScrollTimer = setTimeout(() => {
      setAiOpacity(0);
      setPhase("wtf");
    }, 1800);

    // WTF? appears and grows
    const wtfGrowTimer = setTimeout(() => {
      setWtfScale(1);
    }, 2000);

    // WTF? scrolls up
    const wtfScrollTimer = setTimeout(() => {
      setWtfOpacity(0);
      setPhase("complete");
    }, 3700);

    // Complete animation and trigger scroll
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(aiGrowTimer);
      clearTimeout(aiScrollTimer);
      clearTimeout(wtfGrowTimer);
      clearTimeout(wtfScrollTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === "complete") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* AI? Section */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          phase === "ai" ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ opacity: aiOpacity }}
      >
        <div
          className="text-foreground font-bold transition-all duration-700 ease-out"
          style={{
            fontSize: aiScale === 0 ? "2rem" : "12rem",
            transform: `scale(${aiScale})`,
            lineHeight: 1,
          }}
        >
          AI?
        </div>
      </div>

      {/* WTF? Section */}
      {phase !== "ai" && (
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            phase === "wtf" ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ opacity: wtfOpacity }}
        >
          <div
            className="text-foreground font-bold transition-all duration-700 ease-out"
            style={{
              fontSize: wtfScale === 0 ? "2rem" : "12rem",
              transform: `scale(${wtfScale})`,
              lineHeight: 1,
            }}
          >
            WTF?
          </div>
        </div>
      )}
    </div>
  );
}

