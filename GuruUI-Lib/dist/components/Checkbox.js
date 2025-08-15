import { jsx as a, jsxs as i } from "react/jsx-runtime";
import * as d from "react";
import { cn as t } from "../utils/cn.js";
import { CheckboxCore as e } from "../core/CheckboxCore.js";
const x = d.forwardRef(
  ({
    className: l = "",
    label: o,
    description: n,
    disabled: c,
    size: r = "md",
    variant: p = "default",
    indeterminate: m = !1,
    required: f = !1,
    ...u
  }, b) => {
    const s = { size: r, variant: p, disabled: c || !1, indeterminate: m, required: f, label: o || "", description: n || "" }, h = e.getAccessibilityProps(s);
    return /* @__PURE__ */ a("div", { className: e.getContainerClasses(), children: /* @__PURE__ */ i("label", { className: t("group inline-flex items-start select-none", l), children: [
      /* @__PURE__ */ i("span", { className: t("relative inline-flex flex-none", e.getCheckboxClasses(s)), children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: b,
            type: "checkbox",
            disabled: c,
            className: t("peer absolute inset-0 cursor-pointer appearance-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", e.getCheckboxClasses(s)),
            ...h,
            ...u
          }
        ),
        /* @__PURE__ */ a(
          "svg",
          {
            className: t("pointer-events-none absolute inset-0 m-auto translate-y-[1px] opacity-0 transition-opacity duration-200 peer-checked:opacity-100", e.getIconClasses(s)),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            children: /* @__PURE__ */ a("path", { d: "M5 13l4 4L19 7", className: "text-[color:var(--guru-on-accent,#0b0b0b)]" })
          }
        )
      ] }),
      (o || n) && /* @__PURE__ */ i("span", { className: "leading-snug", children: [
        o && /* @__PURE__ */ a("span", { className: e.getLabelClasses(s), children: o }),
        n && /* @__PURE__ */ a("span", { className: e.getDescriptionClasses(s), children: n })
      ] })
    ] }) });
  }
);
x.displayName = "Checkbox";
export {
  x as Checkbox
};
