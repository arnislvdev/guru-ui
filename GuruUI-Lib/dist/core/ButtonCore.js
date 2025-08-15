import { CSS_VARS as e } from "../types/common.js";
import { BaseCore as a, createComponentClasses as c } from "./base.js";
class b extends a {
  static getClasses(t) {
    const r = [
      "inline-flex items-center justify-center font-medium",
      `rounded-[color:var(${e.radius})]`,
      t.fullWidth ? "w-full" : "",
      t.iconOnly ? "aspect-square p-0" : ""
    ].filter(Boolean).join(" "), o = t.iconOnly ? {
      sm: "w-8 h-8 text-sm",
      md: "w-9 h-9 text-sm",
      lg: "w-10 h-10 text-base",
      xl: "w-12 h-12 text-lg"
    } : {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      xl: "px-8 py-4 text-lg"
    }, s = {
      primary: `bg-[color:var(${e.accent})] text-[color:var(${e.onAccent})] hover:bg-[color:var(${e.accentHover})]`,
      secondary: `bg-[color:var(${e.body})]/10 text-[color:var(${e.body})] hover:bg-[color:var(${e.body})]/20`,
      outline: `border border-[color:var(${e.accent})]/20 text-[color:var(${e.accent})] hover:bg-[color:var(${e.accent})]/10`,
      ghost: `text-[color:var(${e.body})] hover:bg-[color:var(${e.body})]/10`,
      danger: "bg-red-600 text-white hover:bg-red-700"
    };
    return c(r, o, s, t);
  }
  static getAccessibilityProps(t) {
    return {
      ...this.getBaseAccessibilityProps(t.disabled || t.loading),
      type: "button",
      "aria-busy": t.loading || !1
    };
  }
}
export {
  b as ButtonCore
};
