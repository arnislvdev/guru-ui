import { jsxs as m, jsx as t } from "react/jsx-runtime";
import * as d from "react";
const x = d.forwardRef(
  ({ label: o, helperText: a, error: r, className: s = "", id: i, fullWidth: c = !0, ...l }, f) => {
    const u = d.useId(), e = i ?? u, n = r ? `${e}-error` : a ? `${e}-helper` : void 0;
    return /* @__PURE__ */ m("div", { className: c ? "w-full" : "", children: [
      o ? /* @__PURE__ */ t("label", { htmlFor: e, className: "mb-1 block text-xs font-medium text-[color:var(--guru-body,#b3b3b3)]", children: o }) : null,
      /* @__PURE__ */ t(
        "textarea",
        {
          id: e,
          ref: f,
          "aria-invalid": !!r,
          "aria-describedby": n,
          className: `block w-full rounded-[var(--guru-radius,0.5rem)] border border-white/10 bg-[#0f0f0f] text-[color:var(--guru-heading,#ffffff)] placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 px-3 py-2 text-sm ${s}`.trim(),
          ...l
        }
      ),
      r ? /* @__PURE__ */ t("p", { id: `${e}-error`, className: "mt-1 text-xs text-[#ef4444]", children: r }) : a ? /* @__PURE__ */ t("p", { id: `${e}-helper`, className: "mt-1 text-xs text-white/50", children: a }) : null
    ] });
  }
);
x.displayName = "Textarea";
export {
  x as Textarea
};
