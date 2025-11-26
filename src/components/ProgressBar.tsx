interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export function ProgressBar({
  currentQuestion,
  totalQuestions,
}: ProgressBarProps) {
  const segments = 4;
  const questionsPerSegment = totalQuestions / segments;
  
  return (
    <div className="max-w-[896px] mx-auto">
      <div className="relative h-2">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 900 8"
        >
          {/* Background segments */}
          {Array.from({ length: segments }).map((_, index) => {
            const startX = index * 225 + 4;
            const endX = startX + 216;
            const segmentThreshold = (index + 1) * questionsPerSegment;
            const isActive = currentQuestion >= segmentThreshold;
            
            return (
              <g key={index}>
                {/* Background line */}
                <line
                  x1={startX}
                  y1="4"
                  x2={endX}
                  y2="4"
                  stroke="#E6E6E6"
                  strokeWidth="2"
                />
                {/* Progress line */}
                {isActive && (
                  <line
                    x1={startX}
                    y1="4"
                    x2={endX}
                    y2="4"
                    stroke="#15313D"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                )}
                {/* Partial progress for current segment */}
                {!isActive && currentQuestion > index * questionsPerSegment && (
                  <line
                    x1={startX}
                    y1="4"
                    x2={
                      startX +
                      ((currentQuestion - index * questionsPerSegment) /
                        questionsPerSegment) *
                        216
                    }
                    y2="4"
                    stroke="#15313D"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
