import { jsxs as d, jsx as t } from "react/jsx-runtime";
import * as o from "react";
const w = o.forwardRef(
  ({
    label: n,
    helperText: r,
    error: s,
    leftIcon: l,
    rightIcon: i,
    size: c = "md",
    fullWidth: a = !0,
    className: u = "",
    id: f,
    ...m
  }, p) => {
    const x = o.useId(), e = f ?? x, h = s ? `${e}-error` : r ? `${e}-helper` : void 0, b = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-3.5 text-sm",
      lg: "h-12 px-4 text-base"
    }, v = l ? "pl-9" : "", g = i ? "pr-9" : "";
    return /* @__PURE__ */ d("div", { className: a ? "w-full" : "", children: [
      n ? /* @__PURE__ */ t("label", { htmlFor: e, className: "mb-1 block text-xs font-medium text-[color:var(--guru-body,#b3b3b3)]", children: n }) : null,
      /* @__PURE__ */ d("div", { className: `relative ${a ? "w-full" : ""}`, children: [
        l ? /* @__PURE__ */ t("span", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/60", children: l }) : null,
        /* @__PURE__ */ t(
          "input",
          {
            id: e,
            ref: p,
            "aria-invalid": !!s,
            "aria-describedby": h,
            className: `block w-full rounded-[var(--guru-radius,0.5rem)] border border-white/10 bg-[#0f0f0f] text-[color:var(--guru-heading,#ffffff)] placeholder-white/40 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 ${b[c]} ${v} ${g} ${u}`.trim(),
            ...m
          }
        ),
        i ? /* @__PURE__ */ t("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white/60", children: i }) : null
      ] }),
      s ? /* @__PURE__ */ t("p", { id: `${e}-error`, className: "mt-1 text-xs text-[#ef4444]", children: s }) : r ? /* @__PURE__ */ t("p", { id: `${e}-helper`, className: "mt-1 text-xs text-white/50", children: r }) : null
    ] });
  }
);
w.displayName = "Input";
export {
  w as Input
};
