import { jsx as r, jsxs as f } from "react/jsx-runtime";
import "react";
import { cn as s } from "../utils/cn.js";
const o = ({ items: l, separator: n = "/", className: t = "" }) => /* @__PURE__ */ r("nav", { "aria-label": "Breadcrumb", className: s("text-sm", t), children: /* @__PURE__ */ r("ol", { className: "flex flex-wrap items-center gap-2 text-[color:var(--guru-body,#b3b3b3)]", children: l.map((e, c) => {
  const a = c === l.length - 1;
  return /* @__PURE__ */ f("li", { className: "inline-flex items-center", children: [
    e.href && !a ? /* @__PURE__ */ r("a", { href: e.href, className: "hover:text-[color:var(--guru-accent,#ffffff)]", children: e.label }) : /* @__PURE__ */ r("span", { "aria-current": a ? "page" : void 0, className: s(a && "text-[color:var(--guru-heading,#ffffff)]"), children: e.label }),
    !a && /* @__PURE__ */ r("span", { className: "mx-2 opacity-70", children: n })
  ] }, c);
}) }) });
o.displayName = "Breadcrumbs";
export {
  o as Breadcrumbs
};
