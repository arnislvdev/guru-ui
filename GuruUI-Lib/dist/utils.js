import { cn as m, cx as g } from "./utils/cn.js";
const o = typeof window > "u", i = !o;
function s(e, t) {
  let n = null;
  return (...r) => {
    n && clearTimeout(n), n = setTimeout(() => e(...r), t);
  };
}
function c(e, t, n, r) {
  return e ? (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)) : () => {
  };
}
let u = 0;
function d(e = "guru") {
  return `${e}-${++u}-${Date.now().toString(36)}`;
}
function l(e) {
  const t = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(", ");
  return Array.from(e.querySelectorAll(t));
}
function a(e, t) {
  try {
    return JSON.parse(e);
  } catch {
    return t;
  }
}
function f(e) {
  if (!i) return !1;
  const t = e.getBoundingClientRect();
  return t.top >= 0 && t.left >= 0 && t.bottom <= window.innerHeight && t.right <= window.innerWidth;
}
export {
  m as cn,
  g as cx,
  s as debounce,
  d as generateId,
  l as getFocusableElements,
  i as isBrowser,
  f as isInViewport,
  o as isServer,
  a as safeJsonParse,
  c as useEventListener
};
