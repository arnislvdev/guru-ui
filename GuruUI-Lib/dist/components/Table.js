import { jsx as e, jsxs as o } from "react/jsx-runtime";
import * as p from "react";
import { cn as d } from "../utils/cn.js";
const f = p.forwardRef(({ columns: l, data: i, stickyHeader: c = !0, className: s = "", empty: h = "No data" }, n) => /* @__PURE__ */ e("div", { className: d("overflow-auto rounded-lg border border-white/10", s), children: /* @__PURE__ */ o("table", { ref: n, className: "w-full text-left text-sm min-w-[600px] md:min-w-0", role: "table", children: [
  /* @__PURE__ */ e("thead", { className: d("bg-white/5 text-[color:var(--guru-heading,#ffffff)]", c && "sticky top-0 z-10"), children: /* @__PURE__ */ e("tr", { children: l.map((r, a) => /* @__PURE__ */ e("th", { style: { width: r.width }, className: "px-4 py-2 font-medium", scope: "col", children: r.header }, a)) }) }),
  /* @__PURE__ */ o("tbody", { className: "divide-y divide-white/10 text-[color:var(--guru-body,#b3b3b3)]", children: [
    i.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: l.length, className: "px-4 py-6 text-center", role: "cell", children: h }) }),
    i.map((r, a) => /* @__PURE__ */ e("tr", { className: d("hover:bg-white/5"), children: l.map((t, m) => /* @__PURE__ */ e("td", { className: "px-4 py-2", role: "cell", children: t.render ? t.render(r[t.key], r) : String(r[t.key] ?? "") }, m)) }, a))
  ] })
] }) }));
f.displayName = "Table";
export {
  f as Table
};
