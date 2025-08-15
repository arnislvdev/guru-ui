class n {
  static getClasses(s) {
    const e = [
      "relative inline-block bg-[color:var(--guru-body,#b3b3b3)]/10 text-[color:var(--guru-heading,#ffffff)] font-medium"
    ], r = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
      xl: "w-16 h-16 text-lg",
      "2xl": "w-20 h-20 text-xl"
    }, l = {
      circle: "rounded-full",
      square: "rounded",
      rounded: "rounded-lg"
    }, t = s.ring ? this.getRingClasses(s.ringColor) : "";
    return [
      ...e,
      r[s.size || "md"],
      l[s.shape || "circle"],
      t
    ].join(" ");
  }
  static getRingClasses(s) {
    return [
      "ring-2 ring-offset-2 ring-offset-[color:var(--guru-background,#121212)]",
      {
        accent: "ring-[color:var(--guru-accent,#ffffff)]",
        success: "ring-green-500",
        warning: "ring-yellow-500",
        danger: "ring-red-500"
      }[s || "accent"]
    ].join(" ");
  }
  static getImageClasses(s) {
    const e = [
      "w-full h-full object-cover"
    ], r = {
      circle: "rounded-full",
      square: "rounded",
      rounded: "rounded-lg"
    };
    return [
      ...e,
      r[s.shape || "circle"]
    ].join(" ");
  }
  static getFallbackClasses(s) {
    const e = [
      "flex items-center justify-center w-full h-full"
    ], r = {
      circle: "rounded-full",
      square: "rounded",
      rounded: "rounded-lg"
    };
    return [
      ...e,
      r[s.shape || "circle"]
    ].join(" ");
  }
  static getStatusClasses(s) {
    const e = [
      "absolute bottom-0 right-0 block rounded-full ring-2 ring-[color:var(--guru-background,#121212)]"
    ], r = {
      xs: "w-1.5 h-1.5",
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
      xl: "w-4 h-4",
      "2xl": "w-5 h-5"
    }, l = {
      online: "bg-green-400",
      offline: "bg-gray-400",
      away: "bg-yellow-400",
      busy: "bg-red-400"
    };
    return [
      ...e,
      r[s.size || "md"],
      l[s.status || "online"]
    ].join(" ");
  }
  static getAccessibilityProps(s) {
    return {
      role: "img",
      "aria-label": "User avatar"
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      shape: "circle",
      status: "online",
      ring: !1,
      ringColor: "accent"
    };
  }
}
export {
  n as AvatarCore
};
