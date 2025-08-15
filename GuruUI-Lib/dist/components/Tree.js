import { jsx as i, jsxs as u } from "react/jsx-runtime";
import "react";
import { cn as a } from "../utils/cn.js";
import { ChevronDown as v, ChevronRight as x, Folder as y, File as j } from "lucide-react";
const C = ({
  data: d,
  expanded: l = [],
  onExpandedChange: n,
  selected: t = [],
  onSelectionChange: o,
  multiSelect: p = !1,
  className: w = ""
}) => {
  const N = (e) => {
    if (!n) return;
    const s = l.includes(e) ? l.filter((r) => r !== e) : [...l, e];
    n(s);
  }, b = (e) => {
    if (!o) return;
    let s;
    p ? s = t.includes(e) ? t.filter((r) => r !== e) : [...t, e] : s = [e], o(s);
  }, m = (e, s = 0) => {
    const r = e.children && e.children.length > 0, h = l.includes(e.id), f = t.includes(e.id), c = e.disabled;
    return /* @__PURE__ */ u("div", { className: "select-none", children: [
      /* @__PURE__ */ u(
        "div",
        {
          className: a(
            "flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors",
            f && "bg-[color:var(--guru-accent,#ffffff)]/20",
            !c && "hover:bg-white/5",
            c && "opacity-50 cursor-not-allowed"
          ),
          style: { paddingLeft: `${s * 16 + 8}px` },
          children: [
            r && /* @__PURE__ */ i(
              "button",
              {
                onClick: () => N(e.id),
                className: "flex items-center justify-center w-4 h-4 hover:bg-white/10 rounded transition-colors",
                disabled: c,
                children: h ? /* @__PURE__ */ i(v, { className: "h-3 w-3" }) : /* @__PURE__ */ i(x, { className: "h-3 w-3" })
              }
            ),
            !r && /* @__PURE__ */ i("div", { className: "w-4" }),
            e.icon || (r ? /* @__PURE__ */ i(y, { className: "h-4 w-4 text-blue-400" }) : /* @__PURE__ */ i(j, { className: "h-4 w-4 text-gray-400" })),
            /* @__PURE__ */ i(
              "span",
              {
                className: a(
                  "flex-1 text-sm",
                  f && "font-medium"
                ),
                onClick: () => !c && b(e.id),
                children: e.label
              }
            )
          ]
        }
      ),
      r && h && /* @__PURE__ */ i("div", { children: e.children.map((g) => m(g, s + 1)) })
    ] }, e.id);
  };
  return /* @__PURE__ */ i("div", { className: a("w-full", w), children: d.map((e) => m(e)) });
};
C.displayName = "Tree";
export {
  C as Tree
};
