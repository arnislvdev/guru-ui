import { jsx as r, jsxs as i } from "react/jsx-runtime";
import * as x from "react";
import { cn as h } from "../utils/cn.js";
const g = ({
  items: s,
  type: c = "single",
  value: l,
  defaultValue: d = [],
  onValueChange: a,
  className: u = ""
}) => {
  const [f, p] = x.useState(d), n = l ?? f, b = (e) => {
    let t;
    const o = n.includes(e);
    c === "single" ? t = o ? [] : [e] : t = o ? n.filter((m) => m !== e) : [...n, e], p(t), a?.(t);
  };
  return /* @__PURE__ */ r("div", { className: h("divide-y divide-white/10 rounded-lg border border-white/10", u), children: s.map((e) => {
    const t = n.includes(e.id);
    return /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          "aria-expanded": t,
          className: "flex w-full items-center justify-between px-4 py-3 text-left hover:bg-white/5",
          onClick: () => b(e.id),
          children: [
            /* @__PURE__ */ r("span", { className: "font-medium text-[color:var(--guru-heading,#ffffff)]", children: e.title }),
            /* @__PURE__ */ r("span", { className: "text-[color:var(--guru-body,#b3b3b3)]", children: t ? "−" : "+" })
          ]
        }
      ),
      t && /* @__PURE__ */ r("div", { className: "px-4 pb-4 text-[color:var(--guru-body,#b3b3b3)]", children: e.content })
    ] }, e.id);
  }) });
};
g.displayName = "Accordion";
export {
  g as Accordion
};
