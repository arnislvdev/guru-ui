class o {
  static getClasses(e) {
    const t = [
      "inline-flex items-center justify-center font-medium transition-colors duration-200"
    ], r = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base"
    }, s = {
      accent: "bg-[color:var(--guru-accent,#ffffff)] text-[color:var(--guru-onAccent,#0b0b0b)]",
      success: "bg-green-600 text-white",
      warning: "bg-yellow-600 text-white",
      danger: "bg-red-600 text-white",
      outline: "border border-[color:var(--guru-accent,#ffffff)]/20 text-[color:var(--guru-accent,#ffffff)]",
      subtle: "bg-[color:var(--guru-body,#b3b3b3)]/10 text-[color:var(--guru-body,#b3b3b3)]"
    }, a = e.rounded ? "rounded-full" : "rounded-md";
    return [
      ...t,
      r[e.size || "md"],
      s[e.variant || "accent"],
      a
    ].join(" ");
  }
  static getDefaultOptions() {
    return {
      variant: "accent",
      size: "md",
      rounded: !1
    };
  }
}
export {
  o as BadgeCore
};
