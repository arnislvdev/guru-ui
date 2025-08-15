import { jsx as l } from "react/jsx-runtime";
import * as a from "react";
import { cn as S } from "../utils/cn.js";
const T = a.forwardRef(({
  items: s,
  height: e,
  itemHeight: t,
  renderItem: i,
  overscan: n = 5,
  className: d = ""
}, p) => {
  const [h, f] = a.useState(0), u = s.length * t, v = Math.ceil(e / t), o = Math.max(0, Math.floor(h / t) - n), m = Math.min(s.length - 1, o + v + n * 2), y = s.slice(o, m + 1), x = o * t, M = (r) => {
    f(r.currentTarget.scrollTop);
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: p,
      className: S("overflow-auto", d),
      style: { height: e },
      onScroll: M,
      children: /* @__PURE__ */ l("div", { style: { height: u, position: "relative" }, children: /* @__PURE__ */ l(
        "div",
        {
          style: {
            position: "absolute",
            top: x,
            left: 0,
            right: 0
          },
          children: y.map((r, c) => /* @__PURE__ */ l(
            "div",
            {
              style: { height: t },
              children: i(r, o + c)
            },
            o + c
          ))
        }
      ) })
    }
  );
});
T.displayName = "VirtualList";
export {
  T as VirtualList
};
