import React, { useEffect, useRef } from "react";

export default function AnimatedCounter({ from = 0, to = 100, duration = 1600, className = "" }) {
  const ref = useRef();
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = ts - start;
      const pct = Math.min(progress / duration, 1);
      const value = Math.floor(from + (to - from) * pct);
      if (ref.current) ref.current.textContent = value;
      if (pct < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);
  return <span ref={ref} className={className}>{from}</span>;
}