function WaveDivider({ color = "var(--background-color)", className = "" }) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 overflow-hidden leading-none ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-full block"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,224L26.7,234.7C53.3,245,107,267,160,245.3C213.3,224,267,160,320,138.7C373.3,117,427,139,480,165.3C533.3,192,587,224,640,208C693.3,192,747,128,800,133.3C853.3,139,907,213,960,240C1013.3,267,1067,245,1120,224C1173.3,203,1227,181,1280,144C1333.3,107,1387,53,1413,26.7L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default WaveDivider;
