class n {
  static getClasses(e) {
    const s = [
      "inline-block animate-spin"
    ], t = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12"
    }, r = {
      primary: "text-[color:var(--guru-primary,#3b82f6)]",
      secondary: "text-[color:var(--guru-secondary,#64748b)]",
      accent: "text-[color:var(--guru-accent,#ffffff)]",
      white: "text-white"
    }, a = {
      slow: "animate-[spin_2s_linear_infinite]",
      normal: "animate-spin",
      fast: "animate-[spin_0.5s_linear_infinite]"
    };
    return [
      ...s,
      t[e.size || "md"],
      r[e.color || "accent"],
      a[e.speed || "normal"]
    ].join(" ");
  }
  static getSpinnerClasses(e) {
    const s = [
      "inline-block animate-spin rounded-full border-2 border-current border-t-transparent"
    ], t = {
      sm: "w-4 h-4 border-2",
      md: "w-6 h-6 border-2",
      lg: "w-8 h-8 border-3",
      xl: "w-12 h-12 border-4"
    }, r = {
      primary: "text-[color:var(--guru-primary,#3b82f6)]",
      secondary: "text-[color:var(--guru-secondary,#64748b)]",
      accent: "text-[color:var(--guru-accent,#ffffff)]",
      white: "text-white"
    };
    return [
      ...s,
      t[e.size || "md"],
      r[e.color || "accent"]
    ].join(" ");
  }
  static getDotsClasses(e) {
    const s = [
      "inline-flex items-center space-x-1"
    ], t = {
      sm: "space-x-1",
      md: "space-x-1.5",
      lg: "space-x-2",
      xl: "space-x-3"
    };
    return [
      ...s,
      t[e.size || "md"]
    ].join(" ");
  }
  static getDotClasses(e) {
    const s = [
      "rounded-full bg-current animate-pulse"
    ], t = {
      sm: "w-1.5 h-1.5",
      md: "w-2 h-2",
      lg: "w-2.5 h-2.5",
      xl: "w-3 h-3"
    }, r = {
      primary: "text-[color:var(--guru-primary,#3b82f6)]",
      secondary: "text-[color:var(--guru-secondary,#64748b)]",
      accent: "text-[color:var(--guru-accent,#ffffff)]",
      white: "text-white"
    };
    return [
      ...s,
      t[e.size || "md"],
      r[e.color || "accent"]
    ].join(" ");
  }
  static getBarsClasses(e) {
    const s = [
      "inline-flex items-center space-x-1"
    ], t = {
      sm: "space-x-0.5",
      md: "space-x-1",
      lg: "space-x-1.5",
      xl: "space-x-2"
    };
    return [
      ...s,
      t[e.size || "md"]
    ].join(" ");
  }
  static getBarClasses(e) {
    const s = [
      "bg-current animate-pulse"
    ], t = {
      sm: "w-1 h-3",
      md: "w-1.5 h-4",
      lg: "w-2 h-5",
      xl: "w-2.5 h-6"
    }, r = {
      primary: "text-[color:var(--guru-primary,#3b82f6)]",
      secondary: "text-[color:var(--guru-secondary,#64748b)]",
      accent: "text-[color:var(--guru-accent,#ffffff)]",
      white: "text-white"
    };
    return [
      ...s,
      t[e.size || "md"],
      r[e.color || "accent"]
    ].join(" ");
  }
  static getPulseClasses(e) {
    const s = [
      "inline-block rounded-full bg-current animate-pulse"
    ], t = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12"
    }, r = {
      primary: "text-[color:var(--guru-primary,#3b82f6)]",
      secondary: "text-[color:var(--guru-secondary,#64748b)]",
      accent: "text-[color:var(--guru-accent,#ffffff)]",
      white: "text-white"
    };
    return [
      ...s,
      t[e.size || "md"],
      r[e.color || "accent"]
    ].join(" ");
  }
  static getContainerClasses() {
    return "flex items-center justify-center";
  }
  static getAccessibilityProps(e) {
    return {
      role: "status",
      "aria-label": "Loading...",
      "aria-live": "polite"
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      variant: "spinner",
      color: "accent",
      speed: "normal"
    };
  }
}
export {
  n as LoaderCore
};
