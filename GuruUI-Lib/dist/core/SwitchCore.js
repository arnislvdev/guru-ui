import { BaseCore as l, createComponentClasses as c } from "./base.js";
class g extends l {
  static getContainerClasses() {
    return "flex items-start space-x-3";
  }
  static getClasses(e) {
    const r = [
      "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent",
      "transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",
      e.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    ].filter(Boolean).join(" ");
    return c(r, {
      xs: "h-4 w-7",
      sm: "h-5 w-9",
      md: "h-6 w-11",
      lg: "h-7 w-14",
      xl: "h-8 w-16",
      xxl: "h-10 w-20"
    }, {
      default: "bg-[color:var(--guru-body)]/20 focus:ring-[color:var(--guru-accent)]",
      primary: "bg-[color:var(--guru-accent)]/20 focus:ring-[color:var(--guru-accent)]",
      secondary: "bg-[color:var(--guru-body)]/20 focus:ring-[color:var(--guru-body)]",
      outline: "bg-transparent border-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      ghost: "bg-[color:var(--guru-body)]/10 focus:ring-[color:var(--guru-body)]",
      danger: "bg-red-500/20 focus:ring-red-500",
      error: "bg-red-500/20 focus:ring-red-500",
      success: "bg-green-500/20 focus:ring-green-500",
      warning: "bg-yellow-500/20 focus:ring-yellow-500",
      info: "bg-blue-500/20 focus:ring-blue-500",
      elevated: "bg-[color:var(--guru-body)]/20 shadow-lg focus:ring-[color:var(--guru-accent)]",
      outlined: "bg-transparent border-2 border-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]"
    }, e);
  }
  static getActiveClasses(e) {
    return {
      default: "bg-[color:var(--guru-accent)]",
      primary: "bg-[color:var(--guru-accent)]",
      secondary: "bg-[color:var(--guru-body)]",
      outline: "bg-[color:var(--guru-accent)]",
      ghost: "bg-[color:var(--guru-body)]",
      danger: "bg-red-500",
      error: "bg-red-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      info: "bg-blue-500",
      elevated: "bg-[color:var(--guru-accent)]",
      outlined: "bg-[color:var(--guru-accent)]"
    }[e.variant || "default"];
  }
  static getThumbClasses(e) {
    const r = [
      "pointer-events-none inline-block transform rounded-full bg-white shadow ring-0",
      "transition duration-200 ease-in-out"
    ].join(" "), t = {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      xxl: "h-9 w-9"
    }, s = e.size || "md";
    return [r, t[s]].join(" ");
  }
  static getThumbActiveClasses(e) {
    return {
      xs: "translate-x-3",
      sm: "translate-x-4",
      md: "translate-x-5",
      lg: "translate-x-7",
      xl: "translate-x-8",
      xxl: "translate-x-10"
    }[e.size || "md"];
  }
  static getLabelClasses(e) {
    const r = [
      "text-sm font-medium"
    ], t = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
      xxl: "text-xl"
    }, s = {
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
    }, a = e.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer", o = e.size || "md", n = e.variant || "default";
    return [
      ...r,
      t[o],
      s[n],
      a
    ].join(" ");
  }
  static getDescriptionClasses(e) {
    const r = [
      "text-sm"
    ], t = {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      xxl: "text-lg"
    }, s = {
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
    }, a = e.size || "md", o = e.variant || "default";
    return [
      ...r,
      t[a],
      s[o]
    ].join(" ");
  }
  static getLoadingClasses() {
    return "animate-spin";
  }
  static getAccessibilityProps(e) {
    return {
      ...this.getBaseAccessibilityProps(e.disabled),
      role: "switch",
      "aria-checked": e.checked || !1,
      "aria-required": e.required,
      "aria-describedby": e.description ? "switch-description" : void 0,
      "aria-busy": e.loading || !1
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "primary",
      disabled: !1,
      required: !1,
      label: "",
      description: "",
      loading: !1,
      checked: !1
    };
  }
}
export {
  g as SwitchCore
};
