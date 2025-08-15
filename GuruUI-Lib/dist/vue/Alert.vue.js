import { defineComponent as z, computed as s, createElementBlock as o, openBlock as n, mergeProps as A, createCommentVNode as r, createElementVNode as c, normalizeClass as l, toDisplayString as d, renderSlot as P } from "vue";
import { AlertCore as i } from "../core/AlertCore.js";
const N = /* @__PURE__ */ z({
  __name: "Alert",
  props: {
    title: {},
    dismissible: { type: Boolean, default: !1 },
    onDismiss: {},
    variant: { default: "info" },
    size: { default: "md" },
    icon: { type: Boolean, default: !0 },
    border: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 }
  },
  emits: ["dismiss"],
  setup(u, { emit: m }) {
    const e = u, p = m, v = {
      info: "ℹ️",
      success: "✅",
      warning: "⚠️",
      error: "❌"
    }, a = s(() => ({
      variant: e.variant,
      size: e.size,
      dismissible: e.dismissible,
      icon: e.icon,
      border: e.border,
      rounded: e.rounded
    })), C = s(() => i.getClasses(a.value)), f = s(() => i.getIconClasses(a.value)), b = s(() => i.getContentClasses()), g = s(() => i.getTitleClasses()), y = s(() => i.getDescriptionClasses()), B = s(() => i.getDismissButtonClasses(a.value)), D = s(() => i.getAccessibilityProps(a.value)), k = () => {
      p("dismiss"), e.onDismiss?.();
    };
    return (t, h) => (n(), o("div", A({ class: C.value }, D.value), [
      t.icon ? (n(), o("span", {
        key: 0,
        class: l(f.value)
      }, d(v[t.variant]), 3)) : r("", !0),
      c("div", {
        class: l(b.value)
      }, [
        t.title ? (n(), o("div", {
          key: 0,
          class: l(g.value)
        }, d(t.title), 3)) : r("", !0),
        c("div", {
          class: l(y.value)
        }, [
          P(t.$slots, "default")
        ], 2)
      ], 2),
      t.dismissible && t.onDismiss ? (n(), o("button", {
        key: 1,
        class: l(B.value),
        onClick: k,
        "aria-label": "Dismiss alert"
      }, " ✕ ", 2)) : r("", !0)
    ], 16));
  }
});
export {
  N as default
};
