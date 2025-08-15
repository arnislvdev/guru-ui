import { jsx as r } from "react/jsx-runtime";
import "react";
import { Loader as d } from "./Loader.js";
import { cn as t } from "../utils/cn.js";
const n = ({
  open: e = !1,
  label: a = "Loading...",
  size: o = "md",
  className: i = "",
  blurBackground: l = !0
}) => e ? /* @__PURE__ */ r(
  "div",
  {
    className: t(
      "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
      l && "backdrop-blur-sm",
      i
    ),
    role: "alertdialog",
    "aria-live": "assertive",
    "aria-modal": "true",
    children: /* @__PURE__ */ r("div", { className: "rounded-lg bg-[color:var(--guru-background,#121212)]/90 px-6 py-5 shadow-xl border border-white/10", children: /* @__PURE__ */ r(d, { size: o, label: a }) })
  }
) : null;
n.displayName = "LoadingOverlay";
export {
  n as LoadingOverlay
};
