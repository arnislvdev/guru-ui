import { defineComponent as x, ref as z, computed as t, watch as w, createElementBlock as i, openBlock as o, normalizeClass as r, createElementVNode as c, createCommentVNode as u, mergeProps as D, toDisplayString as m } from "vue";
import { CheckboxCore as a } from "../core/CheckboxCore.js";
const P = { class: "group inline-flex items-start select-none" }, $ = ["disabled", "checked", "indeterminate", "required"], E = {
  key: 0,
  class: "leading-snug ml-3"
}, R = /* @__PURE__ */ x({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean },
    label: {},
    description: {},
    size: { default: "md" },
    variant: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(b, { emit: f }) {
    const s = b, p = f, d = z(), n = t(() => ({
      size: s.size,
      variant: s.variant,
      disabled: s.disabled,
      indeterminate: s.indeterminate,
      required: s.required,
      label: s.label || "",
      description: s.description || ""
    })), v = t(() => a.getContainerClasses()), C = t(() => `relative inline-flex flex-none ${a.getCheckboxClasses(n.value)}`), h = t(() => `peer absolute inset-0 cursor-pointer appearance-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${a.getCheckboxClasses(n.value)}`), g = t(() => `pointer-events-none absolute inset-0 m-auto translate-y-[1px] opacity-0 transition-opacity duration-200 peer-checked:opacity-100 ${a.getIconClasses(n.value)}`), k = t(() => a.getLabelClasses(n.value)), y = t(() => a.getDescriptionClasses(n.value)), B = t(() => a.getAccessibilityProps(n.value)), q = (e) => {
      const l = e.target;
      p("update:modelValue", l.checked), p("change", l.checked);
    }, V = (e) => {
      s.disabled && e.preventDefault();
    };
    return w(() => s.indeterminate, (e) => {
      d.value && (d.value.indeterminate = e);
    }, { immediate: !0 }), (e, l) => (o(), i("div", {
      class: r(v.value)
    }, [
      c("label", P, [
        c("span", {
          class: r(C.value)
        }, [
          c("input", D({
            ref_key: "inputRef",
            ref: d,
            type: "checkbox",
            disabled: e.disabled,
            checked: e.modelValue,
            indeterminate: e.indeterminate,
            required: e.required,
            class: h.value
          }, B.value, {
            onChange: q,
            onClick: V
          }), null, 16, $),
          (o(), i("svg", {
            class: r(g.value),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "3"
          }, l[0] || (l[0] = [
            c("path", {
              d: "M5 13l4 4L19 7",
              class: "text-[color:var(--guru-on-accent,#0b0b0b)]"
            }, null, -1)
          ]), 2))
        ], 2),
        e.label || e.description ? (o(), i("span", E, [
          e.label ? (o(), i("span", {
            key: 0,
            class: r(k.value)
          }, m(e.label), 3)) : u("", !0),
          e.description ? (o(), i("span", {
            key: 1,
            class: r(y.value)
          }, m(e.description), 3)) : u("", !0)
        ])) : u("", !0)
      ])
    ], 2));
  }
});
export {
  R as default
};
