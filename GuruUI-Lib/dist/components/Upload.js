import { jsxs as g, jsx as a } from "react/jsx-runtime";
import * as n from "react";
import { cn as m } from "../utils/cn.js";
const h = ({ onFiles: s, accept: t, multiple: i = !0, className: f = "", label: d = "Drag & drop files or click to upload" }) => {
  const l = n.useRef(null), [c, o] = n.useState(!1), u = (e) => {
    e.preventDefault(), o(!1);
    const r = Array.from(e.dataTransfer.files);
    r.length && s?.(r);
  }, p = (e) => {
    const r = Array.from(e.target.files ?? []);
    r.length && s?.(r);
  };
  return /* @__PURE__ */ g(
    "div",
    {
      onDragOver: (e) => {
        e.preventDefault(), o(!0);
      },
      onDragLeave: () => o(!1),
      onDrop: u,
      onClick: () => l.current?.click(),
      className: m("cursor-pointer rounded-lg border border-dashed border-white/15 bg-white/5 px-6 py-10 text-center hover:bg-white/10", c && "bg-white/10", f),
      children: [
        /* @__PURE__ */ a("div", { className: "text-[color:var(--guru-heading,#ffffff)]", children: d }),
        /* @__PURE__ */ a("div", { className: "mt-1 text-sm text-[color:var(--guru-body,#b3b3b3)]", children: t ? `Accepted: ${t}` : "Any file" }),
        /* @__PURE__ */ a("input", { ref: l, type: "file", accept: t, multiple: i, className: "hidden", onChange: p })
      ]
    }
  );
};
h.displayName = "Upload";
export {
  h as Upload
};
