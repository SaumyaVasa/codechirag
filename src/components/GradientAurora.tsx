export function GradientAurora() {
  return (
    <div className="absolute inset-0 -z-10">
      <svg
        className="w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 1080"
      >
        <rect
          fill="url(#paint0_linear_aurora)"
          height="100%"
          width="100%"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_aurora"
            x1="0"
            x2="1908.69"
            y1="0"
            y2="1099.64"
          >
            <stop stopColor="#BECFEE" />
            <stop offset="0.5" stopColor="#71C6E2" />
            <stop offset="0.75" stopColor="#D9F4FA" />
            <stop offset="1" stopColor="#BECFEE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
