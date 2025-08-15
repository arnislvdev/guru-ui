import { jsxs as i, jsx as o } from "react/jsx-runtime";
import "react";
import { cn as a } from "../utils/cn.js";
const n = ({ size: r = "md", label: e, className: t = "" }) => {
  const s = r === "sm" ? "h-4 w-4 border-2" : r === "lg" ? "h-6 w-6 border-2" : "h-5 w-5 border-2";
  return /* @__PURE__ */ i("div", { className: a("inline-flex items-center gap-3", t), role: "status", "aria-live": "polite", "aria-busy": "true", children: [
    /* @__PURE__ */ o(
      "span",
      {
        "aria-hidden": "true",
        className: a(
          "inline-block rounded-full border-white/20 border-t-[color:var(--guru-accent,#ffffff)] animate-spin",
          s
        ),
        style: { borderRightColor: "transparent", borderBottomColor: "transparent" }
      }
    ),
    e && /* @__PURE__ */ o("span", { className: "text-[color:var(--guru-body,#b3b3b3)]", children: e })
  ] });
};
n.displayName = "Loader";
export {
  n as Loader
};
