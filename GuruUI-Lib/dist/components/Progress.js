import { jsxs as i, jsx as r } from "react/jsx-runtime";
import "react";
import { cn as g } from "../utils/cn.js";
import { ProgressCore as s } from "../core/ProgressCore.js";
const k = ({
  value: l = 0,
  max: c = 100,
  indeterminate: o = !1,
  size: m = "md",
  variant: d = "default",
  showLabel: a = !0,
  showValue: t = !1,
  animated: f = !1,
  striped: p = !1,
  rounded: C = !0,
  height: u = "normal",
  className: P = "",
  ...v
}) => {
  const e = { size: m, variant: d, showLabel: a, showValue: t, animated: f, striped: p, rounded: C, height: u }, N = s.getAccessibilityProps(e), n = s.calculatePercentage(l, c);
  return s.getProgressColor(n), /* @__PURE__ */ i("div", { className: g(s.getContainerClasses(e), P), ...v, children: [
    (a || t) && /* @__PURE__ */ i("div", { className: s.getInfoClasses(e), children: [
      a && /* @__PURE__ */ r("div", { className: s.getLabelClasses(e), children: "Progress" }),
      t && /* @__PURE__ */ i("div", { className: s.getValueClasses(e), children: [
        l,
        "/",
        c
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: s.getTrackClasses(e), children: /* @__PURE__ */ r(
      "div",
      {
        className: g(
          s.getBarClasses(e),
          o && "w-1/3 animate-[guru-progress_1.2s_ease_infinite]"
        ),
        style: o ? void 0 : { width: `${n}%` },
        ...N
      }
    ) }),
    /* @__PURE__ */ r("style", { children: "@keyframes guru-progress { 0%{margin-left:-33%} 50%{margin-left:50%} 100%{margin-left:100%} }" })
  ] });
};
export {
  k as Progress
};
