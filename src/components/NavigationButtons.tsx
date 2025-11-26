import svgPaths from "../imports/svg-xakdzvtlmb";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

export function NavigationButtons({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-4 justify-center md:justify-end mt-8 md:mt-12 max-w-[896px] mx-auto">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`border rounded-[10px] w-[53px] h-[50px] flex items-center justify-center transition-all duration-200 ${
          canGoPrevious
            ? "border-[rgba(150,229,255,0.5)] hover:border-[#96e5ff] hover:bg-white/50"
            : "border-[rgba(150,229,255,0.05)] opacity-30 cursor-not-allowed"
        }`}
      >
        <svg
          className="w-6 h-6 rotate-180"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <mask
            height="24"
            id="mask0_prev"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_prev)">
            <path d={svgPaths.p54e7200} fill="#15313D" />
          </g>
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`border rounded-[10px] w-[53px] h-[50px] flex items-center justify-center transition-all duration-200 ${
          canGoNext
            ? "border-[rgba(150,229,255,0.5)] hover:border-[#96e5ff] hover:bg-white/50"
            : "border-[rgba(150,229,255,0.05)] opacity-30 cursor-not-allowed"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <mask
            height="24"
            id="mask0_next"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="24"
            x="0"
            y="0"
          >
            <rect fill="#D9D9D9" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_next)">
            <path d={svgPaths.p54e7200} fill="#15313D" />
          </g>
        </svg>
      </button>
    </div>
  );
}
