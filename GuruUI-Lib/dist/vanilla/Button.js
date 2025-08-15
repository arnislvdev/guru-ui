var u = Object.defineProperty;
var l = (n, t, e) => t in n ? u(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var s = (n, t, e) => l(n, typeof t != "symbol" ? t + "" : t, e);
import { ButtonCore as d } from "../core/ButtonCore.js";
class i {
  constructor(t = {}) {
    s(this, "element");
    s(this, "options");
    this.options = {
      variant: "primary",
      size: "md",
      disabled: !1,
      loading: !1,
      type: "button",
      fullWidth: !1,
      rounded: !1,
      text: "",
      ...t
    }, this.element = this.createButton(), this.setupEventListeners();
  }
  createButton() {
    const t = document.createElement("button");
    if (t.type = this.options.type, t.disabled = this.options.disabled, t.className = this.getButtonClasses(), this.options.iconLeft) {
      const e = document.createElement("span");
      e.innerHTML = this.options.iconLeft, e.className = "mr-2", t.appendChild(e);
    }
    if (this.options.text) {
      const e = document.createElement("span");
      e.textContent = this.options.text, e.className = "button-content", t.appendChild(e);
    }
    if (this.options.iconRight) {
      const e = document.createElement("span");
      e.innerHTML = this.options.iconRight, e.className = "ml-2", t.appendChild(e);
    }
    return t;
  }
  getButtonClasses() {
    return d.getClasses(this.options);
  }
  setupEventListeners() {
    this.options.onClick && this.element.addEventListener("click", (t) => {
      !this.options.disabled && !this.options.loading && this.options.onClick(t);
    }), this.options.onFocus && this.element.addEventListener("focus", this.options.onFocus), this.options.onBlur && this.element.addEventListener("blur", this.options.onBlur);
  }
  // Public methods
  mount(t) {
    t.appendChild(this.element);
  }
  unmount() {
    this.element.remove();
  }
  setText(t) {
    const e = this.element.querySelector(".button-content");
    e && (e.textContent = t);
  }
  setDisabled(t) {
    this.options.disabled = t, this.element.disabled = t;
  }
  setLoading(t) {
    this.options.loading = t, t ? (this.element.disabled = !0, this.element.innerHTML = '<span class="animate-spin mr-2">⏳</span>Loading...') : (this.element.disabled = this.options.disabled, this.createButton());
  }
  getElement() {
    return this.element;
  }
  destroy() {
    this.unmount();
  }
}
function p(n) {
  return new i(n);
}
function m() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-guru-button]").forEach((t) => {
      const e = t, o = {
        text: e.getAttribute("data-text") || "",
        variant: e.getAttribute("data-variant") || "primary",
        size: e.getAttribute("data-size") || "md",
        disabled: e.hasAttribute("data-disabled"),
        fullWidth: e.hasAttribute("data-full-width"),
        rounded: e.hasAttribute("data-rounded"),
        onClick: (a) => {
          e.dispatchEvent(new CustomEvent("guru-button-click", { detail: a }));
        }
      };
      new i(o).mount(e);
    });
  });
}
export {
  i as GuruButton,
  p as createButton,
  m as initializeButtons
};
