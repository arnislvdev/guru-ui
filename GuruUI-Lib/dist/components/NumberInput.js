import { jsxs as N, jsx as c } from "react/jsx-runtime";
import "react";
import { cn as a } from "../utils/cn.js";
import { Minus as v, Plus as D } from "lucide-react";
const I = ({
  value: t,
  onChange: s,
  min: r = -1 / 0,
  max: o = 1 / 0,
  step: i = 1,
  size: f = "md",
  disabled: n = !1,
  placeholder: m,
  className: p = ""
}) => {
  const w = {
    sm: "h-8 px-2 text-sm",
    md: "h-10 px-3 text-base",
    lg: "h-12 px-4 text-lg"
  }, u = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  }, l = () => {
    const e = Math.min(t + i, o);
    e !== t && s(e);
  }, b = () => {
    const e = Math.max(t - i, r);
    e !== t && s(e);
  }, g = (e) => {
    const d = e.target.value;
    if (d === "") {
      s(0);
      return;
    }
    const h = parseFloat(d);
    if (!isNaN(h)) {
      const x = Math.max(r, Math.min(h, o));
      s(x);
    }
  }, y = (e) => {
    e.key === "ArrowUp" ? (e.preventDefault(), l()) : e.key === "ArrowDown" && (e.preventDefault(), b());
  };
  return /* @__PURE__ */ N("div", { className: a("flex items-center", p), children: [
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        onClick: b,
        disabled: n || t <= r,
        className: a(
          "flex items-center justify-center border border-r-0 border-white/10 bg-white/5 text-[color:var(--guru-body,#b3b3b3)] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 rounded-l-md",
          u[f],
          (n || t <= r) && "opacity-50 cursor-not-allowed"
        ),
        "aria-label": "Decrease value",
        children: /* @__PURE__ */ c(v, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ c(
      "input",
      {
        type: "number",
        value: t,
        onChange: g,
        onKeyDown: y,
        min: r,
        max: o,
        step: i,
        disabled: n,
        placeholder: m,
        className: a(
          "border border-white/10 bg-white/5 text-[color:var(--guru-heading,#ffffff)] placeholder-[color:var(--guru-body,#b3b3b3)] focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 transition-shadow",
          w[f],
          "text-center"
        )
      }
    ),
    /* @__PURE__ */ c(
      "button",
      {
        type: "button",
        onClick: l,
        disabled: n || t >= o,
        className: a(
          "flex items-center justify-center border border-l-0 border-white/10 bg-white/5 text-[color:var(--guru-body,#b3b3b3)] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60 rounded-r-md",
          u[f],
          (n || t >= o) && "opacity-50 cursor-not-allowed"
        ),
        "aria-label": "Increase value",
        children: /* @__PURE__ */ c(D, { className: "h-4 w-4" })
      }
    )
  ] });
};
I.displayName = "NumberInput";
export {
  I as NumberInput
};
