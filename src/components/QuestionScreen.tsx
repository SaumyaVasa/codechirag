import type { Question } from "../App";
import { GradientAurora } from "./GradientAurora";
import { ProgressBar } from "./ProgressBar";
import { NavigationButtons } from "./NavigationButtons";
import imgZcXoe8Rni1 from "figma:asset/a3bdd90a74e199144866d03db0eb200179d0c1c2.png";
import svgPaths from "../imports/svg-xakdzvtlmb";

interface QuestionScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  allQuestionsAnswered: boolean;
}

export function QuestionScreen({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  allQuestionsAnswered,
}: QuestionScreenProps) {
  return (
    <div className="bg-white relative min-h-screen w-full overflow-hidden">
      <GradientAurora />
      
      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-[1542px] bg-[#f4fdff] rounded-[42px] p-8 md:p-16 relative">
          
          {/* Title */}
          <h1 className="bg-clip-text bg-gradient-to-r from-[#15313d] to-[#3cabda] text-center mb-8 md:mb-12" style={{ WebkitTextFillColor: "transparent" }}>
            <span className="block text-4xl md:text-6xl lg:text-[90px] font-['DM_Serif_Display:Italic',sans-serif] italic tracking-[-4px]">
              Test Your Knowledge
            </span>
          </h1>

          {/* Instructions */}
          <div className="bg-white rounded-[8px] px-8 py-3 mx-auto mb-8 md:mb-12 w-fit">
            <p className="font-['Manrope:Medium',sans-serif] text-[#15313d] text-base md:text-[20px] text-center whitespace-nowrap">
              {allQuestionsAnswered
                ? "All questions answered! Click next to see results"
                : "Answer all questions to see your results"}
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar
            currentQuestion={currentIndex + 1}
            totalQuestions={totalQuestions}
          />

          {/* Question */}
          <div className="max-w-[896px] mx-auto mt-12 md:mt-16">
            <div className="border border-[#96e5ff] rounded-[10px] p-6 md:p-8 mb-6 md:mb-8 bg-white/50 backdrop-blur-sm">
              <ol
                className="font-['Inter:Semi_Bold',sans-serif] text-[#15313d] text-lg md:text-[22px] text-center list-decimal list-inside"
                start={question.id}
              >
                <li>
                  <span>{question.question}</span>
                </li>
              </ol>
            </div>

            {/* Answer Options */}
            <div className="flex flex-col gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onSelectAnswer(index)}
                  className={`border rounded-[10px] p-6 md:p-8 transition-all duration-200 ${
                    selectedAnswer === index
                      ? "border-[#96e5ff] bg-[#e6f7ff] shadow-md"
                      : "border-[rgba(150,229,255,0.5)] hover:border-[#96e5ff] hover:bg-white/50"
                  }`}
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[#15313d] text-lg md:text-[22px] text-center">
                    {option}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <NavigationButtons
            onPrevious={onPrevious}
            onNext={onNext}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            isLastQuestion={currentIndex === totalQuestions - 1}
          />

          {/* Best of Luck illustration - only on first question */}
          {currentIndex === 0 && (
            <>
              <div className="absolute left-[5%] bottom-[5%] hidden lg:block">
                <img
                  alt="Cat paw"
                  className="w-[120px] h-[120px] xl:w-[173px] xl:h-[173px] object-cover"
                  src={imgZcXoe8Rni1}
                />
              </div>
              <div className="absolute left-[8%] bottom-[18%] hidden lg:block">
                <div className="relative">
                  <svg
                    className="absolute -left-2 -top-2 w-[200px] h-[100px]"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 195 92"
                  >
                    <path
                      d={svgPaths.p1e50e5f0}
                      fill="white"
                      stroke="black"
                      strokeWidth="0.818182"
                    />
                  </svg>
                  <p className="relative font-['Caveat_Brush:Regular',sans-serif] text-[#15313d] text-[28px] xl:text-[32px] text-center whitespace-nowrap px-4 py-2 rotate-[-2deg]">
                    Best of Luck !
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
