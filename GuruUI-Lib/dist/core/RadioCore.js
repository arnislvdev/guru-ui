import { BaseCore as u, createComponentClasses as l } from "./base.js";
class d extends u {
  static getGroupClasses(r) {
    const e = [
      "flex gap-3"
    ], o = {
      horizontal: "flex-row",
      vertical: "flex-col"
    };
    return [
      ...e,
      o[r.orientation || "vertical"]
    ].join(" ");
  }
  static getItemClasses() {
    return "flex items-center space-x-3";
  }
  static getClasses(r) {
    const e = [
      "flex-shrink-0 rounded-full border transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      r.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    ].filter(Boolean).join(" ");
    return l(e, {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-7 h-7",
      xxl: "w-8 h-8"
    }, {
      default: "border-[color:var(--guru-body)]/20 bg-[color:var(--guru-background)] text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      primary: "border-[color:var(--guru-accent)]/30 bg-[color:var(--guru-background)] text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      secondary: "border-[color:var(--guru-body)]/30 bg-[color:var(--guru-background)] text-[color:var(--guru-body)] focus:ring-[color:var(--guru-body)]",
      outline: "border-[color:var(--guru-accent)] bg-transparent text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      ghost: "border-transparent bg-[color:var(--guru-body)]/5 text-[color:var(--guru-heading)] focus:ring-[color:var(--guru-body)]",
      danger: "border-red-500/50 bg-[color:var(--guru-background)] text-red-500 focus:ring-red-500",
      error: "border-red-500/50 bg-[color:var(--guru-background)] text-red-500 focus:ring-red-500",
      success: "border-green-500/50 bg-[color:var(--guru-background)] text-green-500 focus:ring-green-500",
      warning: "border-yellow-500/50 bg-[color:var(--guru-background)] text-yellow-500 focus:ring-yellow-500",
      info: "border-blue-500/50 bg-[color:var(--guru-background)] text-blue-500 focus:ring-blue-500",
      elevated: "border-[color:var(--guru-body)]/20 shadow-lg bg-[color:var(--guru-background)] text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      outlined: "border-2 border-[color:var(--guru-accent)] bg-transparent text-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]"
    }, r);
  }
  static getCheckedClasses(r) {
    return {
      default: "border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]",
      primary: "border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]",
      secondary: "border-[color:var(--guru-body)] bg-[color:var(--guru-body)]",
      outline: "border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]",
      ghost: "border-[color:var(--guru-body)] bg-[color:var(--guru-body)]",
      danger: "border-red-500 bg-red-500",
      error: "border-red-500 bg-red-500",
      success: "border-green-500 bg-green-500",
      warning: "border-yellow-500 bg-yellow-500",
      info: "border-blue-500 bg-blue-500",
      elevated: "border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]",
      outlined: "border-[color:var(--guru-accent)] bg-[color:var(--guru-accent)]"
    }[r.variant || "default"];
  }
  static getIndicatorClasses(r) {
    const e = [
      "rounded-full bg-white"
    ], o = {
      xs: "w-1 h-1",
      sm: "w-1.5 h-1.5",
      md: "w-2 h-2",
      lg: "w-2.5 h-2.5",
      xl: "w-3 h-3",
      xxl: "w-3.5 h-3.5"
    }, t = r.size || "md";
    return [
      ...e,
      o[t]
    ].join(" ");
  }
  static getLabelClasses(r) {
    const e = [
      "text-sm font-medium"
    ], o = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
      xxl: "text-xl"
    }, t = {
      default: "text-[color:var(--guru-heading)]",
      primary: "text-[color:var(--guru-heading)]",
      secondary: "text-[color:var(--guru-body)]",
      outline: "text-[color:var(--guru-accent)]",
      ghost: "text-[color:var(--guru-heading)]",
      danger: "text-red-400",
      error: "text-red-400",
      success: "text-green-400",
      warning: "text-yellow-400",
      info: "text-blue-400",
      elevated: "text-[color:var(--guru-heading)]",
      outlined: "text-[color:var(--guru-accent)]"
    }, a = r.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer", c = r.size || "md", s = r.variant || "default";
    return [
      ...e,
      o[c],
      t[s],
      a
    ].join(" ");
  }
  static getDescriptionClasses(r) {
    const e = [
      "text-sm"
    ], o = {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      xxl: "text-lg"
    }, t = {
      default: "text-[color:var(--guru-body)]",
      primary: "text-[color:var(--guru-body)]",
      secondary: "text-[color:var(--guru-body)]",
      outline: "text-[color:var(--guru-accent)]/80",
      ghost: "text-[color:var(--guru-body)]",
      danger: "text-red-400/80",
      error: "text-red-400/80",
      success: "text-green-400/80",
      warning: "text-yellow-400/80",
      info: "text-blue-400/80",
      elevated: "text-[color:var(--guru-body)]",
      outlined: "text-[color:var(--guru-accent)]/80"
    }, a = r.size || "md", c = r.variant || "default";
    return [
      ...e,
      o[a],
      t[c]
    ].join(" ");
  }
  static getAccessibilityProps(r) {
    return {
      ...this.getBaseAccessibilityProps(r.disabled),
      type: "radio",
      name: r.name,
      value: r.value,
      checked: r.checked || !1,
      required: r.required,
      "aria-invalid": r.error || r.variant === "danger",
      "aria-describedby": r.error ? "radio-error" : void 0
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "primary",
      disabled: !1,
      required: !1,
      name: "",
      value: "",
      checked: !1,
      error: !1,
      orientation: "vertical"
    };
  }
}
export {
  d as RadioCore
};
