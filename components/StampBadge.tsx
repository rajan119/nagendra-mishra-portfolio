type StampBadgeProps = {
  ringText: string;
  centerText?: string;
  className?: string;
  id?: string;
};

export default function StampBadge({
  ringText,
  centerText = "NM",
  className = "w-40 h-40",
  id = "ring",
}: StampBadgeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`animate-stamp-spin ${className}`}
      role="img"
      aria-label={ringText}
    >
      <defs>
        <path
          id={id}
          d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
        />
      </defs>
      <circle
        cx="100"
        cy="100"
        r="94"
        fill="none"
        stroke="#c9a961"
        strokeWidth="1"
        strokeDasharray="1 5"
      />
      <circle cx="100" cy="100" r="76" fill="none" stroke="#c9a961" strokeWidth="1" />
      <circle
        cx="100"
        cy="100"
        r="58"
        fill="none"
        stroke="#c9a961"
        strokeWidth="0.75"
        opacity="0.6"
      />
      <text
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="10.5"
        letterSpacing="3"
        fill="#c9a961"
      >
        <textPath href={`#${id}`} startOffset="0%">
          {ringText}
        </textPath>
      </text>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-newsreader), serif"
        fontSize="42"
        fill="#eae3d0"
      >
        {centerText}
      </text>
    </svg>
  );
}
