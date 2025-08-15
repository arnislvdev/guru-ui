import { BaseCore as t, createComponentClasses as d } from "./base.js";
class i extends t {
  static getClasses(r) {
    const e = [
      "w-full px-3 py-2 bg-[color:var(--guru-background)] border rounded-lg",
      "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
      "placeholder-[color:var(--guru-body)]/50",
      r.disabled ? "opacity-50 cursor-not-allowed" : "cursor-text"
    ].filter(Boolean).join(" "), o = {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-2 py-1.5",
      md: "text-sm px-3 py-2",
      lg: "text-base px-4 py-3",
      xl: "text-lg px-5 py-4",
      xxl: "text-xl px-6 py-5"
    }, a = {
      default: "border-[color:var(--guru-body)]/20 text-[color:var(--guru-heading)] focus:border-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      primary: "border-[color:var(--guru-accent)]/30 text-[color:var(--guru-heading)] focus:border-[color:var(--guru-accent)] focus:ring-[color:var(--guru-accent)]",
      secondary: "border-[color:var(--guru-body)]/30 text-[color:var(--guru-body)] focus:border-[color:var(--guru-body)] focus:ring-[color:var(--guru-body)]",
      outline: "border-[color:var(--guru-accent)] bg-transparent text-[color:var(--guru-accent)] focus:bg-[color:var(--guru-accent)]/5",
      ghost: "border-transparent bg-[color:var(--guru-body)]/5 text-[color:var(--guru-heading)] hover:bg-[color:var(--guru-body)]/10",
      danger: "border-red-500/50 text-[color:var(--guru-heading)] focus:border-red-500 focus:ring-red-500",
      error: "border-red-500/50 text-[color:var(--guru-heading)] focus:border-red-500 focus:ring-red-500",
      success: "border-green-500/50 text-[color:var(--guru-heading)] focus:border-green-500 focus:ring-green-500",
      warning: "border-yellow-500/50 text-[color:var(--guru-heading)] focus:border-yellow-500 focus:ring-yellow-500",
      info: "border-blue-500/50 text-[color:var(--guru-heading)] focus:border-blue-500 focus:ring-blue-500",
      elevated: "border-[color:var(--guru-body)]/20 shadow-lg bg-[color:var(--guru-background)]",
      outlined: "border-2 border-[color:var(--guru-accent)] bg-transparent text-[color:var(--guru-accent)]"
    }, c = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize"
    }, u = d(e, o, a, r), s = c[r.resize || "vertical"], l = r.fullWidth ? "w-full" : "";
    return [u, s, l].filter(Boolean).join(" ");
  }
  static getAccessibilityProps(r) {
    return {
      ...this.getBaseAccessibilityProps(r.disabled),
      disabled: r.disabled,
      required: r.required,
      placeholder: r.placeholder,
      rows: r.rows,
      cols: r.cols,
      "aria-invalid": r.error || r.variant === "danger",
      "aria-describedby": r.error ? "textarea-error" : void 0
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "primary",
      disabled: !1,
      required: !1,
      placeholder: "",
      rows: 4,
      resize: "vertical",
      fullWidth: !0,
      error: !1
    };
  }
}
export {
  i as TextareaCore
};
