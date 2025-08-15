class l {
  static getClasses(e) {
    const t = [
      "flex items-start gap-3 p-4 transition-all duration-200"
    ], s = {
      sm: "p-3 text-sm",
      md: "p-4 text-sm",
      lg: "p-5 text-base"
    }, r = {
      info: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      success: "bg-green-500/10 border-green-500/20 text-green-400",
      warning: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
      error: "bg-red-500/10 border-red-500/20 text-red-400"
    }, o = e.border ? "border" : "", n = e.rounded ? "rounded-xl" : "rounded-lg";
    return [
      ...t,
      s[e.size || "md"],
      r[e.variant || "info"],
      o,
      n
    ].join(" ");
  }
  static getIconClasses(e) {
    const t = [
      "flex-shrink-0 w-5 h-5"
    ], s = {
      info: "text-blue-400",
      success: "text-green-400",
      warning: "text-yellow-400",
      error: "text-red-400"
    };
    return [
      ...t,
      s[e.variant || "info"]
    ].join(" ");
  }
  static getContentClasses() {
    return "flex-1 min-w-0";
  }
  static getTitleClasses() {
    return "font-medium mb-1";
  }
  static getDescriptionClasses() {
    return "text-[color:var(--guru-body,#b3b3b3)]";
  }
  static getDismissButtonClasses(e) {
    const t = [
      "flex-shrink-0 p-1 rounded-md hover:bg-[color:var(--guru-body,#b3b3b3)]/10 transition-colors"
    ], s = {
      info: "text-blue-400 hover:text-blue-300",
      success: "text-green-400 hover:text-green-300",
      warning: "text-yellow-400 hover:text-yellow-300",
      error: "text-red-400 hover:text-red-300"
    };
    return [
      ...t,
      s[e.variant || "info"]
    ].join(" ");
  }
  static getAccessibilityProps(e) {
    return {
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": !0
    };
  }
  static getDefaultOptions() {
    return {
      variant: "info",
      size: "md",
      dismissible: !1,
      icon: !0,
      border: !1,
      rounded: !1
    };
  }
}
export {
  l as AlertCore
};
