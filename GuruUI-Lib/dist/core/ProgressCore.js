class l {
  static getContainerClasses(e) {
    const s = [
      "w-full"
    ], t = {
      thin: "h-1",
      normal: "h-2",
      thick: "h-3"
    };
    return [
      ...s,
      t[e.height || "normal"]
    ].join(" ");
  }
  static getTrackClasses(e) {
    const s = [
      "w-full bg-[color:var(--guru-body,#b3b3b3)]/10 rounded-full overflow-hidden"
    ], t = e.rounded ? "rounded-full" : "rounded";
    return [
      ...s,
      t
    ].join(" ");
  }
  static getBarClasses(e) {
    const s = [
      "h-full transition-all duration-300 ease-out"
    ], t = {
      default: "bg-[color:var(--guru-accent,#ffffff)]",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500"
    }, a = [];
    e.animated && a.push("animate-pulse"), e.striped && a.push("bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem] animate-stripes");
    const r = e.rounded ? "rounded-full" : "rounded";
    return [
      ...s,
      t[e.variant || "default"],
      ...a,
      r
    ].join(" ");
  }
  static getLabelClasses(e) {
    const s = [
      "text-sm font-medium mb-2"
    ], t = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }, a = {
      default: "text-[color:var(--guru-heading,#ffffff)]",
      success: "text-green-400",
      warning: "text-yellow-400",
      danger: "text-red-400"
    };
    return [
      ...s,
      t[e.size || "md"],
      a[e.variant || "default"]
    ].join(" ");
  }
  static getValueClasses(e) {
    const s = [
      "text-sm font-mono"
    ], t = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }, a = {
      default: "text-[color:var(--guru-body,#b3b3b3)]",
      success: "text-green-400",
      warning: "text-yellow-400",
      danger: "text-red-400"
    };
    return [
      ...s,
      t[e.size || "md"],
      a[e.variant || "default"]
    ].join(" ");
  }
  static getInfoClasses(e) {
    return "flex items-center justify-between mb-2";
  }
  static getAccessibilityProps(e) {
    return {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": 0,
      "aria-label": e.showLabel ? "Progress" : void 0
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "default",
      showLabel: !0,
      showValue: !1,
      animated: !1,
      striped: !1,
      rounded: !0,
      height: "normal"
    };
  }
  // Utility method to calculate progress percentage
  static calculatePercentage(e, s) {
    return s <= 0 ? 0 : Math.min(Math.max(e / s * 100, 0), 100);
  }
  // Utility method to get progress color based on percentage
  static getProgressColor(e) {
    return e >= 80 ? "success" : e >= 60 ? "warning" : e >= 40 ? "default" : "danger";
  }
}
export {
  l as ProgressCore
};
