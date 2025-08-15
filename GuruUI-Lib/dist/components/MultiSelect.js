import { jsxs as c, jsx as r } from "react/jsx-runtime";
import * as i from "react";
import { cn as f } from "../utils/cn.js";
import { ChevronDown as k, Check as E } from "lucide-react";
import { Tag as O } from "./Tag.js";
const R = ({
  options: h,
  value: t,
  onChange: b,
  placeholder: w = "Select options...",
  disabled: s = !1,
  size: d = "md",
  className: x = ""
}) => {
  const [l, u] = i.useState(!1), [g, a] = i.useState(""), m = i.useRef(null), y = {
    sm: "min-h-8 px-2 py-1 text-sm",
    md: "min-h-10 px-3 py-2 text-base",
    lg: "min-h-12 px-4 py-3 text-lg"
  }, n = h.filter(
    (e) => e.label.toLowerCase().includes(g.toLowerCase()) && !t.includes(e.value)
  ), v = h.filter((e) => t.includes(e.value)), p = (e) => {
    if (s) return;
    const o = t.includes(e) ? t.filter((S) => S !== e) : [...t, e];
    b(o);
  }, N = (e) => {
    s || b(t.filter((o) => o !== e));
  }, C = (e) => {
    e.key === "Enter" && n.length > 0 ? (e.preventDefault(), p(n[0]?.value || ""), a("")) : e.key === "Escape" && (u(!1), a(""));
  };
  return i.useEffect(() => {
    const e = (o) => {
      m.current && !m.current.contains(o.target) && (u(!1), a(""));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, []), /* @__PURE__ */ c("div", { ref: m, className: f("relative", x), children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: f(
          "border border-white/10 bg-white/5 rounded-md cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-[color:var(--guru-accent,#ffffff)]/60",
          y[d],
          s && "opacity-50 cursor-not-allowed",
          l && "ring-2 ring-[color:var(--guru-accent,#ffffff)]/60"
        ),
        onClick: () => !s && u(!l),
        children: [
          /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-1 items-center", children: v.length > 0 ? v.map((e) => /* @__PURE__ */ r(
            O,
            {
              variant: "subtle",
              size: d === "lg" ? "md" : "sm",
              onRemove: () => N(e.value),
              children: e.label
            },
            e.value
          )) : /* @__PURE__ */ r("span", { className: "text-[color:var(--guru-body,#b3b3b3)]", children: w }) }),
          /* @__PURE__ */ r(
            k,
            {
              className: f(
                "absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--guru-body,#b3b3b3)] transition-transform",
                l && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    l && /* @__PURE__ */ c("div", { className: "absolute z-50 w-full mt-1 bg-[#0f0f0f] border border-white/10 rounded-md shadow-lg max-h-60 overflow-auto", children: [
      /* @__PURE__ */ r("div", { className: "p-2 border-b border-white/10", children: /* @__PURE__ */ r(
        "input",
        {
          type: "text",
          value: g,
          onChange: (e) => a(e.target.value),
          onKeyDown: C,
          placeholder: "Search options...",
          className: "w-full px-2 py-1 text-sm bg-white/5 border border-white/10 rounded text-[color:var(--guru-heading,#ffffff)] placeholder-[color:var(--guru-body,#b3b3b3)] focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60",
          autoFocus: !0
        }
      ) }),
      /* @__PURE__ */ r("div", { className: "max-h-48 overflow-auto", children: n.length > 0 ? n.map((e) => /* @__PURE__ */ c(
        "div",
        {
          className: f(
            "flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5 transition-colors",
            e.disabled && "opacity-50 cursor-not-allowed"
          ),
          onClick: () => !e.disabled && p(e.value),
          children: [
            /* @__PURE__ */ r("div", { className: "w-4 h-4 border border-white/20 rounded flex items-center justify-center", children: t.includes(e.value) && /* @__PURE__ */ r(E, { className: "h-3 w-3 text-[color:var(--guru-accent,#ffffff)]" }) }),
            /* @__PURE__ */ r("span", { className: "text-sm text-[color:var(--guru-heading,#ffffff)]", children: e.label })
          ]
        },
        e.value
      )) : /* @__PURE__ */ r("div", { className: "px-3 py-2 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: "No options found" }) })
    ] })
  ] });
};
R.displayName = "MultiSelect";
export {
  R as MultiSelect
};
