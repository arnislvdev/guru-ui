import { jsxs as s, jsx as r } from "react/jsx-runtime";
import "react";
const u = ({ title: e, description: l, children: t, footer: a, className: d }) => /* @__PURE__ */ s("div", { className: `rounded-[var(--guru-radius,0.5rem)] border border-white/10 bg-[#161616] p-6 shadow-lg ${d ?? ""}`.trim(), children: [
  e ? /* @__PURE__ */ r("h3", { className: "text-xl font-semibold text-[color:var(--guru-heading,#ffffff)]", children: e }) : null,
  l ? /* @__PURE__ */ r("p", { className: "mt-1 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: l }) : null,
  t ? /* @__PURE__ */ r("div", { className: "mt-4", children: t }) : null,
  a ? /* @__PURE__ */ r("div", { className: "mt-6 border-t border-white/10 pt-4", children: a }) : null
] });
export {
  u as Card
};
