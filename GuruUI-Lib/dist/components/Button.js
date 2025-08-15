import { jsxs as a, jsx as i } from "react/jsx-runtime";
import * as n from "react";
import { cn as x } from "../utils/cn.js";
import { ButtonCore as l } from "../core/ButtonCore.js";
const g = n.forwardRef(
  (c, m) => {
    const {
      className: s,
      variant: p = "primary",
      size: d = "md",
      loading: t = !1,
      disabled: f = !1,
      type: u = "button",
      children: e,
      ...h
    } = c, y = !n.Children.toArray(e).some(
      (r) => typeof r == "string" || typeof r == "number"
    ), o = {
      variant: p,
      size: d,
      disabled: f || t,
      loading: t,
      iconOnly: y,
      fullWidth: s?.includes("w-full")
    }, b = l.getClasses(o), w = l.getAccessibilityProps(o);
    return /* @__PURE__ */ a(
      "button",
      {
        ref: m,
        type: u,
        className: x(b, s),
        ...w,
        ...h,
        children: [
          t && /* @__PURE__ */ a(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ i(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ i(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          e
        ]
      }
    );
  }
);
g.displayName = "Button";
export {
  g as Button
};
