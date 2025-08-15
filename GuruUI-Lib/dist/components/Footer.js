import { jsx as e, jsxs as o } from "react/jsx-runtime";
import "react";
const m = ({ left: r, right: t, className: s }) => /* @__PURE__ */ e("footer", { className: `w-full border-t border-white/10 bg-[#0f0f0f] text-[color:var(--guru-body,#b3b3b3)] ${s ?? ""}`.trim(), children: /* @__PURE__ */ o("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-6", children: [
  /* @__PURE__ */ e("div", { className: "text-sm", children: r }),
  /* @__PURE__ */ e("div", { className: "text-sm", children: t })
] }) });
export {
  m as Footer
};
