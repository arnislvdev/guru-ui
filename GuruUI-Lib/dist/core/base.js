import { TRANSITIONS as n, CSS_VARS as l } from "../types/common.js";
class i {
  // Common size classes that all components can use
  static getSizeClasses(s) {
    return {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg"
    }[s];
  }
  // Common transition classes
  static getTransitionClasses() {
    return `transition-all duration-[${n.normal}] ease-in-out`;
  }
  // Common focus classes
  static getFocusClasses() {
    return `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(${l.accent})] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(${l.background})]`;
  }
  // Common disabled classes
  static getDisabledClasses() {
    return "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";
  }
  // Generate CSS variable references
  static cssVar(s, e) {
    return e ? `var(${s}, ${e})` : `var(${s})`;
  }
  // Common accessibility props
  static getBaseAccessibilityProps(s) {
    return {
      "aria-disabled": s || !1,
      ...s && { tabIndex: -1 }
    };
  }
}
function c(r, s, e, t) {
  const a = [
    r,
    i.getTransitionClasses(),
    i.getFocusClasses(),
    s[t.size || "md"],
    e[t.variant || "primary"]
  ];
  return t.disabled && a.push(i.getDisabledClasses()), t.className && a.push(t.className), a.filter(Boolean).join(" ");
}
export {
  i as BaseCore,
  c as createComponentClasses
};
