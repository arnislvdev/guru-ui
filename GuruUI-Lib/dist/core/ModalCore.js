class n {
  static getClasses(e) {
    const t = [
      "fixed inset-0 z-50 flex items-center justify-center p-4"
    ], s = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full m-4"
    }, a = e.centered ? "items-center justify-center" : "";
    return [
      ...t,
      s[e.size || "md"],
      a
    ].join(" ");
  }
  static getBackdropClasses(e) {
    const t = [
      "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
    ], s = {
      fade: "animate-fade-in",
      slide: "animate-slide-in",
      scale: "animate-scale-in",
      none: ""
    };
    return [
      ...t,
      s[e.animation || "fade"]
    ].join(" ");
  }
  static getContentClasses(e) {
    const t = [
      "relative bg-[color:var(--guru-background,#121212)] border border-[color:var(--guru-body,#b3b3b3)]/10 rounded-lg shadow-2xl transition-all duration-200"
    ], s = {
      fade: "animate-fade-in-up",
      slide: "animate-slide-in-up",
      scale: "animate-scale-in",
      none: ""
    };
    return [
      ...t,
      s[e.animation || "fade"]
    ].join(" ");
  }
  static getHeaderClasses() {
    return "flex items-center justify-between p-4 border-b border-[color:var(--guru-body,#b3b3b3)]/10";
  }
  static getBodyClasses() {
    return "p-4";
  }
  static getFooterClasses() {
    return "flex items-center justify-end gap-2 p-4 border-t border-[color:var(--guru-body,#b3b3b3)]/10";
  }
  static getCloseButtonClasses() {
    return "p-1 rounded-md hover:bg-[color:var(--guru-body,#b3b3b3)]/10 transition-colors";
  }
  static getAccessibilityProps(e) {
    return {
      role: "dialog",
      "aria-modal": !0,
      "aria-labelledby": "modal-title",
      "aria-describedby": "modal-description"
    };
  }
  static getDefaultOptions() {
    return {
      size: "md",
      centered: !0,
      closeOnOverlayClick: !0,
      closeOnEscape: !0,
      showCloseButton: !0,
      backdrop: !0,
      animation: "fade"
    };
  }
}
export {
  n as ModalCore
};
