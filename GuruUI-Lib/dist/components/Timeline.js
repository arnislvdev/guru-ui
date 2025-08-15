import { jsx as r, jsxs as t } from "react/jsx-runtime";
import * as o from "react";
import { cn as l } from "../utils/cn.js";
import { Circle as n } from "lucide-react";
const f = ({
  items: a,
  orientation: i = "vertical",
  className: s = ""
}) => {
  const d = (e) => {
    switch (e) {
      case "success":
        return "text-green-500 border-green-500";
      case "warning":
        return "text-yellow-500 border-yellow-500";
      case "error":
        return "text-red-500 border-red-500";
      default:
        return "text-[color:var(--guru-accent,#ffffff)] border-[color:var(--guru-accent,#ffffff)]";
    }
  };
  return i === "horizontal" ? /* @__PURE__ */ r("div", { className: l("w-full", s), children: /* @__PURE__ */ r("div", { className: "flex items-center", children: a.map((e, c) => /* @__PURE__ */ t(o.Fragment, { children: [
    /* @__PURE__ */ t("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ r("div", { className: l(
        "flex items-center justify-center w-8 h-8 rounded-full border-2 bg-[#0f0f0f]",
        d(e.status),
        e.disabled && "opacity-50"
      ), children: e.icon || /* @__PURE__ */ r(n, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ t("div", { className: "mt-2 text-center max-w-24", children: [
        /* @__PURE__ */ r("p", { className: "text-sm font-medium text-[color:var(--guru-heading,#ffffff)] truncate", children: e.title }),
        e.description && /* @__PURE__ */ r("p", { className: "text-xs text-[color:var(--guru-body,#b3b3b3)] truncate", children: e.description }),
        e.date && /* @__PURE__ */ r("p", { className: "text-xs text-[color:var(--guru-body,#b3b3b3)] mt-1", children: e.date })
      ] })
    ] }),
    c < a.length - 1 && /* @__PURE__ */ r("div", { className: "flex-1 h-px bg-white/10 mx-4" })
  ] }, e.id)) }) }) : /* @__PURE__ */ r("div", { className: l("w-full", s), children: a.map((e, c) => /* @__PURE__ */ t("div", { className: "relative", children: [
    c < a.length - 1 && /* @__PURE__ */ r("div", { className: "absolute left-4 top-8 w-px h-8 bg-white/10" }),
    /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ r("div", { className: l(
        "flex items-center justify-center w-8 h-8 rounded-full border-2 bg-[#0f0f0f] flex-shrink-0",
        d(e.status),
        e.disabled && "opacity-50"
      ), children: e.icon || /* @__PURE__ */ r(n, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ t("div", { className: "flex-1 min-w-0 pb-6", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ r("h3", { className: "text-sm font-medium text-[color:var(--guru-heading,#ffffff)]", children: e.title }),
          e.date && /* @__PURE__ */ r("span", { className: "text-xs text-[color:var(--guru-body,#b3b3b3)]", children: e.date })
        ] }),
        e.description && /* @__PURE__ */ r("p", { className: "text-sm text-[color:var(--guru-body,#b3b3b3)]", children: e.description })
      ] })
    ] })
  ] }, e.id)) });
};
f.displayName = "Timeline";
export {
  f as Timeline
};
