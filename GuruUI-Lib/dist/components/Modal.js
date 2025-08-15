import { jsxs as f, jsx as t } from "react/jsx-runtime";
import * as i from "react";
import { ModalCore as e } from "../core/ModalCore.js";
const B = ({
  open: r,
  onClose: s,
  title: d,
  children: y,
  initialFocusRef: m,
  size: k = "md",
  centered: x = !0,
  closeOnOverlayClick: C = !0,
  closeOnEscape: v = !0,
  showCloseButton: p = !0,
  backdrop: N = !0,
  animation: E = "fade"
}) => {
  const l = i.useCallback(
    (o) => {
      v && o.key === "Escape" && s();
    },
    [s, v]
  ), g = i.useRef(null);
  if (i.useEffect(() => {
    if (r)
      return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [r, l]), i.useEffect(() => {
    if (!r) return;
    const o = g.current;
    if (!o) return;
    const c = o.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    ), u = m?.current ?? c[0], b = c[c.length - 1];
    u?.focus();
    const h = (a) => {
      a.key === "Tab" && c.length !== 0 && (a.shiftKey ? document.activeElement === u && (a.preventDefault(), b?.focus()) : document.activeElement === b && (a.preventDefault(), u?.focus()));
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [r, m]), !r) return null;
  const n = { size: k, centered: x, animation: E }, w = e.getAccessibilityProps(n);
  return /* @__PURE__ */ f(
    "div",
    {
      className: e.getClasses(n),
      ...w,
      children: [
        N && /* @__PURE__ */ t(
          "div",
          {
            className: e.getBackdropClasses(n),
            onClick: C ? s : void 0
          }
        ),
        /* @__PURE__ */ f("div", { ref: g, className: e.getContentClasses(n), children: [
          d && /* @__PURE__ */ f("div", { className: e.getHeaderClasses(), children: [
            /* @__PURE__ */ t("h2", { className: "text-lg font-semibold text-[color:var(--guru-heading,#ffffff)]", id: "guru-ui-modal-title", children: d }),
            p && /* @__PURE__ */ t(
              "button",
              {
                className: e.getCloseButtonClasses(),
                onClick: s,
                "aria-label": "Close modal",
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: e.getBodyClasses(), children: y }),
          /* @__PURE__ */ t("div", { className: e.getFooterClasses(), children: /* @__PURE__ */ t(
            "button",
            {
              className: "inline-flex items-center justify-center rounded-[var(--guru-radius,0.5rem)] bg-[color:var(--guru-accent,#ffffff)] px-4 py-2 text-sm font-medium text-[color:var(--guru-on-accent,#0b0b0b)] hover:bg-[color:var(--guru-accent-hover,#e5e5e5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--guru-accent,#ffffff)]/60 focus-visible:ring-offset-2 ring-offset-[color:var(--guru-background,#121212)]",
              onClick: s,
              children: "Close"
            }
          ) })
        ] })
      ]
    }
  );
};
export {
  B as Modal
};
