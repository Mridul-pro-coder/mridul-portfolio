"use client";

import { useState } from "react";

// Try a real avatar (avatar.png) first, fall back to the bundled SVG
// vector face, then to the inline SVG if even that is missing.
const AVATAR_SOURCES = ["/avatar.png", "/avatar.svg"];

/** Inline SVG face fallback (brown swept hair, warm skin, slight smile). */
function FaceFallback({ size = 230 }: { size?: number }) {
  return (
    <svg width={size * 0.72} height={size * 0.72} viewBox="0 0 120 120" aria-hidden>
      {/* neck */}
      <rect x="46" y="96" width="28" height="24" rx="8" fill="#E7C9A9" />
      {/* head */}
      <ellipse cx="60" cy="64" rx="34" ry="38" fill="#F1D2B0" />
      {/* hair */}
      <path
        d="M24 58 C24 30 42 18 60 18 C80 18 96 32 96 56 C96 48 90 44 84 42 C70 37 46 38 34 46 C28 50 25 53 24 58 Z"
        fill="#5B3A21"
      />
      <path d="M24 58 C26 44 38 34 60 33 C50 38 40 46 36 58 Z" fill="#6E4A2B" opacity="0.8" />
      {/* ears */}
      <ellipse cx="26" cy="66" rx="6" ry="9" fill="#E9C79F" />
      <ellipse cx="94" cy="66" rx="6" ry="9" fill="#E9C79F" />
      {/* brows */}
      <path d="M38 56 Q44 52 50 55" stroke="#4A2F1B" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M70 55 Q76 52 82 56" stroke="#4A2F1B" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* eyes */}
      <ellipse cx="45" cy="63" rx="4.6" ry="5.4" fill="#3A2A1E" />
      <ellipse cx="75" cy="63" rx="4.6" ry="5.4" fill="#3A2A1E" />
      <circle cx="46.6" cy="61" r="1.4" fill="#fff" />
      <circle cx="76.6" cy="61" r="1.4" fill="#fff" />
      {/* nose */}
      <path d="M60 68 Q58 76 60 78 Q62 76 61 68" stroke="#D9B894" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* slight smile */}
      <path d="M48 86 Q60 94 72 86" stroke="#B97E5B" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <ellipse cx="38" cy="76" rx="5" ry="3.4" fill="#F3B8A0" opacity="0.55" />
      <ellipse cx="82" cy="76" rx="5" ry="3.4" fill="#F3B8A0" opacity="0.55" />
    </svg>
  );
}

export default function Avatar({ size = 230 }: { size?: number }) {
  // index into AVATAR_SOURCES; -1 means fall back to the inline SVG face
  const [srcIdx, setSrcIdx] = useState(0);
  const src = AVATAR_SOURCES[srcIdx];

  // rounded square frame; the photo fills it edge-to-edge (object-cover)
  const radius = Math.round(size * 0.16);

  return (
    <div
      aria-hidden
      className="mx-auto shrink-0 overflow-hidden rounded-[24px] border border-line bg-white"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
      }}
    >
      {srcIdx >= AVATAR_SOURCES.length ? (
        <div className="grid h-full w-full place-items-center">
          <FaceFallback size={size} />
        </div>
      ) : (
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 30%" }}
          onError={() => setSrcIdx((i) => i + 1)}
        />
      )}
    </div>
  );
}
