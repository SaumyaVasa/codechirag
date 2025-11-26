import { useState, useEffect } from "react";
import type { Question } from "../App";
import { ProgressBar } from "./ProgressBar";
import imgCloud1 from "figma:asset/73a9458f5d9281d8159b188a09d18c41cc723cb7.png";

interface ResultsScreenProps {
  score: number;
  onStartAgain: () => void;
  totalQuestions: number;
  currentQuestion: Question;
}

export function ResultsScreen({
  score,
  onStartAgain,
  totalQuestions,
}: ResultsScreenProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = score / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="bg-white relative min-h-screen w-full overflow-hidden">
      {/* Cloud Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[80%] -z-10">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={imgCloud1}
        />
        <div className="absolute inset-0 bg-[rgba(236,250,255,0.4)]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-[1542px] bg-[#f4fdff] rounded-[42px] p-8 md:p-16 relative">
          
          {/* Title */}
          <h1 className="bg-clip-text bg-gradient-to-r from-[#15313d] to-[#3cabda] text-center mb-8 md:mb-12" style={{ WebkitTextFillColor: "transparent" }}>
            <span className="block text-4xl md:text-6xl lg:text-[90px] font-['DM_Serif_Display:Italic',sans-serif] italic tracking-[-4px]">
              Test Your Knowledge
            </span>
          </h1>

          {/* Keep Learning Badge */}
          <div className="bg-white rounded-[8px] px-8 py-3 mx-auto mb-8 md:mb-12 w-fit">
            <p className="font-['Manrope:Medium',sans-serif] text-[#15313d] text-base md:text-[20px] text-center whitespace-nowrap">
              Keep Learning!
            </p>
          </div>

          {/* Progress Bar - Full */}
          <ProgressBar
            currentQuestion={totalQuestions}
            totalQuestions={totalQuestions}
          />

          {/* Results Section */}
          <div className="max-w-[896px] mx-auto mt-16 md:mt-24 text-center">
            <h2 className="bg-clip-text bg-gradient-to-r from-[#15313d] to-[#3cabda] mb-8 md:mb-12" style={{ WebkitTextFillColor: "transparent" }}>
              <span className="block text-3xl md:text-5xl lg:text-[60px] font-['DM_Serif_Display:Italic',sans-serif] italic tracking-[-4px]">
                Your Final score is
              </span>
            </h2>

            {/* Animated Score */}
            <div className="flex items-center justify-center gap-2 mb-12 md:mb-16">
              <span className="text-6xl md:text-8xl lg:text-[162px] font-['DM_Serif_Display:Regular',sans-serif] text-[#266580] tracking-[-4px]">
                {animatedScore}
              </span>
              <span className="text-3xl md:text-5xl lg:text-[60px] font-['DM_Serif_Display:Italic',sans-serif] italic bg-clip-text bg-gradient-to-r from-[#15313d] to-[#3cabda]" style={{ WebkitTextFillColor: "transparent" }}>
                %
              </span>
            </div>

            {/* Start Again Button */}
            <button
              onClick={onStartAgain}
              className="border border-[rgba(150,229,255,0.5)] rounded-[10px] px-12 py-4 hover:border-[#96e5ff] hover:bg-white/50 transition-all duration-200"
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#15313d] text-lg md:text-[22px] text-center whitespace-nowrap">
                Start Again
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
