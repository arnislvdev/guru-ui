import { jsx as e, jsxs as x } from "react/jsx-runtime";
import "react";
import { cn as B } from "../utils/cn.js";
const I = ({
  data: a,
  type: p,
  width: u = 400,
  height: n = 300,
  className: y = ""
}) => {
  const v = Math.max(...a.map((t) => t.value)), h = a.reduce((t, r) => t + r.value, 0), N = () => /* @__PURE__ */ e("svg", { width: u, height: n, className: "w-full h-auto", children: /* @__PURE__ */ e("g", { children: a.map((t, r) => {
    const l = t.value / v * (n - 40), c = (u - 60) / a.length - 10, o = 30 + r * ((u - 60) / a.length), s = n - 20 - l;
    return /* @__PURE__ */ x("g", { children: [
      /* @__PURE__ */ e(
        "rect",
        {
          x: o,
          y: s,
          width: c,
          height: l,
          fill: t.color || "var(--guru-accent, #ffffff)",
          className: "transition-all duration-300 hover:opacity-80"
        }
      ),
      /* @__PURE__ */ e(
        "text",
        {
          x: o + c / 2,
          y: n - 5,
          textAnchor: "middle",
          className: "text-xs fill-current text-[color:var(--guru-body,#b3b3b3)]",
          children: t.label
        }
      ),
      /* @__PURE__ */ e(
        "text",
        {
          x: o + c / 2,
          y: s - 5,
          textAnchor: "middle",
          className: "text-xs fill-current text-[color:var(--guru-heading,#ffffff)]",
          children: t.value
        }
      )
    ] }, r);
  }) }) }), $ = () => {
    const t = a.map((r, l) => {
      const c = 30 + l / (a.length - 1) * (u - 60), o = n - 20 - r.value / v * (n - 40);
      return `${c},${o}`;
    }).join(" ");
    return /* @__PURE__ */ e("svg", { width: u, height: n, className: "w-full h-auto", children: /* @__PURE__ */ x("g", { children: [
      /* @__PURE__ */ e(
        "polyline",
        {
          fill: "none",
          stroke: "var(--guru-accent, #ffffff)",
          strokeWidth: "2",
          points: t,
          className: "transition-all duration-300"
        }
      ),
      a.map((r, l) => {
        const c = 30 + l / (a.length - 1) * (u - 60), o = n - 20 - r.value / v * (n - 40);
        return /* @__PURE__ */ x("g", { children: [
          /* @__PURE__ */ e(
            "circle",
            {
              cx: c,
              cy: o,
              r: "4",
              fill: r.color || "var(--guru-accent, #ffffff)",
              className: "transition-all duration-300 hover:r-6"
            }
          ),
          /* @__PURE__ */ e(
            "text",
            {
              x: c,
              y: o - 10,
              textAnchor: "middle",
              className: "text-xs fill-current text-[color:var(--guru-heading,#ffffff)]",
              children: r.value
            }
          ),
          /* @__PURE__ */ e(
            "text",
            {
              x: c,
              y: n - 5,
              textAnchor: "middle",
              className: "text-xs fill-current text-[color:var(--guru-body,#b3b3b3)]",
              children: r.label
            }
          )
        ] }, l);
      })
    ] }) });
  }, A = () => {
    const t = u / 2, r = n / 2, l = Math.min(u, n) / 3;
    let c = 0;
    const o = a.map((s, f) => {
      const m = s.value / h * 2 * Math.PI, d = c, i = c + m, g = t + l * Math.cos(d), b = r + l * Math.sin(d), C = t + l * Math.cos(i), j = r + l * Math.sin(i), P = m > Math.PI ? 1 : 0, k = [
        `M ${t} ${r}`,
        `L ${g} ${b}`,
        `A ${l} ${l} 0 ${P} 1 ${C} ${j}`,
        "Z"
      ].join(" ");
      return c = i, { pathData: k, item: s, index: f, startAngle: d, endAngle: i };
    });
    return /* @__PURE__ */ e("svg", { width: u, height: n, className: "w-full h-auto", children: /* @__PURE__ */ x("g", { children: [
      o.map(({ pathData: s, item: f, startAngle: m, endAngle: d }) => {
        const i = (m + d) / 2, g = t + l * 0.7 * Math.cos(i), b = r + l * 0.7 * Math.sin(i);
        return /* @__PURE__ */ x("g", { children: [
          /* @__PURE__ */ e(
            "path",
            {
              d: s,
              fill: f.color || `hsl(${f.value / h * 360}, 70%, 60%)`,
              className: "transition-all duration-300 hover:opacity-80"
            }
          ),
          /* @__PURE__ */ x(
            "text",
            {
              x: g,
              y: b,
              textAnchor: "middle",
              dominantBaseline: "middle",
              className: "text-xs fill-current text-[color:var(--guru-heading,#ffffff)] font-medium",
              children: [
                Math.round(f.value / h * 100),
                "%"
              ]
            }
          )
        ] }, f.label);
      }),
      /* @__PURE__ */ e("g", { transform: `translate(0, ${n - 60})`, children: a.map((s, f) => /* @__PURE__ */ x("g", { transform: `translate(${f * 80}, 0)`, children: [
        /* @__PURE__ */ e(
          "rect",
          {
            width: "12",
            height: "12",
            fill: s.color || `hsl(${s.value / h * 360}, 70%, 60%)`,
            className: "rounded"
          }
        ),
        /* @__PURE__ */ e(
          "text",
          {
            x: "18",
            y: "9",
            className: "text-xs fill-current text-[color:var(--guru-body,#b3b3b3)]",
            children: s.label
          }
        )
      ] }, f)) })
    ] }) });
  }, M = () => {
    switch (p) {
      case "bar":
        return N();
      case "line":
        return $();
      case "pie":
        return A();
      default:
        return null;
    }
  };
  return /* @__PURE__ */ e("div", { className: B("w-full", y), children: M() });
};
I.displayName = "Chart";
export {
  I as Chart
};
