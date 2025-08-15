import { jsx as r } from "react/jsx-runtime";
import "react";
import { cn as e } from "../utils/cn.js";
import { Star as h } from "lucide-react";
const p = ({
  value: f,
  onChange: l,
  max: n = 5,
  size: s = "md",
  readonly: t = !1,
  className: u = ""
}) => {
  const c = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  }, m = (i) => {
    !t && l && l(i);
  }, d = () => {
  };
  return /* @__PURE__ */ r("div", { className: e("flex items-center gap-1", u), children: Array.from({ length: n }, (i, a) => {
    const o = a + 1, g = o <= f;
    return /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        onClick: () => m(o),
        onMouseEnter: () => d(),
        disabled: t,
        className: e(
          "transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 rounded",
          c[s],
          g ? "text-yellow-400 fill-current" : "text-gray-400 hover:text-yellow-300",
          t && "cursor-default"
        ),
        "aria-label": `Rate ${o} out of ${n}`,
        children: /* @__PURE__ */ r(h, { className: e("w-full h-full", c[s]) })
      },
      a
    );
  }) });
};
p.displayName = "Rating";
export {
  p as Rating
};
