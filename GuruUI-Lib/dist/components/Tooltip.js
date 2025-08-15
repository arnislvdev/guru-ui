import { jsxs as p, jsx as r } from "react/jsx-runtime";
import * as f from "react";
import { cn as i } from "../utils/cn.js";
const u = ({ content: l, placement: o = "top", children: a, className: e = "" }) => {
  const t = f.useId(), s = o === "top" ? "bottom-full left-1/2 -translate-x-1/2 mb-2" : o === "bottom" ? "top-full left-1/2 -translate-x-1/2 mt-2" : o === "left" ? "right-full top-1/2 -translate-y-1/2 mr-2" : "left-full top-1/2 -translate-y-1/2 ml-2", n = o === "top" ? "origin-bottom" : o === "bottom" ? "origin-top" : o === "left" ? "origin-right" : "origin-left";
  return /* @__PURE__ */ p("span", { className: i("relative inline-flex group", e), children: [
    /* @__PURE__ */ r("span", { "aria-describedby": t, className: "inline-flex", children: a }),
    /* @__PURE__ */ r(
      "span",
      {
        id: t,
        role: "tooltip",
        className: i(
          "pointer-events-none absolute z-40 rounded-md border border-white/10 bg-[color:var(--guru-background,#121212)] px-2 py-1 text-xs text-[color:var(--guru-heading,#ffffff)] opacity-0 shadow-lg transition-all duration-150 transform scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 will-change-[transform,opacity]",
          s,
          n
        ),
        children: l
      }
    )
  ] });
};
u.displayName = "Tooltip";
export {
  u as Tooltip
};
