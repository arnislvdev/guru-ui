import { jsxs as o, jsx as t } from "react/jsx-runtime";
import "react";
import { AlertCore as s } from "../core/AlertCore.js";
const N = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌"
}, b = ({
  title: l,
  variant: r = "info",
  size: n = "md",
  dismissible: a = !1,
  icon: c = !0,
  border: m = !1,
  rounded: d = !1,
  onDismiss: i,
  className: p = "",
  children: C,
  ...g
}) => {
  const e = { variant: r, size: n, dismissible: a, icon: c, border: m, rounded: d }, f = s.getAccessibilityProps(e);
  return /* @__PURE__ */ o(
    "div",
    {
      className: `${s.getClasses(e)} ${p}`.trim(),
      ...f,
      ...g,
      children: [
        c && /* @__PURE__ */ t("span", { className: s.getIconClasses(e), children: N[r] }),
        /* @__PURE__ */ o("div", { className: s.getContentClasses(), children: [
          l && /* @__PURE__ */ t("div", { className: s.getTitleClasses(), children: l }),
          /* @__PURE__ */ t("div", { className: s.getDescriptionClasses(), children: C })
        ] }),
        a && i && /* @__PURE__ */ t(
          "button",
          {
            className: s.getDismissButtonClasses(e),
            onClick: i,
            "aria-label": "Dismiss alert",
            children: "✕"
          }
        )
      ]
    }
  );
};
export {
  b as Alert
};
