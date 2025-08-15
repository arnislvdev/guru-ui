import { jsxs as m, jsx as i } from "react/jsx-runtime";
import * as f from "react";
const y = ({ tabs: n, value: c, defaultValue: v, onValueChange: b }) => {
  const u = c !== void 0, [h, x] = f.useState(v ?? (n[0]?.value || "")), o = u ? c : h, d = (e) => {
    u || x(e), b?.(e);
  }, s = f.useRef(null);
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ i(
      "div",
      {
        ref: s,
        role: "tablist",
        "aria-orientation": "horizontal",
        className: "flex gap-2 border-b border-white/10",
        onKeyDown: (e) => {
          const t = s.current?.querySelectorAll('[role="tab"]');
          if (!t || t.length === 0) return;
          const a = Array.from(t).findIndex((l) => l.getAttribute("data-value") === o);
          let r = a;
          if (e.key === "ArrowRight" && (r = (a + 1) % t.length), e.key === "ArrowLeft" && (r = (a - 1 + t.length) % t.length), e.key === "Home" && (r = 0), e.key === "End" && (r = t.length - 1), r !== a) {
            e.preventDefault();
            const l = t[r];
            l && (l.focus(), d(l.getAttribute("data-value") || n[r]?.value || ""));
          }
        },
        children: n.map((e) => {
          const t = e.value === o;
          return /* @__PURE__ */ i(
            "button",
            {
              role: "tab",
              "data-value": e.value,
              "aria-selected": t,
              "aria-controls": `panel-${e.value}`,
              id: `tab-${e.value}`,
              tabIndex: t ? 0 : -1,
              className: `-mb-px rounded-t-md px-4 py-2 text-sm ${t ? "border-b-2 border-[color:var(--guru-accent,#1e90ff)] text-[color:var(--guru-heading,#ffffff)]" : "text-white/60 hover:text-white"}`,
              onClick: () => d(e.value),
              children: e.label
            },
            e.value
          );
        })
      }
    ),
    n.map((e) => {
      const t = e.value === o;
      return /* @__PURE__ */ i(
        "div",
        {
          role: "tabpanel",
          id: `panel-${e.value}`,
          "aria-labelledby": `tab-${e.value}`,
          hidden: !t,
          className: "pt-4",
          children: t ? e.content : null
        },
        e.value
      );
    })
  ] });
};
export {
  y as Tabs
};
