import { jsx as s } from "react/jsx-runtime";
import * as o from "react";
import { CSS_VARS as t } from "../types/common.js";
const d = {
  background: "#0a0a0a",
  foreground: "#fafafa",
  heading: "#ffffff",
  body: "#a3a3a3",
  accent: "#ffffff",
  accentHover: "#e5e5e5",
  onAccent: "#0a0a0a",
  radius: "0.5rem",
  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
}, f = o.createContext(d), y = ({
  theme: r,
  children: u,
  global: a = !1
}) => {
  const e = o.useMemo(() => ({
    ...d,
    ...r
  }), [r]), n = o.useMemo(() => ({
    [t.background]: e.background,
    [t.foreground]: e.foreground,
    [t.heading]: e.heading,
    [t.body]: e.body,
    [t.accent]: e.accent,
    [t.accentHover]: e.accentHover,
    [t.onAccent]: e.onAccent,
    [t.radius]: e.radius,
    [t.font]: e.fontFamily
  }), [e]);
  return o.useEffect(() => {
    if (!(!a || typeof document > "u"))
      return Object.entries(n).forEach(([c, i]) => {
        document.documentElement.style.setProperty(c, i);
      }), () => {
        Object.keys(n).forEach((c) => {
          document.documentElement.style.removeProperty(c);
        });
      };
  }, [n, a]), a ? /* @__PURE__ */ s(f.Provider, { value: e, children: u }) : /* @__PURE__ */ s(f.Provider, { value: e, children: /* @__PURE__ */ s(
    "div",
    {
      style: n,
      className: "guru-ui-theme",
      children: u
    }
  ) });
}, v = () => {
  const r = o.useContext(f);
  if (!r)
    throw new Error("useTheme must be used within a ThemeProvider");
  return r;
};
export {
  y as ThemeProvider,
  v as useTheme
};
