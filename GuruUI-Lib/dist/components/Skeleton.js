import { jsx as o } from "react/jsx-runtime";
import "react";
import { cn as m } from "../utils/cn.js";
const n = ({ className: r = "", rounded: e = !0, ...t }) => /* @__PURE__ */ o(
  "div",
  {
    className: m(
      "animate-pulse bg-white/10",
      e ? "rounded-[var(--guru-radius,0.5rem)]" : "",
      r
    ),
    ...t
  }
);
export {
  n as Skeleton
};
