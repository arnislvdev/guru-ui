class r {
  static getClasses(t) {
    const a = [
      "absolute z-50 px-3 py-2 text-sm font-medium rounded-lg shadow-lg pointer-events-none"
    ], s = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    }, e = {
      dark: "bg-gray-900 text-white",
      light: "bg-white text-gray-900 border border-gray-200",
      accent: "bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-on-accent,#0b0b0b)]"
    }, o = {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-2",
      lg: "text-base px-4 py-3"
    };
    return [
      ...a,
      s[t.position || "top"],
      e[t.variant || "dark"],
      o[t.size || "md"]
    ].join(" ");
  }
  static getArrowClasses(t) {
    const a = [
      "absolute w-2 h-2 rotate-45"
    ], s = {
      top: "top-full left-1/2 -translate-x-1/2 -mt-1",
      bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
      left: "left-full top-1/2 -translate-y-1/2 -ml-1",
      right: "right-full top-1/2 -translate-y-1/2 -mr-1"
    }, e = {
      dark: "bg-gray-900",
      light: "bg-white border border-gray-200",
      accent: "bg-[color:var(--guru-accent,#ffffff)]"
    };
    return [
      ...a,
      s[t.position || "top"],
      e[t.variant || "dark"]
    ].join(" ");
  }
  static getContainerClasses() {
    return "relative inline-block";
  }
  static getTriggerClasses() {
    return "cursor-help";
  }
  static getContentClasses(t) {
    const a = [
      "whitespace-nowrap"
    ], s = t.maxWidth ? `max-w-[${t.maxWidth}px]` : "max-w-xs";
    return [
      ...a,
      s
    ].join(" ");
  }
  static getDelayClasses(t) {
    return {
      none: "transition-none",
      fast: "transition-all duration-100",
      normal: "transition-all duration-200",
      slow: "transition-all duration-300"
    }[t.delay || "normal"];
  }
  static getEnterClasses(t) {
    const a = [
      "transition-all duration-200 ease-out"
    ], s = {
      top: "opacity-0 translate-y-1",
      bottom: "opacity-0 -translate-y-1",
      left: "opacity-0 translate-x-1",
      right: "opacity-0 -translate-x-1"
    };
    return [
      ...a,
      s[t.position || "top"]
    ].join(" ");
  }
  static getEnterActiveClasses(t) {
    const a = [
      "transition-all duration-200 ease-out"
    ], s = {
      top: "opacity-100 translate-y-0",
      bottom: "opacity-100 translate-y-0",
      left: "opacity-100 translate-x-0",
      right: "opacity-100 translate-x-0"
    };
    return [
      ...a,
      s[t.position || "top"]
    ].join(" ");
  }
  static getLeaveClasses(t) {
    const a = [
      "transition-all duration-150 ease-in"
    ], s = {
      top: "opacity-100 translate-y-0",
      bottom: "opacity-100 translate-y-0",
      left: "opacity-100 translate-x-0",
      right: "opacity-100 translate-x-0"
    };
    return [
      ...a,
      s[t.position || "top"]
    ].join(" ");
  }
  static getLeaveActiveClasses(t) {
    const a = [
      "transition-all duration-150 ease-in"
    ], s = {
      top: "opacity-0 translate-y-1",
      bottom: "opacity-0 -translate-y-1",
      left: "opacity-0 translate-x-1",
      right: "opacity-0 -translate-x-1"
    };
    return [
      ...a,
      s[t.position || "top"]
    ].join(" ");
  }
  static getAccessibilityProps(t) {
    return {
      role: "tooltip",
      "aria-describedby": "tooltip-content"
    };
  }
  static getDefaultOptions() {
    return {
      position: "top",
      variant: "dark",
      size: "md",
      arrow: !0,
      delay: "normal",
      maxWidth: 200
    };
  }
}
export {
  r as TooltipCore
};
