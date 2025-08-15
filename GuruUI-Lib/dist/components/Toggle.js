import { jsxs as r, jsx as n } from "react/jsx-runtime";
import * as f from "react";
import { cn as i } from "../utils/cn.js";
import { ToggleCore as e } from "../core/ToggleCore.js";
const k = f.forwardRef(
  ({
    className: d = "",
    pressed: C,
    onPressedChange: p,
    disabled: c,
    size: u = "md",
    variant: h = "default",
    required: N = !1,
    label: t,
    description: a,
    loading: l = !1,
    ...m
  }, b) => {
    const [T, v] = f.useState(!1), o = C ?? T, y = (j) => {
      if (c || l) return;
      const g = !o;
      v(g), p?.(g), m.onClick?.(j);
    }, s = { size: u, variant: h, disabled: c || !1, required: N, label: t || "", description: a || "", loading: l }, x = e.getAccessibilityProps(s);
    return /* @__PURE__ */ r("div", { className: e.getContainerClasses(), children: [
      /* @__PURE__ */ r(
        "button",
        {
          ref: b,
          type: "button",
          disabled: c || l,
          onClick: y,
          className: i(
            e.getToggleClasses(s),
            o && e.getToggleActiveClasses(s),
            d
          ),
          ...x,
          ...m,
          children: [
            /* @__PURE__ */ n(
              "span",
              {
                className: i(
                  e.getThumbClasses(s),
                  "absolute left-0.5 top-1/2 -translate-y-1/2 transform",
                  o && e.getThumbActiveClasses(s)
                )
              }
            ),
            l && /* @__PURE__ */ n("span", { className: i("absolute inset-0 flex items-center justify-center", e.getLoadingClasses()), children: "⏳" })
          ]
        }
      ),
      (t || a) && /* @__PURE__ */ r("div", { className: "ml-3", children: [
        t && /* @__PURE__ */ n("div", { className: e.getLabelClasses(s), children: t }),
        a && /* @__PURE__ */ n("div", { className: e.getDescriptionClasses(s), children: a })
      ] })
    ] });
  }
);
k.displayName = "Toggle";
export {
  k as Toggle
};
