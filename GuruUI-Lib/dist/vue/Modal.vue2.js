import { defineComponent as D, ref as N, computed as t, onMounted as P, nextTick as g, onUnmounted as V, watch as $, createBlock as K, openBlock as l, Teleport as R, createVNode as j, Transition as q, withCtx as F, createElementBlock as f, createCommentVNode as v, mergeProps as H, createElementVNode as r, normalizeClass as a, toDisplayString as I, renderSlot as k } from "vue";
import { ModalCore as n } from "../core/ModalCore.js";
const G = /* @__PURE__ */ D({
  __name: "Modal",
  props: {
    open: { type: Boolean },
    title: {},
    size: { default: "md" },
    centered: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !0 },
    backdrop: { type: Boolean, default: !0 },
    animation: { default: "fade" }
  },
  emits: ["close", "update:open"],
  setup(h, { emit: B }) {
    const s = h, y = B, m = N(), E = `modal-title-${Math.random().toString(36).substr(2, 9)}`, c = t(() => ({
      size: s.size,
      centered: s.centered,
      animation: s.animation
    })), w = t(() => n.getClasses(c.value)), L = t(() => n.getBackdropClasses(c.value)), O = t(() => n.getContentClasses(c.value)), x = t(() => n.getHeaderClasses()), T = t(() => n.getBodyClasses()), z = t(() => n.getFooterClasses()), M = t(() => n.getCloseButtonClasses()), S = t(() => n.getAccessibilityProps(c.value)), u = () => {
      y("close"), y("update:open", !1);
    }, A = () => {
      s.closeOnOverlayClick && u();
    }, i = (e) => {
      s.closeOnEscape && e.key === "Escape" && u();
    }, p = t(() => m.value ? Array.from(
      m.value.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ) : []), d = (e) => {
      if (e.key !== "Tab") return;
      const o = p.value;
      if (o.length === 0) return;
      const b = o[0], C = o[o.length - 1];
      e.shiftKey ? document.activeElement === b && (e.preventDefault(), C?.focus()) : document.activeElement === C && (e.preventDefault(), b?.focus());
    };
    return P(() => {
      s.open && (document.addEventListener("keydown", i), document.addEventListener("keydown", d), g(() => {
        const e = p.value;
        e.length > 0 && e[0]?.focus();
      }));
    }), V(() => {
      document.removeEventListener("keydown", i), document.removeEventListener("keydown", d);
    }), $(() => s.open, (e) => {
      e ? (document.addEventListener("keydown", i), document.addEventListener("keydown", d), g(() => {
        const o = p.value;
        o.length > 0 && o[0]?.focus();
      })) : (document.removeEventListener("keydown", i), document.removeEventListener("keydown", d));
    }), (e, o) => (l(), K(R, { to: "body" }, [
      j(q, { name: "modal" }, {
        default: F(() => [
          e.open ? (l(), f("div", H({
            key: 0,
            class: w.value
          }, S.value), [
            e.backdrop ? (l(), f("div", {
              key: 0,
              class: a(L.value),
              onClick: A
            }, null, 2)) : v("", !0),
            r("div", {
              ref_key: "containerRef",
              ref: m,
              class: a(O.value)
            }, [
              e.title ? (l(), f("div", {
                key: 0,
                class: a(x.value)
              }, [
                r("h2", {
                  id: E,
                  class: "text-lg font-semibold text-[color:var(--guru-heading,#ffffff)]"
                }, I(e.title), 1),
                e.showCloseButton ? (l(), f("button", {
                  key: 0,
                  class: a(M.value),
                  onClick: u,
                  "aria-label": "Close modal"
                }, " ✕ ", 2)) : v("", !0)
              ], 2)) : v("", !0),
              r("div", {
                class: a(T.value)
              }, [
                k(e.$slots, "default", {}, void 0, !0)
              ], 2),
              r("div", {
                class: a(z.value)
              }, [
                k(e.$slots, "footer", {}, () => [
                  r("button", {
                    class: "inline-flex items-center justify-center rounded-[var(--guru-radius,0.5rem)] bg-[color:var(--guru-accent,#ffffff)] px-4 py-2 text-sm font-medium text-[color:var(--guru-on-accent,#0b0b0b)] hover:bg-[color:var(--guru-accent-hover,#e5e5e5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--guru-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--guru-background,#121212)]",
                    onClick: u
                  }, " Close ")
                ], !0)
              ], 2)
            ], 2)
          ], 16)) : v("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  G as default
};
