import { jsx as t, jsxs as o } from "react/jsx-runtime";
import "react";
const s = ({ title: l, subtitle: e, cta: r, center: x = !0, className: a }) => /* @__PURE__ */ t("section", { className: `w-full bg-[color:var(--guru-background,#121212)] text-[color:var(--guru-body,#b3b3b3)] ${a ?? ""}`.trim(), children: /* @__PURE__ */ o("div", { className: x ? "mx-auto max-w-5xl px-6 py-24 text-center" : "mx-auto max-w-5xl px-6 py-24", children: [
  /* @__PURE__ */ t("h1", { className: "text-4xl font-extrabold tracking-tight text-[color:var(--guru-heading,#ffffff)] sm:text-5xl md:text-6xl", children: l }),
  e ? /* @__PURE__ */ t("p", { className: "mx-auto mt-4 max-w-2xl text-base sm:text-lg text-[color:var(--guru-body,#b3b3b3)]", children: e }) : null,
  r ? /* @__PURE__ */ t("div", { className: "mt-8 flex items-center justify-center gap-3", children: r }) : null
] }) });
export {
  s as Hero
};
