class r {
  static getClasses(s) {
    const e = [
      "bg-[color:var(--guru-body,#b3b3b3)]/10 rounded"
    ], a = {
      text: "h-4",
      circular: "rounded-full",
      rectangular: "rounded"
    }, t = {
      pulse: "animate-pulse",
      wave: "animate-pulse",
      none: ""
    }, l = {
      sm: "h-3",
      md: "h-4",
      lg: "h-6"
    };
    return [
      ...e,
      a[s.variant || "text"],
      t[s.animation || "pulse"],
      l[s.size || "md"]
    ].join(" ");
  }
  static getTextClasses(s) {
    const e = [
      "bg-[color:var(--guru-body,#b3b3b3)]/10 rounded animate-pulse"
    ], a = {
      sm: "h-3",
      md: "h-4",
      lg: "h-6"
    };
    return [
      ...e,
      a[s.size || "md"]
    ].join(" ");
  }
  static getCircularClasses(s) {
    const e = [
      "bg-[color:var(--guru-body,#b3b3b3)]/10 rounded-full animate-pulse"
    ], a = {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16"
    };
    return [
      ...e,
      a[s.size || "md"]
    ].join(" ");
  }
  static getRectangularClasses(s) {
    const e = [
      "bg-[color:var(--guru-body,#b3b3b3)]/10 rounded animate-pulse"
    ], a = {
      sm: "h-16",
      md: "h-24",
      lg: "h-32"
    };
    return [
      ...e,
      a[s.size || "md"]
    ].join(" ");
  }
  static getAccessibilityProps(s) {
    return {
      role: "status",
      "aria-label": "Loading...",
      "aria-live": "polite"
    };
  }
  static getDefaultOptions() {
    return {
      variant: "text",
      size: "md",
      animation: "pulse"
    };
  }
}
export {
  r as SkeletonCore
};
