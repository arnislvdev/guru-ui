import { jsxs as C, jsx as e } from "react/jsx-runtime";
import "react";
import { AvatarCore as a } from "../core/AvatarCore.js";
const x = ({
  src: l,
  name: t = "",
  fallback: c,
  size: o = "md",
  shape: r = "circle",
  status: i,
  ring: n = !1,
  ringColor: m = "accent"
}) => {
  const s = { size: o, shape: r, status: i || "online", ring: n, ringColor: m }, p = a.getAccessibilityProps(s), d = t.split(" ").filter(Boolean).map((g) => g[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ C(
    "div",
    {
      className: a.getClasses(s),
      ...p,
      "aria-label": t,
      children: [
        l ? /* @__PURE__ */ e(
          "img",
          {
            src: l,
            alt: t,
            className: a.getImageClasses(s)
          }
        ) : /* @__PURE__ */ e("div", { className: a.getFallbackClasses(s), children: /* @__PURE__ */ e("span", { className: "text-xs font-semibold", children: c || d || "?" }) }),
        i && /* @__PURE__ */ e("span", { className: a.getStatusClasses(s) })
      ]
    }
  );
};
export {
  x as Avatar
};
