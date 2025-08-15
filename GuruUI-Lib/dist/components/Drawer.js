import { jsxs as p, jsx as a } from "react/jsx-runtime";
import * as o from "react";
import { cn as m } from "../utils/cn.js";
const d = ({ open: s, onOpenChange: e, side: t = "right", className: n = "", children: f }) => {
  const [c, l] = o.useState(!1), u = s ?? c;
  return o.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && (l(!1), e?.(!1));
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [e]), u ? /* @__PURE__ */ p("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ a("div", { className: "absolute inset-0 bg-black/50", onClick: () => {
      l(!1), e?.(!1);
    } }),
    /* @__PURE__ */ a("div", { className: m("absolute transform bg-[color:var(--guru-background,#121212)] border border-white/10 shadow-2xl transition-transform duration-200", t === "left" ? "left-0 top-0 h-full w-80 -translate-x-full" : t === "right" ? "right-0 top-0 h-full w-80 translate-x-full" : t === "top" ? "top-0 left-0 w-full h-80 -translate-y-full" : "bottom-0 left-0 w-full h-80 translate-y-full", t === "left" || t === "right" ? "translate-x-0" : "translate-y-0", n), children: f })
  ] }) : null;
};
d.displayName = "Drawer";
export {
  d as Drawer
};
