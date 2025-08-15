import { jsx as r, jsxs as s } from "react/jsx-runtime";
import "react";
import { cn as l } from "../utils/cn.js";
const i = ({ brand: a, links: o = [], className: n = "", right: t }) => {
  const f = a || o.length > 0, c = t != null;
  return /* @__PURE__ */ r("header", { className: l("sticky top-0 z-40 border-b border-white/10 bg-[color:var(--guru-background,#121212)]/80 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--guru-background,#121212)]/60", n), children: /* @__PURE__ */ s("div", { className: l(
    "mx-auto flex h-14 max-w-7xl items-center px-4",
    f && c ? "justify-between" : "justify-center"
  ), children: [
    /* @__PURE__ */ s("div", { className: "flex items-center gap-3", children: [
      a && /* @__PURE__ */ r("div", { className: "text-[color:var(--guru-heading,#ffffff)] font-semibold", children: a }),
      /* @__PURE__ */ r("nav", { className: "hidden md:flex items-center gap-4", children: o.map((e) => /* @__PURE__ */ r("a", { href: e.href, className: "text-[color:var(--guru-body,#b3b3b3)] hover:text-[color:var(--guru-accent,#ffffff)]", children: e.label }, typeof e.label == "string" ? e.label : e.href)) })
    ] }),
    c && /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: t })
  ] }) });
};
i.displayName = "Navbar";
export {
  i as Navbar
};
