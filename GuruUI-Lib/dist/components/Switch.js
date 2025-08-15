import { jsxs as l, jsx as s } from "react/jsx-runtime";
import * as f from "react";
import { Toggle as g } from "./Toggle.js";
const p = f.forwardRef(
  ({ checked: c, onCheckedChange: t, label: a, description: e, disabled: r, size: o = "md", className: n = "" }, m) => /* @__PURE__ */ l("label", { className: `inline-flex items-center ${o === "sm" ? "gap-2" : "gap-3"} ${r ? "opacity-60 cursor-not-allowed" : ""}`, children: [
    /* @__PURE__ */ s(g, { ref: m, pressed: c || !1, onPressedChange: t || (() => {
    }), disabled: r || !1, size: o, className: n }),
    (a || e) && /* @__PURE__ */ l("span", { className: "leading-snug", children: [
      a && /* @__PURE__ */ s("span", { className: "block text-[color:var(--guru-heading,#ffffff)]", children: a }),
      e && /* @__PURE__ */ s("span", { className: "block text-sm text-[color:var(--guru-body,#b3b3b3)]", children: e })
    ] })
  ] })
);
p.displayName = "Switch";
export {
  p as Switch
};
