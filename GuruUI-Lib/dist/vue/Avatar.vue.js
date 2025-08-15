import { defineComponent as v, computed as a, createElementBlock as o, openBlock as n, mergeProps as g, createCommentVNode as C, normalizeClass as r, createElementVNode as b, toDisplayString as k } from "vue";
import { AvatarCore as t } from "../core/AvatarCore.js";
const h = ["aria-label"], y = ["src", "alt"], _ = { class: "text-xs font-semibold" }, P = /* @__PURE__ */ v({
  __name: "Avatar",
  props: {
    src: {},
    name: {},
    fallback: {},
    size: { default: "md" },
    shape: { default: "circle" },
    status: { default: "online" },
    ring: { type: Boolean, default: !1 },
    ringColor: { default: "accent" }
  },
  setup(i) {
    const s = i, l = a(() => ({
      size: s.size,
      shape: s.shape,
      status: s.status,
      ring: s.ring,
      ringColor: s.ringColor
    })), c = a(() => s.name ? s.name.split(" ").filter(Boolean).map((e) => e[0]).join("").slice(0, 2).toUpperCase() : ""), u = a(() => t.getClasses(l.value)), p = a(() => t.getImageClasses(l.value)), m = a(() => t.getFallbackClasses(l.value)), d = a(() => t.getStatusClasses(l.value)), f = a(() => t.getAccessibilityProps(l.value));
    return (e, z) => (n(), o("div", g({ class: u.value }, f.value, { "aria-label": e.name }), [
      e.src ? (n(), o("img", {
        key: 0,
        src: e.src,
        alt: e.name,
        class: r(p.value)
      }, null, 10, y)) : (n(), o("div", {
        key: 1,
        class: r(m.value)
      }, [
        b("span", _, k(e.fallback || c.value || "?"), 1)
      ], 2)),
      e.status ? (n(), o("span", {
        key: 2,
        class: r(d.value)
      }, null, 2)) : C("", !0)
    ], 16, h));
  }
});
export {
  P as default
};
