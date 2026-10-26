export default function Watermark() {
  return (
    <div
      aria-hidden
      className="fixed z-0 select-none pointer-events-none"
      style={{
        bottom: "-3rem",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "clamp(6rem, 18vw, 16rem)",
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "-0.04em",
        color: "rgba(10,10,10,0.05)",
        whiteSpace: "nowrap",
      }}
    >
      Gupta
    </div>
  );
}
