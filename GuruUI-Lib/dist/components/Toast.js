import { jsxs as u, jsx as a } from "react/jsx-runtime";
import * as c from "react";
import { cn as f } from "../utils/cn.js";
const b = c.createContext(void 0), C = () => {
  const e = c.useContext(b);
  if (!e) throw new Error("useToast must be used within ToastProvider");
  return e;
}, N = ({ children: e, max: h = 5, position: r = "top-right" }) => {
  const [d, l] = c.useState([]), v = ({ title: t, description: o, variant: s = "default", durationMs: i = 3e3 }) => {
    const n = Math.random().toString(36).slice(2);
    return l((p) => [...p, { id: n, title: t, description: o, variant: s, durationMs: i }].slice(-h)), i > 0 && setTimeout(() => m(n), i), n;
  }, m = (t) => {
    l((o) => o.filter((s) => s.id !== t));
  }, g = r === "top-right" ? "top-4 right-4" : r === "top-left" ? "top-4 left-4" : r === "bottom-right" ? "bottom-4 right-4" : "bottom-4 left-4";
  return /* @__PURE__ */ u(b.Provider, { value: { toasts: d, show: v, dismiss: m }, children: [
    e,
    /* @__PURE__ */ a("div", { className: f("pointer-events-none fixed z-[100] space-y-3", g), children: d.map((t) => /* @__PURE__ */ u(
      "div",
      {
        className: f(
          "pointer-events-auto min-w-[18rem] rounded-lg border px-4 py-3 shadow-lg animate-scale-in",
          "bg-[color:var(--guru-background,#121212)] border-white/10",
          t.variant === "success" && "border-emerald-400/40",
          t.variant === "warning" && "border-amber-400/40",
          t.variant === "danger" && "border-rose-400/40"
        ),
        children: [
          t.title && /* @__PURE__ */ a("div", { className: "font-semibold text-[color:var(--guru-heading,#ffffff)]", children: t.title }),
          t.description && /* @__PURE__ */ a("div", { className: "mt-1 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: t.description })
        ]
      },
      t.id
    )) })
  ] });
};
export {
  N as ToastProvider,
  C as useToast
};
