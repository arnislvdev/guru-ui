import { jsx as t, jsxs as s } from "react/jsx-runtime";
import * as b from "react";
import { cn as n } from "../utils/cn.js";
import { Popover as x } from "./Popover.js";
const v = ({
  options: o,
  value: l,
  onChange: i,
  placeholder: f = "Select...",
  disabled: d,
  className: m = "",
  align: u = "start"
}) => {
  const a = o.find((r) => r.value === l), p = a ? a.label ?? a.value : f, [h, c] = b.useState(!1);
  return /* @__PURE__ */ t(x, { open: h, onOpenChange: c, align: u, trigger: /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      disabled: d,
      className: n("inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-2 py-1 text-sm text-[color:var(--guru-heading,#ffffff)] hover:bg-white/10 disabled:opacity-60", m),
      onClick: () => c((r) => !r),
      children: [
        /* @__PURE__ */ t("span", { className: n(!a && "text-[color:var(--guru-body,#b3b3b3)]"), children: p }),
        /* @__PURE__ */ t("span", { className: "opacity-70", children: "▾" })
      ]
    }
  ), children: (r) => /* @__PURE__ */ t("div", { className: "min-w-[8rem] max-h-64 overflow-auto", children: o.map((e) => /* @__PURE__ */ s(
    "button",
    {
      className: n("flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-white/10", l === e.value ? "text-[color:var(--guru-accent,#ffffff)]" : "text-[color:var(--guru-heading,#ffffff)]"),
      onClick: () => {
        i?.(e.value), r();
      },
      children: [
        /* @__PURE__ */ t("span", { children: e.label ?? e.value }),
        l === e.value && /* @__PURE__ */ t("span", { children: "✓" })
      ]
    },
    e.value
  )) }) });
};
v.displayName = "Dropdown";
export {
  v as Dropdown
};
