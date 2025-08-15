import { jsxs as c, jsx as r } from "react/jsx-runtime";
import * as i from "react";
import { cn as u } from "../utils/cn.js";
const m = ({ value: o = "#ffffff", onChange: n, label: f, className: l = "" }) => {
  const [t, s] = i.useState(o);
  i.useEffect(() => s(o), [o]);
  const d = (a) => {
    const e = a.target.value;
    s(e), /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(e) && n?.(e);
  }, p = (a) => {
    const e = a.target.value;
    s(e), n?.(e);
  };
  return /* @__PURE__ */ c("div", { className: u("space-y-2", l), children: [
    f && /* @__PURE__ */ r("div", { className: "text-sm text-[color:var(--guru-body,#b3b3b3)]", children: f }),
    /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ r("input", { type: "color", value: t, onChange: p, className: "h-10 w-10 rounded border border-white/10 bg-transparent p-0" }),
      /* @__PURE__ */ r(
        "input",
        {
          type: "text",
          value: t,
          onChange: d,
          placeholder: "#ffffff",
          className: "w-28 rounded-md bg-white/5 px-3 py-2 text-sm border border-white/10 outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60"
        }
      ),
      /* @__PURE__ */ c("div", { className: "flex items-center gap-2 text-xs text-[color:var(--guru-body,#b3b3b3)]", children: [
        /* @__PURE__ */ r("span", { className: "inline-block h-5 w-5 rounded border border-white/10", style: { background: t } }),
        /* @__PURE__ */ r("span", { children: t.toUpperCase() })
      ] })
    ] })
  ] });
};
m.displayName = "ColorPicker";
export {
  m as ColorPicker
};
