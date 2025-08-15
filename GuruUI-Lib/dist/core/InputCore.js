class t {
  static getClasses(r) {
    const e = [
      "w-full px-3 py-2 bg-[color:var(--guru-background,#121212)] border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
      r.disabled ? "opacity-50 cursor-not-allowed" : "cursor-text"
    ], a = {
      sm: "text-sm px-2 py-1.5",
      md: "text-sm px-3 py-2",
      lg: "text-base px-4 py-3"
    }, l = {
      default: "border-[color:var(--guru-body,#b3b3b3)]/20 text-[color:var(--guru-heading,#ffffff)] placeholder-[color:var(--guru-body,#b3b3b3)]/50 focus:border-[color:var(--guru-accent,#ffffff)] focus:ring-[color:var(--guru-accent,#ffffff)]",
      error: "border-red-500/50 text-[color:var(--guru-heading,#ffffff)] placeholder-red-400/50 focus:border-red-500 focus:ring-red-500",
      success: "border-green-500/50 text-[color:var(--guru-heading,#ffffff)] placeholder-green-400/50 focus:border-green-500 focus:ring-green-500",
      warning: "border-yellow-500/50 text-[color:var(--guru-heading,#ffffff)] placeholder-yellow-400/50 focus:border-yellow-500 focus:ring-yellow-500"
    }, o = r.fullWidth ? "w-full" : "";
    return [
      ...e,
      a[r.size || "md"],
      l[r.variant || "default"],
      o
    ].join(" ");
  }
  static getAccessibilityProps(r) {
    return {
      disabled: r.disabled,
      required: r.required,
      type: r.type || "text",
      placeholder: r.placeholder,
      "aria-invalid": r.variant === "error",
      "aria-describedby": r.variant === "error" ? "input-error" : void 0
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "default",
      disabled: !1,
      fullWidth: !0,
      placeholder: "",
      type: "text",
      required: !1
    };
  }
}
export {
  t as InputCore
};
