import { defineComponent as w, computed as e, createElementBlock as r, openBlock as u, normalizeClass as o, createCommentVNode as n, createElementVNode as c, toDisplayString as i, mergeProps as B } from "vue";
import { ProgressCore as s } from "../core/ProgressCore.js";
const L = /* @__PURE__ */ w({
  __name: "Progress",
  props: {
    value: { default: 0 },
    max: { default: 100 },
    label: {},
    size: { default: "md" },
    variant: { default: "default" },
    showLabel: { type: Boolean, default: !0 },
    showValue: { type: Boolean, default: !1 },
    animated: { type: Boolean, default: !1 },
    striped: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !0 },
    height: { default: "normal" }
  },
  setup(v) {
    const a = v, l = e(() => ({
      size: a.size,
      variant: a.variant,
      showLabel: a.showLabel,
      showValue: a.showValue,
      animated: a.animated,
      striped: a.striped,
      rounded: a.rounded,
      height: a.height
    })), d = e(() => s.calculatePercentage(a.value, a.max));
    e(() => s.getProgressColor(d.value));
    const p = e(() => s.getContainerClasses(l.value)), m = e(() => s.getInfoClasses(l.value)), f = e(() => s.getLabelClasses(l.value)), g = e(() => s.getValueClasses(l.value)), h = e(() => s.getTrackClasses(l.value)), C = e(() => s.getBarClasses(l.value)), b = e(() => ({
      width: `${d.value}%`
    })), y = e(() => s.getAccessibilityProps(l.value));
    return (t, P) => (u(), r("div", {
      class: o(p.value)
    }, [
      t.showLabel || t.showValue ? (u(), r("div", {
        key: 0,
        class: o(m.value)
      }, [
        t.showLabel ? (u(), r("div", {
          key: 0,
          class: o(f.value)
        }, i(t.label || "Progress"), 3)) : n("", !0),
        t.showValue ? (u(), r("div", {
          key: 1,
          class: o(g.value)
        }, i(t.value) + "/" + i(t.max), 3)) : n("", !0)
      ], 2)) : n("", !0),
      c("div", {
        class: o(h.value)
      }, [
        c("div", B({
          class: C.value,
          style: b.value
        }, y.value), null, 16)
      ], 2)
    ], 2));
  }
});
export {
  L as default
};
