import { jsxs as w, jsx as s } from "react/jsx-runtime";
import * as a from "react";
import { cn as l } from "../utils/cn.js";
const C = a.forwardRef(
  ({
    className: c = "",
    value: e,
    onValueChange: f,
    onChange: m,
    min: t = 0,
    max: u = 100,
    step: d = 1,
    showValue: i = !1,
    size: h = "md",
    disabled: p,
    ...b
  }, g) => {
    const [x, y] = a.useState(typeof e == "number" ? e : t), r = typeof e == "number" ? e : x, N = (n) => {
      const o = Number(n.target.value);
      y(o), f?.(o), m?.(n);
    }, v = h === "sm" ? "h-1.5" : "h-2";
    return /* @__PURE__ */ w("div", { className: l("w-full", c), children: [
      /* @__PURE__ */ s(
        "input",
        {
          ref: g,
          type: "range",
          min: t,
          max: u,
          step: d,
          value: r,
          onChange: N,
          disabled: p,
          className: l(
            "w-full rounded-full focus:outline-none",
            v
          ),
          style: { accentColor: "var(--guru-accent, #ffffff)" },
          ...b
        }
      ),
      i && /* @__PURE__ */ s("div", { className: "mt-2 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: r })
    ] });
  }
);
C.displayName = "Slider";
export {
  C as Slider
};
