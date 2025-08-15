import { jsx as f } from "react/jsx-runtime";
import "react";
import { cn as s } from "../utils/cn.js";
const b = ({
  className: e,
  children: t,
  variant: r = "accent",
  size: c = "md",
  ...o
}) => {
  const n = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-0.5 text-xs"
  }, a = {
    accent: "bg-[color:var(--guru-accent,#1e90ff)] text-white hover:opacity-95",
    outline: "border border-[color:var(--guru-accent,#1e90ff)] text-[color:var(--guru-accent,#1e90ff)]",
    subtle: "bg-[color:var(--guru-accent,#1e90ff)]/10 text-[color:var(--guru-accent,#1e90ff)]",
    success: "bg-[#10b981] text-white",
    warning: "bg-[#f59e0b] text-[#0b0b0b]",
    danger: "bg-[#ef4444] text-white"
  };
  return /* @__PURE__ */ f(
    "span",
    {
      className: s(
        "inline-flex items-center rounded-full font-medium",
        n[c],
        a[r],
        e
      ),
      ...o,
      children: t
    }
  );
};
export {
  b as Badge
};
