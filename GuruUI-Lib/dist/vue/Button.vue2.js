import { defineComponent as m, computed as l, createElementBlock as n, openBlock as a, normalizeClass as b, renderSlot as s, createCommentVNode as y } from "vue";
import { ButtonCore as i } from "../core/ButtonCore.js";
const B = ["disabled", "type"], h = {
  key: 0,
  class: "button-content"
}, v = /* @__PURE__ */ m({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    iconOnly: { type: Boolean },
    fullWidth: { type: Boolean, default: !1 }
  },
  emits: ["click", "focus", "blur"],
  setup(d, { emit: r }) {
    const t = d, o = r, u = l(() => i.getClasses(t));
    l(() => i.getAccessibilityProps(t));
    const c = (e) => {
      !t.disabled && !t.loading && o("click", e);
    }, p = (e) => {
      o("focus", e);
    }, f = (e) => {
      o("blur", e);
    };
    return (e, C) => (a(), n("button", {
      class: b(u.value),
      disabled: e.disabled,
      type: e.type,
      onClick: c,
      onFocus: p,
      onBlur: f
    }, [
      s(e.$slots, "icon-left", {}, void 0, !0),
      e.$slots.default ? (a(), n("span", h, [
        s(e.$slots, "default", {}, void 0, !0)
      ])) : y("", !0),
      s(e.$slots, "icon-right", {}, void 0, !0)
    ], 42, B));
  }
});
export {
  v as default
};
