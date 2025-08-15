import { jsx as t } from "react/jsx-runtime";
import "react";
import { cn as i } from "../utils/cn.js";
const g = ({
  content: u,
  className: m = ""
}) => {
  const f = (h) => {
    const d = h.split(`
`), s = [];
    let n = !1, a = [], c = "";
    for (let r = 0; r < d.length; r++) {
      const e = d[r];
      if (e.startsWith("```"))
        if (!n)
          n = !0, c = e.slice(3).trim(), a = [];
        else {
          n = !1, s.push(
            /* @__PURE__ */ t("pre", { className: "bg-[#0f0f0f] border border-white/10 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ t("code", { className: i(
              "text-sm",
              c && `language-${c}`
            ), children: a.join(`
`) }) }, `code-${r}`)
          );
          continue;
        }
      if (n) {
        a.push(e);
        continue;
      }
      if (e.startsWith("#")) {
        const l = e.match(/^#+/)?.[0].length || 1, p = e.replace(/^#+\s*/, ""), b = `h${Math.min(l, 6)}`;
        s.push(
          /* @__PURE__ */ t(
            b,
            {
              className: i(
                "font-bold text-[color:var(--guru-heading,#ffffff)] mb-2",
                l === 1 && "text-3xl",
                l === 2 && "text-2xl",
                l === 3 && "text-xl",
                l === 4 && "text-lg",
                l >= 5 && "text-base"
              ),
              children: p
            },
            `heading-${r}`
          )
        );
        continue;
      }
      let o = e.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`(.*?)`/g, '<code className="bg-white/10 px-1 py-0.5 rounded text-sm">$1</code>');
      if (o = o.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" className="text-[color:var(--guru-accent,#ffffff)] hover:underline">$1</a>'), e.match(/^[\s]*[-*+]\s/)) {
        e.replace(/^[\s]*[-*+]\s/, ""), s.push(
          /* @__PURE__ */ t("li", { className: "ml-4 text-[color:var(--guru-body,#b3b3b3)]", children: /* @__PURE__ */ t("span", { dangerouslySetInnerHTML: { __html: o.replace(/^[\s]*[-*+]\s/, "") } }) }, `list-${r}`)
        );
        continue;
      }
      if (e.match(/^[\s]*\d+\.\s/)) {
        e.replace(/^[\s]*\d+\.\s/, ""), s.push(
          /* @__PURE__ */ t("li", { className: "ml-4 text-[color:var(--guru-body,#b3b3b3)]", children: /* @__PURE__ */ t("span", { dangerouslySetInnerHTML: { __html: o.replace(/^[\s]*\d+\.\s/, "") } }) }, `list-${r}`)
        );
        continue;
      }
      if (e.startsWith(">")) {
        const l = e.replace(/^>\s*/, "");
        s.push(
          /* @__PURE__ */ t(
            "blockquote",
            {
              className: "border-l-4 border-[color:var(--guru-accent,#ffffff)] pl-4 italic text-[color:var(--guru-body,#b3b3b3)] my-2",
              children: l
            },
            `quote-${r}`
          )
        );
        continue;
      }
      if (e.match(/^[-*_]{3,}$/)) {
        s.push(
          /* @__PURE__ */ t("hr", { className: "border-white/10 my-4" }, `hr-${r}`)
        );
        continue;
      }
      if (e.trim() === "") {
        s.push(/* @__PURE__ */ t("br", {}, `br-${r}`));
        continue;
      }
      e.trim() && s.push(
        /* @__PURE__ */ t(
          "p",
          {
            className: "text-[color:var(--guru-body,#b3b3b3)] mb-2 leading-relaxed",
            dangerouslySetInnerHTML: { __html: o }
          },
          `p-${r}`
        )
      );
    }
    return s;
  };
  return /* @__PURE__ */ t("div", { className: i("prose prose-invert max-w-none", m), children: f(u) });
};
g.displayName = "Markdown";
export {
  g as Markdown
};
