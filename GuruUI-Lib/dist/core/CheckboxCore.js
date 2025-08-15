class i {
  static getContainerClasses() {
    return "flex items-start space-x-3";
  }
  static getCheckboxClasses(e) {
    const s = [
      "flex-shrink-0 rounded border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    ], r = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    }, t = {
      default: "border-[color:var(--guru-body,#b3b3b3)]/20 bg-[color:var(--guru-background,#121212)] text-[color:var(--guru-accent,#ffffff)] focus:ring-[color:var(--guru-accent,#ffffff)]",
      error: "border-red-500/50 bg-[color:var(--guru-background,#121212)] text-red-500 focus:ring-red-500",
      success: "border-green-500/50 bg-[color:var(--guru-background,#121212)] text-green-500 focus:ring-green-500"
    }, a = e.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    return [
      ...s,
      r[e.size || "md"],
      t[e.variant || "default"],
      a
    ].join(" ");
  }
  static getLabelClasses(e) {
    const s = [
      "text-sm font-medium"
    ], r = {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base"
    }, t = {
      default: "text-[color:var(--guru-heading,#ffffff)]",
      error: "text-red-400",
      success: "text-green-400"
    }, a = e.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    return [
      ...s,
      r[e.size || "md"],
      t[e.variant || "default"],
      a
    ].join(" ");
  }
  static getDescriptionClasses(e) {
    const s = [
      "text-sm"
    ], r = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm"
    }, t = {
      default: "text-[color:var(--guru-body,#b3b3b3)]",
      error: "text-red-400/80",
      success: "text-green-400/80"
    };
    return [
      ...s,
      r[e.size || "md"],
      t[e.variant || "default"]
    ].join(" ");
  }
  static getIconClasses(e) {
    const s = [
      "w-full h-full flex items-center justify-center"
    ], r = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    };
    return [
      ...s,
      r[e.size || "md"]
    ].join(" ");
  }
  static getAccessibilityProps(e) {
    return {
      role: "checkbox",
      "aria-checked": e.indeterminate ? "mixed" : void 0,
      "aria-required": e.required,
      "aria-invalid": e.variant === "error",
      "aria-describedby": e.description ? "checkbox-description" : void 0
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "default",
      disabled: !1,
      indeterminate: !1,
      required: !1,
      label: "",
      description: ""
    };
  }
}
export {
  i as CheckboxCore
};
