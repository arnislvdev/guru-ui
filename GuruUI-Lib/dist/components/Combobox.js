import { jsx as a, jsxs as g } from "react/jsx-runtime";
import * as o from "react";
import { cn as h } from "../utils/cn.js";
import { Popover as I } from "./Popover.js";
const M = ({
  options: i,
  value: r,
  onChange: f,
  placeholder: C = "Select...",
  disabled: y,
  className: D = "",
  clearable: S = !1,
  filter: w,
  multiple: m = !1
}) => {
  const [u, s] = o.useState(!1), [p, A] = o.useState(""), [n, b] = o.useState(-1), R = o.useRef(null), k = o.useRef(null), j = o.useCallback((e, t) => ((typeof e.label == "string" ? e.label : "") + " " + e.value).toLowerCase().includes(t.toLowerCase()), []), d = w ? i.filter((e) => w(e, p)) : i.filter((e) => j(e, p)), l = Array.isArray(r) ? i.filter((e) => r.includes(e.value)) : i.find((e) => e.value === r), N = (e) => {
    if (m) {
      const t = Array.isArray(r) ? r : [], v = t.includes(e) ? t.filter((x) => x !== e) : [...t, e];
      f?.(v);
    } else
      f?.(e);
    s(!1), A(""), b(-1);
  }, E = (e) => {
    if (!u && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      s(!0);
      return;
    }
    if (u)
      if (e.key === "ArrowDown")
        e.preventDefault(), b((t) => Math.min(t + 1, d.length - 1));
      else if (e.key === "ArrowUp")
        e.preventDefault(), b((t) => Math.max(t - 1, 0));
      else if (e.key === "Enter") {
        e.preventDefault();
        const t = d[n];
        t && N(t.value);
      } else e.key === "Escape" && s(!1);
  };
  return o.useEffect(() => {
    if (n < 0) return;
    k.current?.querySelector(`[data-index="${n}"]`)?.scrollIntoView({ block: "nearest" });
  }, [n]), /* @__PURE__ */ a(I, { open: u, onOpenChange: s, align: "start", trigger: /* @__PURE__ */ a("div", { className: h("w-full", D), children: /* @__PURE__ */ g(
    "div",
    {
      className: h("flex items-center gap-2 rounded-[var(--guru-radius,0.5rem)] border border-white/15 bg-white/5 px-3 py-2", y && "opacity-60 cursor-not-allowed"),
      onClick: () => !y && s((e) => !e),
      children: [
        /* @__PURE__ */ a(
          "input",
          {
            ref: R,
            placeholder: l ? "" : C,
            value: u ? p : Array.isArray(l) ? l.map((e) => typeof e.label == "string" ? e.label : e.value).join(", ") : l ? typeof l.label == "string" ? l.label : l.value : "",
            onChange: (e) => {
              A(e.target.value), s(!0);
            },
            onKeyDown: E,
            disabled: y,
            className: "flex-1 bg-transparent text-[color:var(--guru-heading,#ffffff)] placeholder:text-[color:var(--guru-body,#b3b3b3)] focus:outline-none"
          }
        ),
        S && l && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "text-sm text-[color:var(--guru-body,#b3b3b3)] hover:text-[color:var(--guru-heading,#ffffff)]",
            onClick: (e) => {
              e.stopPropagation(), f?.(m ? [] : "");
            },
            children: "Clear"
          }
        ),
        /* @__PURE__ */ a("span", { className: "text-[color:var(--guru-body,#b3b3b3)]", children: "▾" })
      ]
    }
  ) }), children: (e) => /* @__PURE__ */ g("div", { ref: k, className: "max-h-64 w-full overflow-auto", children: [
    d.length === 0 && /* @__PURE__ */ a("div", { className: "px-3 py-2 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: "No results" }),
    d.map((t, c) => {
      const v = c === n, x = Array.isArray(r) ? r.includes(t.value) : t.value === r;
      return /* @__PURE__ */ g(
        "button",
        {
          "data-index": c,
          onMouseEnter: () => b(c),
          onClick: () => {
            N(t.value), m || e();
          },
          className: h(
            "flex w-full items-center justify-between px-3 py-2 text-left text-sm",
            v ? "bg-white/10" : "hover:bg-white/5",
            x ? "text-[color:var(--guru-accent,#ffffff)]" : "text-[color:var(--guru-heading,#ffffff)]"
          ),
          children: [
            /* @__PURE__ */ a("span", { children: t.label ?? t.value }),
            x && /* @__PURE__ */ a("span", { children: "✓" })
          ]
        },
        t.value
      );
    })
  ] }) });
};
M.displayName = "Combobox";
export {
  M as Combobox
};
