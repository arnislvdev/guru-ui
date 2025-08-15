import { jsxs as f, jsx as c } from "react/jsx-runtime";
import "react";
const i = ({ value: o, size: r = 44, strokeWidth: t = 4, className: n = "" }) => {
  const a = (r - t) / 2, e = 2 * Math.PI * a, s = typeof o == "number" ? e * (100 - Math.max(0, Math.min(100, o))) / 100 : e * 0.75;
  return /* @__PURE__ */ f(
    "svg",
    {
      className: n,
      width: r,
      height: r,
      viewBox: `0 0 ${r} ${r}`,
      role: "progressbar",
      "aria-valuenow": o,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      children: [
        /* @__PURE__ */ c(
          "circle",
          {
            cx: r / 2,
            cy: r / 2,
            r: a,
            stroke: "currentColor",
            strokeOpacity: 0.2,
            strokeWidth: t,
            fill: "none"
          }
        ),
        /* @__PURE__ */ c(
          "circle",
          {
            cx: r / 2,
            cy: r / 2,
            r: a,
            stroke: "currentColor",
            strokeWidth: t,
            strokeLinecap: "round",
            fill: "none",
            style: {
              strokeDasharray: e,
              strokeDashoffset: s,
              transformOrigin: "50% 50%"
            },
            className: typeof o == "number" ? "text-[color:var(--guru-accent,#ffffff)] transition-[stroke-dashoffset] duration-300" : "text-[color:var(--guru-accent,#ffffff)] animate-spin"
          }
        )
      ]
    }
  );
};
i.displayName = "ProgressCircle";
export {
  i as ProgressCircle
};
