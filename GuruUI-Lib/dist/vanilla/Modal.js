var u = Object.defineProperty;
var p = (s, e, t) => e in s ? u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var a = (s, e, t) => p(s, typeof e != "symbol" ? e + "" : e, t);
import { ModalCore as o } from "../core/ModalCore.js";
class d {
  constructor(e = {}) {
    a(this, "element");
    a(this, "backdrop");
    a(this, "content");
    a(this, "options");
    a(this, "isOpen", !1);
    this.options = {
      ...o.getDefaultOptions(),
      ...e
    }, this.element = this.createModal(), this.backdrop = this.createBackdrop(), this.content = this.createContent(), this.setupEventListeners();
  }
  createModal() {
    const e = document.createElement("div");
    return e.className = o.getClasses(this.options), e;
  }
  createBackdrop() {
    const e = document.createElement("div");
    return e.className = o.getBackdropClasses(this.options), e;
  }
  createContent() {
    const e = document.createElement("div");
    if (e.className = o.getContentClasses(this.options), this.options.title) {
      const l = document.createElement("div");
      l.className = o.getHeaderClasses();
      const r = document.createElement("h2");
      if (r.textContent = this.options.title, r.className = "text-lg font-semibold text-[color:var(--guru-heading,#ffffff)]", l.appendChild(r), this.options.showCloseButton) {
        const c = document.createElement("button");
        c.className = o.getCloseButtonClasses(), c.textContent = "✕", c.setAttribute("aria-label", "Close modal"), c.addEventListener("click", () => this.close()), l.appendChild(c);
      }
      e.appendChild(l);
    }
    const t = document.createElement("div");
    t.className = o.getBodyClasses(), typeof this.options.content == "string" ? t.textContent = this.options.content : this.options.content && t.appendChild(this.options.content), e.appendChild(t);
    const n = document.createElement("div");
    n.className = o.getFooterClasses();
    const i = document.createElement("button");
    return i.className = "inline-flex items-center justify-center rounded-[var(--guru-radius,0.5rem)] bg-[color:var(--guru-accent,#ffffff)] px-4 py-2 text-sm font-medium text-[color:var(--guru-on-accent,#0b0b0b)] hover:bg-[color:var(--guru-accent-hover,#e5e5e5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--guru-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--guru-background,#121212)]", i.textContent = "Close", i.addEventListener("click", () => this.close()), n.appendChild(i), e.appendChild(n), e;
  }
  setupEventListeners() {
    this.options.closeOnOverlayClick && this.backdrop.addEventListener("click", () => this.close()), this.options.closeOnEscape && document.addEventListener("keydown", (e) => {
      e.key === "Escape" && this.isOpen && this.close();
    });
  }
  open() {
    if (this.isOpen) return;
    this.isOpen = !0, document.body.appendChild(this.element), this.options.backdrop && document.body.appendChild(this.backdrop);
    const e = this.element.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    e.length > 0 && e[0]?.focus(), this.options.onOpen?.();
  }
  close() {
    this.isOpen && (this.isOpen = !1, this.element.parentNode && this.element.parentNode.removeChild(this.element), this.backdrop.parentNode && this.backdrop.parentNode.removeChild(this.backdrop), this.options.onClose?.());
  }
  setContent(e) {
    this.options.content = e;
    const t = this.content.querySelector(`.${o.getBodyClasses().split(" ")[0]}`);
    t && (t.innerHTML = "", typeof e == "string" ? t.textContent = e : t.appendChild(e));
  }
  setTitle(e) {
    this.options.title = e;
    const t = this.content.querySelector(`.${o.getHeaderClasses().split(" ")[0]}`);
    if (t) {
      const n = t.querySelector("h2");
      n && (n.textContent = e);
    }
  }
  isModalOpen() {
    return this.isOpen;
  }
  destroy() {
    this.close();
  }
}
function m(s) {
  return new d(s);
}
function b() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-guru-modal]").forEach((e) => {
      const t = e, n = {
        title: t.getAttribute("data-title") || "",
        content: t.getAttribute("data-content") || "",
        size: t.getAttribute("data-size") || "md",
        centered: t.hasAttribute("data-centered"),
        closeOnOverlayClick: t.hasAttribute("data-close-on-overlay"),
        closeOnEscape: t.hasAttribute("data-close-on-escape"),
        showCloseButton: t.hasAttribute("data-show-close"),
        backdrop: t.hasAttribute("data-backdrop"),
        animation: t.getAttribute("data-animation") || "fade",
        onClose: () => {
          t.dispatchEvent(new CustomEvent("guru-modal-close"));
        }
      }, i = new d(n);
      t.guruModal = i, t.openModal = () => i.open(), t.closeModal = () => i.close();
    });
  });
}
export {
  d as GuruModal,
  m as createModal,
  b as initializeModals
};
