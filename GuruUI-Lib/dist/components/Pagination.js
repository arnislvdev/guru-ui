import { jsxs as m, jsx as c } from "react/jsx-runtime";
import * as x from "react";
import { cn as l } from "../utils/cn.js";
const v = ({ page: o, pageCount: e, onPageChange: f, className: b = "" }) => {
  const d = (t) => Math.max(1, Math.min(e, t)), u = x.useMemo(() => {
    const t = [], a = (r) => {
      r >= 1 && r <= e && t.push(r);
    };
    a(1);
    for (let r = o - 1; r <= o + 1; r++) a(r);
    a(e);
    const i = Array.from(new Set(t)).sort((r, h) => r - h), s = [];
    for (let r = 0; r < i.length; r++)
      r > 0 && i[r] !== i[r - 1] + 1 && s.push("…"), s.push(i[r]);
    return s;
  }, [o, e]);
  return /* @__PURE__ */ m("nav", { className: l("inline-flex items-center gap-1", b), "aria-label": "Pagination", children: [
    /* @__PURE__ */ c("button", { className: "px-3 py-1.5 rounded border border-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10 disabled:opacity-40", disabled: o <= 1, onClick: () => f(d(o - 1)), children: "Prev" }),
    u.map((t, n) => t === "…" ? /* @__PURE__ */ c("span", { className: "px-2 text-[color:var(--guru-body,#b3b3b3)]", children: "…" }, n) : /* @__PURE__ */ c("button", { className: l("px-3 py-1.5 rounded border text-sm", t === o ? "border-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-accent,#ffffff)]" : "border-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10"), onClick: () => f(t), children: t }, n)),
    /* @__PURE__ */ c("button", { className: "px-3 py-1.5 rounded border border-white/10 text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10 disabled:opacity-40", disabled: o >= e, onClick: () => f(d(o + 1)), children: "Next" })
  ] });
};
v.displayName = "Pagination";
export {
  v as Pagination
};
