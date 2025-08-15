import { jsx as n, jsxs as x } from "react/jsx-runtime";
import * as y from "react";
import { cn as h } from "../utils/cn.js";
import { Popover as M } from "./Popover.js";
import { Dropdown as w } from "./Dropdown.js";
function A(e, c) {
  return new Date(e, c + 1, 0).getDate();
}
function F(e, c) {
  return new Date(e, c, 1);
}
const j = ({ value: e, onChange: c, placeholder: D = "Select date", disabled: m, yearRange: i = [1970, 2100] }) => {
  const [v, u] = y.useState(!1), l = /* @__PURE__ */ new Date(), [p, g] = y.useState(e ?? l), o = p.getFullYear(), a = p.getMonth(), N = F(o, a).getDay(), S = A(o, a), C = (t) => {
    const r = new Date(o, a, t);
    c?.(r), u(!1);
  }, b = e ? e.toLocaleDateString() : "", f = Array(N).fill(null).concat(Array.from({ length: S }, (t, r) => r + 1));
  for (; f.length % 7 !== 0; ) f.push(null);
  return /* @__PURE__ */ n(M, { open: v, onOpenChange: u, align: "start", trigger: /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      disabled: m,
      className: h("w-full rounded-[var(--guru-radius,0.5rem)] border border-white/15 bg-white/5 px-3 py-2 text-left", m && "opacity-60"),
      onClick: () => u((t) => !t),
      children: /* @__PURE__ */ n("span", { className: h("text-[color:var(--guru-heading,#ffffff)]", !b && "text-[color:var(--guru-body,#b3b3b3)]"), children: b || D })
    }
  ), children: /* @__PURE__ */ x("div", { className: "w-[18rem]", children: [
    /* @__PURE__ */ x("div", { className: "flex items-center justify-between gap-2 px-2 py-2", children: [
      /* @__PURE__ */ n("button", { className: "px-2 py-1 hover:bg-white/10 rounded", onClick: () => g(new Date(o, a - 1, 1)), children: "‹" }),
      /* @__PURE__ */ n(
        w,
        {
          className: "text-sm",
          value: String(a),
          onChange: (t) => g(new Date(o, Number(t), 1)),
          options: Array.from({ length: 12 }, (t, r) => ({ value: String(r), label: new Date(2e3, r, 1).toLocaleString(void 0, { month: "long" }) }))
        }
      ),
      /* @__PURE__ */ n(
        w,
        {
          className: "text-sm",
          value: String(o),
          onChange: (t) => g(new Date(Number(t), a, 1)),
          options: Array.from({ length: i[1] - i[0] + 1 }, (t, r) => ({ value: String(i[0] + r), label: String(i[0] + r) }))
        }
      ),
      /* @__PURE__ */ n("button", { className: "px-2 py-1 hover:bg-white/10 rounded", onClick: () => g(new Date(o, a + 1, 1)), children: "›" })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid grid-cols-7 gap-1 px-2 pb-2 text-center text-xs text-[color:var(--guru-body,#b3b3b3)]", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((t) => /* @__PURE__ */ n("div", { children: t }, t)) }),
    /* @__PURE__ */ n("div", { className: "grid grid-cols-7 gap-1 px-2 pb-3", children: f.map((t, r) => {
      const s = typeof t == "number", k = s && o === l.getFullYear() && a === l.getMonth() && t === l.getDate(), d = s && e !== null && e !== void 0 && o === e.getFullYear() && a === e.getMonth() && t === e.getDate();
      return /* @__PURE__ */ n(
        "button",
        {
          disabled: !s,
          onClick: () => s && C(t),
          className: h(
            "h-8 rounded text-sm hover:bg-white/10 disabled:opacity-0",
            d && "bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-on-accent,#0b0b0b)]",
            !d && "text-[color:var(--guru-heading,#ffffff)]",
            k && !d && "ring-1 ring-[color:var(--guru-accent,#ffffff)]/50"
          ),
          children: s ? t : ""
        },
        r
      );
    }) })
  ] }) });
};
j.displayName = "DatePicker";
export {
  j as DatePicker
};
