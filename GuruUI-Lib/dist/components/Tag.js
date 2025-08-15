import { jsxs as s, jsx as t } from "react/jsx-runtime";
import "react";
import { cn as u } from "../utils/cn.js";
import { X as i } from "lucide-react";
const m = ({
  children: o,
  onRemove: r,
  variant: e = "default",
  size: f = "md",
  className: a = ""
}) => {
  const c = "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors", l = {
    default: "bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-on-accent,#0b0b0b)]",
    outline: "border border-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-accent,#ffffff)] hover:bg-[color:var(--guru-accent,#ffffff)] hover:text-[color:var(--guru-on-accent,#0b0b0b)]",
    subtle: "bg-[color:var(--guru-accent,#ffffff)]/10 text-[color:var(--guru-accent,#ffffff)]"
  }, n = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base"
  };
  return /* @__PURE__ */ s("span", { className: u(c, l[e], n[f], a), children: [
    o,
    r && /* @__PURE__ */ t(
      "button",
      {
        onClick: r,
        className: "ml-1 rounded-full p-0.5 hover:bg-black/10 transition-colors",
        "aria-label": "Remove tag",
        children: /* @__PURE__ */ t(i, { className: "h-3 w-3" })
      }
    )
  ] });
};
m.displayName = "Tag";
export {
  m as Tag
};
