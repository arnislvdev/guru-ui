import { jsxs as f, jsx as r, Fragment as y } from "react/jsx-runtime";
import * as s from "react";
import { cn as h } from "../utils/cn.js";
const C = ({
  children: b,
  initialIndex: m = 0,
  autoplayMs: a = null,
  showArrows: x = !0,
  showIndicators: g = !0,
  className: v = ""
}) => {
  const c = s.Children.toArray(b), [l, p] = s.useState(m), n = c.length, u = (t) => p((t + n) % n), i = () => u(l + 1), d = () => u(l - 1);
  s.useEffect(() => {
    if (!a) return;
    const t = setInterval(i, a);
    return () => clearInterval(t);
  }, [l, a]);
  const o = s.useRef(null), w = (t) => {
    t.touches[0] && (o.current = t.touches[0].clientX);
  }, N = (t) => {
    if (o.current === null || !t.touches[0]) return;
    const e = t.touches[0].clientX - o.current;
    Math.abs(e) > 50 && (e < 0 ? i() : d(), o.current = null);
  }, k = () => {
    o.current = null;
  };
  return /* @__PURE__ */ f("div", { className: h("relative overflow-hidden rounded-lg border border-white/10 bg-white/5", v), children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: "flex transition-transform duration-300",
        style: { transform: `translateX(-${l * 100}%)`, width: `${n * 100}%` },
        onTouchStart: w,
        onTouchMove: N,
        onTouchEnd: k,
        children: c.map((t, e) => /* @__PURE__ */ r("div", { className: "w-full flex-shrink-0 md:w-full", children: t }, e))
      }
    ),
    x && n > 1 && /* @__PURE__ */ f(y, { children: [
      /* @__PURE__ */ r("button", { "aria-label": "Previous", onClick: d, className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-sm text-white hover:bg-black/60", children: "‹" }),
      /* @__PURE__ */ r("button", { "aria-label": "Next", onClick: i, className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-sm text-white hover:bg-black/60", children: "›" })
    ] }),
    g && n > 1 && /* @__PURE__ */ r("div", { className: "absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2", children: c.map((t, e) => /* @__PURE__ */ r("button", { "aria-label": `Go to slide ${e + 1}`, onClick: () => u(e), className: h("h-2 w-2 rounded-full", e === l ? "bg-[color:var(--guru-accent,#ffffff)]" : "bg-white/40") }, e)) })
  ] });
};
C.displayName = "Carousel";
export {
  C as Carousel
};
