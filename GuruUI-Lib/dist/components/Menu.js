import { jsx as r, jsxs as a } from "react/jsx-runtime";
import "react";
import { Popover as d } from "./Popover.js";
import { cn as i } from "../utils/cn.js";
const f = ({ trigger: l, items: n, className: t = "", align: o = "start" }) => /* @__PURE__ */ r(d, { align: o, trigger: l, children: (c) => /* @__PURE__ */ r("ul", { className: i("min-w-[12rem] divide-y divide-white/5", t), children: n.map((e, s) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ a(
  "button",
  {
    className: i(
      "flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-[color:var(--guru-heading,#ffffff)] hover:bg-white/5",
      e.disabled && "opacity-60 cursor-not-allowed"
    ),
    onClick: () => {
      e.disabled || (e.onSelect?.(), c());
    },
    children: [
      e.icon && /* @__PURE__ */ r("span", { className: "inline-flex h-4 w-4 items-center justify-center", children: e.icon }),
      /* @__PURE__ */ r("span", { children: e.label })
    ]
  }
) }, s)) }) });
f.displayName = "Menu";
export {
  f as Menu
};
