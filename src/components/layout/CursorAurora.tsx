"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse; // 0..1, Y flipped (canvas pixels normalized)

// --- value noise + fbm for organic grain ---
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    v += amp * vnoise(p);
    p = p * 2.13 + vec2(19.7, 7.3);
    amp *= 0.5;
  }
  return v;
}

// Weighted radial hue that orbits its own offset and slowly rotates around it,
// so each color's isobands swirl like an oil slick instead of expanding flat.
float hueW(vec2 dpx, vec2 off, float radius, float t, float phase) {
  float minDim = min(uRes.x, uRes.y);
  vec2 rel = dpx - off;
  float a = t * 0.45 + phase;
  float c = cos(a);
  float s = sin(a);
  rel = vec2(rel.x * c - rel.y * s, rel.x * s + rel.y * c);
  return smoothstep(radius, 0.0, length(rel) / minDim);
}

void main() {
  vec2 p = gl_FragCoord.xy / uRes;
  vec2 dpx = (p - uMouse) * uRes; // pixel space
  float minDim = min(uRes.x, uRes.y);
  float t = uTime;

  // per-hue Lissajous drift (the "swirl")
  vec2 oPink   = vec2(sin(t * 0.21),            cos(t * 0.13)) * 0.10 * minDim;
  vec2 oPurple = vec2(sin(t * 0.17 + 2.1),      cos(t * 0.23 + 0.6)) * 0.14 * minDim;
  vec2 oCyan   = vec2(sin(t * 0.31 + 4.2),      cos(t * 0.19)) * 0.18 * minDim;
  vec2 oGreen  = vec2(cos(t * 0.27 + 0.5),      sin(t * 0.23 + 2.0)) * 0.12 * minDim;
  // magenta core stays put

  float rPink = 0.55;
  float rPurple = 0.42 + 0.05 * sin(t); // radius wobbles as specced
  float rCyan = 0.30;
  float rGreen = 0.18;
  float rMag = 0.10;

  float wPink   = hueW(dpx, oPink,   rPink,   t, 0.0);
  float wPurple = hueW(dpx, oPurple, rPurple, t, 1.3);
  float wCyan   = hueW(dpx, oCyan,   rCyan,   t, 2.6);
  float wGreen  = hueW(dpx, oGreen,  rGreen,  t, 3.9);
  float wMag    = smoothstep(rMag, 0.0, length(dpx) / minDim);

  vec3 cPink   = vec3(0.98, 0.45, 0.75);
  vec3 cPurple = vec3(0.62, 0.48, 0.98);
  vec3 cCyan   = vec3(0.45, 0.95, 0.85);
  vec3 cGreen  = vec3(0.75, 0.98, 0.70);
  vec3 cMag    = vec3(0.95, 0.40, 0.95);

  vec3 col = cPink * wPink + cPurple * wPurple + cCyan * wCyan + cGreen * wGreen + cMag * wMag;
  float totalW = wPink + wPurple + wCyan + wGreen + wMag;

  vec3 outCol = totalW > 0.0001 ? col / totalW : vec3(0.0);
  float alpha = clamp(totalW, 0.0, 1.0);

  // organic swirl edges: the specced sin band, perturbed by fbm grain
  float dist = length(dpx) / minDim;
  float grain = fbm(p * 4.0 + vec2(t * 0.05, -t * 0.04));
  alpha *= mix(0.35, 1.0, sin(dist * 9.0 - t * 0.8 + (grain - 0.5) * 5.0) * 0.5 + 0.5);
  alpha *= mix(0.75, 1.0, fbm(p * 3.0 + vec2(-t * 0.03, t * 0.02)));

  // fade toward screen edges
  alpha *= smoothstep(1.25, 0.4, dist) * 0.85;

  // premultiplied alpha: composites over the white page, never opaque
  gl_FragColor = vec4(outCol * alpha, alpha);
}
`;

export default function CursorAurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn("shader compile failed:", gl.getShaderInfoLog(s));
      }
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn("program link failed:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // fullscreen quad
    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    const getDpr = () => Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = getDpr();
      canvas.width = Math.floor(window.innerWidth * r);
      canvas.height = Math.floor(window.innerHeight * r);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // targets & eased positions, in device pixels (Y flipped for GL)
    let tx = 0;
    let ty = 0;
    let mx = -1; // -1: uninitialized, will snap on first frame
    let my = -1;
    let idle = 0;

    const onMove = (e: PointerEvent) => {
      const r = getDpr();
      tx = e.clientX * r;
      ty = (window.innerHeight - e.clientY) * r;
      idle = 0;
    };
    window.addEventListener("pointermove", onMove);

    const start = performance.now();
    let raf = 0;

    const render = (time: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mx / canvas.width, my / canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    if (reduced) {
      // static blob at upper-center, rendered once (re-render on resize)
      const place = () => {
        tx = canvas.width * 0.5;
        ty = canvas.height * 0.65; // Y flipped: 0.35 from the top
        mx = tx;
        my = ty;
        render(0);
      };
      place();
      const onResizeStatic = () => {
        resize();
        place();
      };
      window.addEventListener("resize", onResizeStatic);
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("resize", onResizeStatic);
        window.removeEventListener("pointermove", onMove);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const t = (now - start) / 1000;

      // snap on first frame
      if (mx < 0) {
        mx = canvas.width * 0.5;
        my = canvas.height * 0.65;
        tx = mx;
        ty = my;
      }

      // no movement for 180 frames → drift on a Lissajous around upper-center
      idle++;
      if (idle > 180) {
        const cx = canvas.width * 0.5;
        const cy = canvas.height * 0.65; // 0.35·h on screen (Y flipped)
        const rx = canvas.width * 0.28;
        const ry = canvas.height * 0.16;
        tx = cx + Math.sin(t * 0.21) * Math.cos(t * 0.13) * rx;
        ty = cy + (Math.sin(t * 0.17) * 0.6 + 0.4) * ry;
      }

      // ease render position with ~0.06 lerp
      mx = mx + (tx - mx) * 0.06;
      my = my + (ty - my) * 0.06;

      render(t);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-screen w-screen"
    />
  );
}
