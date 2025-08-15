class i {
  static getContainerClasses() {
    return "flex items-start space-x-3";
  }
  static getToggleClasses(e) {
    const s = [
      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
    ], t = {
      sm: "h-5 w-9",
      md: "h-6 w-11",
      lg: "h-7 w-14"
    }, a = {
      default: "bg-[color:var(--guru-body,#b3b3b3)]/20 focus:ring-[color:var(--guru-accent,#ffffff)]",
      success: "bg-green-500/20 focus:ring-green-500",
      warning: "bg-yellow-500/20 focus:ring-yellow-500",
      danger: "bg-red-500/20 focus:ring-red-500"
    }, r = e.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    return [
      ...s,
      t[e.size || "md"],
      a[e.variant || "default"],
      r
    ].join(" ");
  }
  static getToggleActiveClasses(e) {
    return {
      default: "bg-[color:var(--guru-accent,#ffffff)]",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500"
    }[e.variant || "default"];
  }
  static getThumbClasses(e) {
    const s = [
      "pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
    ], t = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    };
    return [
      ...s,
      t[e.size || "md"]
    ].join(" ");
  }
  static getThumbActiveClasses(e) {
    return {
      sm: "translate-x-4",
      md: "translate-x-5",
      lg: "translate-x-7"
    }[e.size || "md"];
  }
  static getLabelClasses(e) {
    const s = [
      "text-sm font-medium"
    ], t = {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base"
    }, a = {
      default: "text-[color:var(--guru-heading,#ffffff)]",
      success: "text-green-400",
      warning: "text-yellow-400",
      danger: "text-red-400"
    }, r = e.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    return [
      ...s,
      t[e.size || "md"],
      a[e.variant || "default"],
      r
    ].join(" ");
  }
  static getDescriptionClasses(e) {
    const s = [
      "text-sm"
    ], t = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm"
    }, a = {
      default: "text-[color:var(--guru-body,#b3b3b3)]",
      success: "text-green-400/80",
      warning: "text-yellow-400/80",
      danger: "text-red-400/80"
    };
    return [
      ...s,
      t[e.size || "md"],
      a[e.variant || "default"]
    ].join(" ");
  }
  static getLoadingClasses() {
    return "animate-spin";
  }
  static getAccessibilityProps(e) {
    return {
      role: "switch",
      "aria-checked": !1,
      "aria-required": e.required,
      "aria-describedby": e.description ? "toggle-description" : void 0
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "default",
      disabled: !1,
      required: !1,
      label: "",
      description: "",
      loading: !1
    };
  }
}
export {
  i as ToggleCore
};
