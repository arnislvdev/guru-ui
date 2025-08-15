import { initializeButtons as t } from "./vanilla/Button.js";
import { GuruButton as d, createButton as a } from "./vanilla/Button.js";
import { initializeModals as o } from "./vanilla/Modal.js";
import { GuruModal as m, createModal as l } from "./vanilla/Modal.js";
import { generateId as p, getFocusableElements as s } from "./utils.js";
import { cn as x } from "./utils/cn.js";
function e() {
  typeof document > "u" || (t(), o());
}
typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("[data-guru-auto-init]") && e();
}) : document.querySelector("[data-guru-auto-init]") && e());
export {
  d as GuruButton,
  m as GuruModal,
  x as cn,
  a as createButton,
  l as createModal,
  p as generateId,
  s as getFocusableElements,
  e as initializeAllComponents,
  t as initializeButtons,
  o as initializeModals
};
