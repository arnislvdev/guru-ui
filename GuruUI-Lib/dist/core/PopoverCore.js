class i {
  static getClasses(t) {
    const s = [
      "absolute z-50"
    ], e = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    }, a = {
      sm: "min-w-[200px]",
      md: "min-w-[300px]",
      lg: "min-w-[400px]"
    }, o = t.maxWidth ? `max-w-[${t.maxWidth}px]` : "max-w-sm";
    return [
      ...s,
      e[t.position || "top"],
      a[t.size || "md"],
      o
    ].join(" ");
  }
  static getContentClasses(t) {
    const s = [
      "relative bg-[color:var(--guru-background,#121212)] border border-white/10 rounded-lg"
    ], e = {
      default: "p-4",
      card: "p-6 shadow-xl",
      minimal: "p-2"
    }, a = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    };
    return [
      ...s,
      e[t.variant || "default"],
      a[t.shadow || "md"]
    ].join(" ");
  }
  static getArrowClasses(t) {
    const s = [
      "absolute w-2 h-2 rotate-45 bg-[color:var(--guru-background,#121212)] border border-white/10"
    ], e = {
      top: "top-full left-1/2 -translate-x-1/2 -mt-1",
      bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
      left: "left-full top-1/2 -translate-y-1/2 -ml-1",
      right: "right-full top-1/2 -translate-y-1/2 -mr-1"
    };
    return [
      ...s,
      e[t.position || "top"]
    ].join(" ");
  }
  static getHeaderClasses(t) {
    const s = [
      "flex items-center justify-between mb-3"
    ], e = {
      default: "pb-3 border-b border-white/10",
      card: "pb-4 border-b border-white/10",
      minimal: "pb-2"
    };
    return [
      ...s,
      e[t.variant || "default"]
    ].join(" ");
  }
  static getTitleClasses(t) {
    const s = [
      "text-sm font-semibold text-[color:var(--guru-heading,#ffffff)]"
    ], e = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    };
    return [
      ...s,
      e[t.size || "md"]
    ].join(" ");
  }
  static getBodyClasses(t) {
    const s = [
      "text-sm text-[color:var(--guru-body,#b3b3b3)]"
    ], e = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    };
    return [
      ...s,
      e[t.size || "md"]
    ].join(" ");
  }
  static getFooterClasses(t) {
    const s = [
      "flex items-center justify-end gap-2 mt-3"
    ], e = {
      default: "pt-3 border-t border-white/10",
      card: "pt-4 border-t border-white/10",
      minimal: "pt-2"
    };
    return [
      ...s,
      e[t.variant || "default"]
    ].join(" ");
  }
  static getCloseButtonClasses() {
    return [
      "inline-flex items-center justify-center w-6 h-6 rounded-md",
      "text-[color:var(--guru-body,#b3b3b3)] hover:text-[color:var(--guru-heading,#ffffff)]",
      "hover:bg-white/5 transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-[color:var(--guru-accent,#ffffff)]/60"
    ].join(" ");
  }
  static getContainerClasses() {
    return "relative inline-block";
  }
  static getTriggerClasses() {
    return "cursor-pointer";
  }
  static getEnterClasses(t) {
    const s = [
      "transition-all duration-200 ease-out"
    ], e = {
      top: "opacity-0 translate-y-1",
      bottom: "opacity-0 -translate-y-1",
      left: "opacity-0 translate-x-1",
      right: "opacity-0 -translate-x-1"
    };
    return [
      ...s,
      e[t.position || "top"]
    ].join(" ");
  }
  static getEnterActiveClasses(t) {
    const s = [
      "transition-all duration-200 ease-out"
    ], e = {
      top: "opacity-100 translate-y-0",
      bottom: "opacity-100 translate-y-0",
      left: "opacity-100 translate-x-0",
      right: "opacity-100 translate-x-0"
    };
    return [
      ...s,
      e[t.position || "top"]
    ].join(" ");
  }
  static getLeaveClasses(t) {
    const s = [
      "transition-all duration-150 ease-in"
    ], e = {
      top: "opacity-100 translate-y-0",
      bottom: "opacity-100 translate-y-0",
      left: "opacity-100 translate-x-0",
      right: "opacity-100 translate-x-0"
    };
    return [
      ...s,
      e[t.position || "top"]
    ].join(" ");
  }
  static getLeaveActiveClasses(t) {
    const s = [
      "transition-all duration-150 ease-in"
    ], e = {
      top: "opacity-0 translate-y-1",
      bottom: "opacity-0 -translate-y-1",
      left: "opacity-0 translate-x-1",
      right: "opacity-0 -translate-x-1"
    };
    return [
      ...s,
      e[t.position || "top"]
    ].join(" ");
  }
  static getAccessibilityProps(t) {
    return {
      role: "dialog",
      "aria-modal": !1,
      "aria-describedby": "popover-content"
    };
  }
  static getDefaultOptions() {
    return {
      position: "top",
      variant: "default",
      size: "md",
      arrow: !0,
      shadow: "md",
      maxWidth: 300,
      closeOnClickOutside: !0,
      closeOnEscape: !0
    };
  }
}
export {
  i as PopoverCore
};
