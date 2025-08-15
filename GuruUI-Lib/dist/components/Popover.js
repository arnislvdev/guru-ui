import { jsxs as g, jsx as c } from "react/jsx-runtime";
import * as l from "react";
import { cn as i } from "../utils/cn.js";
const w = ({
  open: u,
  onOpenChange: t,
  trigger: f,
  children: n,
  className: d = "",
  align: a = "center",
  animated: m = !0
}) => {
  const [v, o] = l.useState(!1), r = u ?? v, s = l.useRef(null);
  l.useEffect(() => {
    if (!r) return;
    const e = (b) => {
      s.current && (s.current.contains(b.target) || (o(!1), t?.(!1)));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [r, t]);
  const p = () => {
    const e = !r;
    o(e), t?.(e);
  }, x = a === "start" ? "left-0" : a === "end" ? "right-0" : "left-1/2 -translate-x-1/2";
  return /* @__PURE__ */ g("div", { className: i("relative inline-block", d), ref: s, children: [
    /* @__PURE__ */ c("div", { onClick: p, className: "inline-flex cursor-pointer select-none", children: f }),
    r && /* @__PURE__ */ c(
      "div",
      {
        className: i(
          "absolute z-50 mt-2 min-w-[12rem] rounded-lg border border-white/10 bg-[color:var(--guru-background,#121212)] p-3 shadow-xl",
          x,
          m && "animate-scale-in"
        ),
        children: typeof n == "function" ? n(() => {
          o(!1), t?.(!1);
        }) : n
      }
    )
  ] });
};
w.displayName = "Popover";
export {
  w as Popover
};
