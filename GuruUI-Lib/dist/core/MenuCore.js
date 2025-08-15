class r {
  static getClasses(t) {
    const s = [
      "absolute z-50"
    ], e = {
      bottom: "top-full left-0 mt-1",
      top: "bottom-full left-0 mb-1",
      left: "right-full top-0 mr-1",
      right: "left-full top-0 ml-1"
    }, o = {
      auto: "w-auto",
      sm: "w-48",
      md: "w-56",
      lg: "w-64",
      xl: "w-80"
    }, a = t.maxHeight ? `max-h-[${t.maxHeight}px]` : "max-h-96";
    return [
      ...s,
      e[t.position || "bottom"],
      o[t.width || "auto"],
      a
    ].join(" ");
  }
  static getContentClasses(t) {
    const s = [
      "bg-[color:var(--guru-background,#121212)] border border-white/10 rounded-lg overflow-hidden"
    ], e = {
      default: "p-1",
      minimal: "p-0.5",
      card: "p-2 shadow-xl"
    }, o = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    };
    return [
      ...s,
      e[t.variant || "default"],
      o[t.shadow || "md"]
    ].join(" ");
  }
  static getItemClasses(t) {
    const s = [
      "relative flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none"
    ], e = {
      sm: "px-2 py-1.5 text-xs",
      md: "px-2 py-2 text-sm",
      lg: "px-3 py-2.5 text-base"
    }, o = {
      default: "hover:bg-white/5 focus:bg-white/5",
      minimal: "hover:bg-white/5 focus:bg-white/5",
      card: "hover:bg-white/10 focus:bg-white/10"
    };
    return [
      ...s,
      e[t.size || "md"],
      o[t.variant || "default"]
    ].join(" ");
  }
  static getItemActiveClasses(t) {
    return [
      "bg-white/10 text-[color:var(--guru-heading,#ffffff)]"
    ].join(" ");
  }
  static getItemDisabledClasses(t) {
    return [
      "opacity-50 cursor-not-allowed pointer-events-none"
    ].join(" ");
  }
  static getItemTextClasses() {
    return "flex-1 text-[color:var(--guru-body,#b3b3b3)]";
  }
  static getItemIconClasses() {
    return "mr-2 h-4 w-4 text-[color:var(--guru-body,#b3b3b3)]";
  }
  static getItemRightIconClasses() {
    return "ml-auto h-4 w-4 text-[color:var(--guru-body,#b3b3b3)]";
  }
  static getSeparatorClasses() {
    return "my-1 h-px bg-white/10";
  }
  static getGroupClasses() {
    return "px-2 py-1.5 text-xs font-semibold text-[color:var(--guru-body,#b3b3b3)]";
  }
  static getSubmenuClasses(t) {
    const s = [
      "absolute left-full top-0 ml-1"
    ], e = {
      auto: "w-auto",
      sm: "w-48",
      md: "w-56",
      lg: "w-64",
      xl: "w-80"
    };
    return [
      ...s,
      e[t.width || "auto"]
    ].join(" ");
  }
  static getTriggerClasses() {
    return "inline-flex items-center justify-center cursor-pointer";
  }
  static getContainerClasses() {
    return "relative inline-block";
  }
  static getEnterClasses(t) {
    const s = [
      "transition-all duration-200 ease-out"
    ], e = {
      bottom: "opacity-0 scale-95 origin-top",
      top: "opacity-0 scale-95 origin-bottom",
      left: "opacity-0 scale-95 origin-right",
      right: "opacity-0 scale-95 origin-left"
    };
    return [
      ...s,
      e[t.position || "bottom"]
    ].join(" ");
  }
  static getEnterActiveClasses(t) {
    const s = [
      "transition-all duration-200 ease-out"
    ], e = {
      bottom: "opacity-100 scale-100 origin-top",
      top: "opacity-100 scale-100 origin-bottom",
      left: "opacity-100 scale-100 origin-right",
      right: "opacity-100 scale-100 origin-left"
    };
    return [
      ...s,
      e[t.position || "bottom"]
    ].join(" ");
  }
  static getLeaveClasses(t) {
    const s = [
      "transition-all duration-150 ease-in"
    ], e = {
      bottom: "opacity-100 scale-100 origin-top",
      top: "opacity-100 scale-100 origin-bottom",
      left: "opacity-100 scale-100 origin-right",
      right: "opacity-100 scale-100 origin-left"
    };
    return [
      ...s,
      e[t.position || "bottom"]
    ].join(" ");
  }
  static getLeaveActiveClasses(t) {
    const s = [
      "transition-all duration-150 ease-in"
    ], e = {
      bottom: "opacity-0 scale-95 origin-top",
      top: "opacity-0 scale-95 origin-bottom",
      left: "opacity-0 scale-95 origin-right",
      right: "opacity-0 scale-95 origin-left"
    };
    return [
      ...s,
      e[t.position || "bottom"]
    ].join(" ");
  }
  static getAccessibilityProps(t) {
    return {
      role: "menu",
      "aria-orientation": "vertical"
    };
  }
  static getDefaultOptions() {
    return {
      variant: "default",
      size: "md",
      position: "bottom",
      maxHeight: 384,
      width: "auto",
      shadow: "md"
    };
  }
}
export {
  r as MenuCore
};
