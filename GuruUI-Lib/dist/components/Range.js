import { jsxs as b, jsx as f } from "react/jsx-runtime";
import * as i from "react";
import { cn as h } from "../utils/cn.js";
const E = ({
  min: r,
  max: m,
  value: e,
  onChange: u,
  step: t = 1,
  disabled: o = !1,
  showLabels: R = !0,
  className: k = ""
}) => {
  const [l, p] = i.useState(null), d = i.useRef(null), w = m - r, g = (e[0] - r) / w * 100, v = (e[1] - r) / w * 100, D = (n) => {
    o || p(n);
  }, M = i.useCallback((n) => {
    if (!l || !d.current) return;
    const s = d.current.getBoundingClientRect(), a = Math.max(0, Math.min(100, (n.clientX - s.left) / s.width * 100)), c = Math.round(a / 100 * w + r);
    if (l === "min") {
      const x = Math.max(r, Math.min(c, e[1] - t));
      u([x, e[1]]);
    } else {
      const x = Math.min(m, Math.max(c, e[0] + t));
      u([e[0], x]);
    }
  }, [l, w, r, m, e, u, t]), y = i.useCallback(() => {
    p(null);
  }, []);
  i.useEffect(() => {
    if (l)
      return document.addEventListener("mousemove", M), document.addEventListener("mouseup", y), () => {
        document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", y);
      };
  }, [l, M, y]);
  const N = (n, s) => {
    if (o) return;
    let a;
    if (n.key === "ArrowLeft" || n.key === "ArrowDown")
      a = s === "min" ? e[0] - t : e[1] - t;
    else if (n.key === "ArrowRight" || n.key === "ArrowUp")
      a = s === "min" ? e[0] + t : e[1] + t;
    else
      return;
    if (n.preventDefault(), s === "min") {
      const c = Math.max(r, Math.min(a, e[1] - t));
      u([c, e[1]]);
    } else {
      const c = Math.min(m, Math.max(a, e[0] + t));
      u([e[0], c]);
    }
  };
  return /* @__PURE__ */ b("div", { className: h("w-full", k), children: [
    R && /* @__PURE__ */ b("div", { className: "flex justify-between text-sm text-[color:var(--guru-body,#b3b3b3)] mb-2", children: [
      /* @__PURE__ */ f("span", { children: e[0] }),
      /* @__PURE__ */ f("span", { children: e[1] })
    ] }),
    /* @__PURE__ */ f("div", { className: "relative", children: /* @__PURE__ */ b(
      "div",
      {
        ref: d,
        className: h(
          "relative h-2 bg-white/10 rounded-full cursor-pointer",
          o && "opacity-50 cursor-not-allowed"
        ),
        children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: "absolute h-full bg-[color:var(--guru-accent,#ffffff)] rounded-full",
              style: {
                left: `${g}%`,
                width: `${v - g}%`
              }
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              className: h(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[color:var(--guru-accent,#ffffff)] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 transition-transform hover:scale-110",
                o && "cursor-not-allowed"
              ),
              style: { left: `${g}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: () => D("min"),
              onKeyDown: (n) => N(n, "min"),
              disabled: o,
              "aria-label": "Minimum value",
              tabIndex: o ? -1 : 0
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              className: h(
                "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[color:var(--guru-accent,#ffffff)] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 transition-transform hover:scale-110",
                o && "cursor-not-allowed"
              ),
              style: { left: `${v}%`, transform: "translate(-50%, -50%)" },
              onMouseDown: () => D("max"),
              onKeyDown: (n) => N(n, "max"),
              disabled: o,
              "aria-label": "Maximum value",
              tabIndex: o ? -1 : 0
            }
          )
        ]
      }
    ) })
  ] });
};
E.displayName = "Range";
export {
  E as Range
};
