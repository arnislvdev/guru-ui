import { jsx as r, jsxs as t } from "react/jsx-runtime";
import "react";
import { cn as s } from "../utils/cn.js";
import { TrendingUp as u, TrendingDown as f, Minus as d } from "lucide-react";
const x = ({
  title: i,
  value: c,
  description: a,
  trend: e,
  icon: l,
  className: n = ""
}) => {
  const o = () => e ? e.value > 0 ? /* @__PURE__ */ r(u, { className: "h-4 w-4 text-green-500" }) : e.value < 0 ? /* @__PURE__ */ r(f, { className: "h-4 w-4 text-red-500" }) : /* @__PURE__ */ r(d, { className: "h-4 w-4 text-gray-500" }) : null, m = () => e ? e.value > 0 ? "text-green-500" : e.value < 0 ? "text-red-500" : "text-gray-500" : "";
  return /* @__PURE__ */ r("div", { className: s("rounded-lg border border-white/10 bg-white/5 p-6", n), children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ t("div", { className: "flex-1", children: [
      /* @__PURE__ */ r("p", { className: "text-sm font-medium text-[color:var(--guru-body,#b3b3b3)]", children: i }),
      /* @__PURE__ */ r("p", { className: "mt-2 text-3xl font-bold text-[color:var(--guru-heading,#ffffff)]", children: c }),
      a && /* @__PURE__ */ r("p", { className: "mt-1 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: a }),
      e && /* @__PURE__ */ t("div", { className: "mt-2 flex items-center gap-1", children: [
        o(),
        /* @__PURE__ */ t("span", { className: s("text-sm font-medium", m()), children: [
          e.value > 0 ? "+" : "",
          e.value,
          "%"
        ] }),
        e.period && /* @__PURE__ */ r("span", { className: "text-xs text-[color:var(--guru-body,#b3b3b3)] ml-1", children: e.period })
      ] })
    ] }),
    l && /* @__PURE__ */ r("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--guru-accent,#ffffff)]/10", children: l })
  ] }) });
};
x.displayName = "Stats";
export {
  x as Stats
};
