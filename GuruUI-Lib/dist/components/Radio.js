import { jsxs as n, jsx as e } from "react/jsx-runtime";
import * as u from "react";
const d = u.forwardRef(
  ({ className: c = "", label: o, description: r, disabled: s, size: a = "md", ...i }, f) => {
    const t = a === "sm" ? "h-4 w-4" : "h-5 w-5", l = a === "sm" ? "h-2 w-2" : "h-2.5 w-2.5";
    return /* @__PURE__ */ n("label", { className: `group inline-flex items-start ${a === "sm" ? "gap-2" : "gap-3"} select-none ${s ? "opacity-60 cursor-not-allowed" : ""} ${c}`, children: [
      /* @__PURE__ */ n("span", { className: `relative inline-flex ${t} flex-none`, children: [
        /* @__PURE__ */ e(
          "input",
          {
            ref: f,
            type: "radio",
            disabled: s,
            className: `peer absolute inset-0 cursor-pointer appearance-none rounded-full border border-white/20 bg-white/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--guru-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--guru-background,#121212)] checked:border-[color:var(--guru-accent,#ffffff)] ${t}`,
            ...i
          }
        ),
        /* @__PURE__ */ e("span", { className: `pointer-events-none absolute inset-0 m-auto rounded-full bg-[color:var(--guru-accent,#ffffff)] opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ${l}` })
      ] }),
      (o || r) && /* @__PURE__ */ n("span", { className: "leading-snug", children: [
        o && /* @__PURE__ */ e("span", { className: "block text-[color:var(--guru-heading,#ffffff)]", children: o }),
        r && /* @__PURE__ */ e("span", { className: "block text-sm text-[color:var(--guru-body,#b3b3b3)]", children: r })
      ] })
    ] });
  }
);
d.displayName = "Radio";
export {
  d as Radio
};
