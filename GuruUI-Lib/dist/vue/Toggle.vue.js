import { defineComponent as T, ref as z, computed as s, createElementBlock as o, openBlock as n, normalizeClass as i, createElementVNode as u, createCommentVNode as r, mergeProps as j, normalizeStyle as q, toDisplayString as c } from "vue";
import { ToggleCore as a } from "../core/ToggleCore.js";
const A = ["disabled"], P = {
  key: 0,
  class: "ml-3"
}, L = /* @__PURE__ */ T({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    label: {},
    description: {},
    size: { default: "md" },
    variant: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(m, { emit: p }) {
    const e = m, d = p, g = z(), t = s(() => ({
      size: e.size,
      variant: e.variant,
      disabled: e.disabled,
      required: e.required,
      label: e.label || "",
      description: e.description || "",
      loading: e.loading
    })), b = s(() => a.getContainerClasses()), f = s(() => [
      a.getToggleClasses(t.value),
      e.modelValue && a.getToggleActiveClasses(t.value)
    ].filter(Boolean).join(" ")), v = s(() => [
      a.getThumbClasses(t.value),
      "absolute left-0.5 top-1/2 -translate-y-1/2 transform"
    ].join(" ")), C = s(() => "absolute inset-0 flex items-center justify-center " + a.getLoadingClasses()), y = s(() => a.getLabelClasses(t.value)), h = s(() => a.getDescriptionClasses(t.value)), k = s(() => ({
      transform: e.modelValue ? `translateX(${a.getThumbActiveClasses(t.value)})` : "translateX(0.125rem)"
    })), V = s(() => ({
      ...a.getAccessibilityProps(t.value),
      "aria-checked": e.modelValue
    })), B = () => {
      if (e.disabled || e.loading) return;
      const l = !e.modelValue;
      d("update:modelValue", l), d("change", l);
    };
    return (l, S) => (n(), o("div", {
      class: i(b.value)
    }, [
      u("button", j({
        ref_key: "buttonRef",
        ref: g,
        type: "button",
        disabled: l.disabled || l.loading,
        class: f.value
      }, V.value, { onClick: B }), [
        u("span", {
          class: i(v.value),
          style: q(k.value)
        }, null, 6),
        l.loading ? (n(), o("span", {
          key: 0,
          class: i(C.value)
        }, " ⏳ ", 2)) : r("", !0)
      ], 16, A),
      l.label || l.description ? (n(), o("div", P, [
        l.label ? (n(), o("div", {
          key: 0,
          class: i(y.value)
        }, c(l.label), 3)) : r("", !0),
        l.description ? (n(), o("div", {
          key: 1,
          class: i(h.value)
        }, c(l.description), 3)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
});
export {
  L as default
};
