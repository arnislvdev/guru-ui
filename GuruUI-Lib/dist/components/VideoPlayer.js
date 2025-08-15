import { jsxs as s, jsx as t } from "react/jsx-runtime";
import * as a from "react";
import { cn as E } from "../utils/cn.js";
import { Pause as D, Play as U, SkipBack as X, SkipForward as A, VolumeX as G, Volume2 as H, Maximize as J } from "lucide-react";
const K = ({
  src: S,
  poster: L,
  width: M = "100%",
  height: P = "auto",
  controls: T = !0,
  autoPlay: V = !1,
  loop: F = !1,
  muted: d = !1,
  className: $ = ""
}) => {
  const r = a.useRef(null), [m, f] = a.useState(!1), [l, h] = a.useState(0), [o, j] = a.useState(0), [i, g] = a.useState(1), [u, p] = a.useState(d), [I, v] = a.useState(!0), [, b] = a.useState(!1);
  a.useEffect(() => {
    const e = r.current;
    if (!e) return;
    const n = () => h(e.currentTime), c = () => j(e.duration), x = () => f(!0), k = () => f(!1), C = () => {
      g(e.volume), p(e.muted);
    };
    return e.addEventListener("timeupdate", n), e.addEventListener("loadedmetadata", c), e.addEventListener("play", x), e.addEventListener("pause", k), e.addEventListener("volumechange", C), () => {
      e.removeEventListener("timeupdate", n), e.removeEventListener("loadedmetadata", c), e.removeEventListener("play", x), e.removeEventListener("pause", k), e.removeEventListener("volumechange", C);
    };
  }, []);
  const w = () => {
    r.current && (m ? r.current.pause() : r.current.play());
  }, R = (e) => {
    const n = parseFloat(e.target.value);
    r.current && (r.current.currentTime = n, h(n));
  }, z = (e) => {
    const n = parseFloat(e.target.value);
    r.current && (r.current.volume = n, g(n));
  }, q = () => {
    r.current && (r.current.muted = !u, p(!u));
  }, B = () => {
    document.fullscreenElement ? (document.exitFullscreen(), b(!1)) : (r.current?.requestFullscreen(), b(!0));
  }, N = (e) => {
    r.current && (r.current.currentTime = Math.max(0, Math.min(r.current.currentTime + e, o || 0)));
  }, y = (e) => {
    const n = Math.floor(e / 60), c = Math.floor(e % 60);
    return `${n}:${c.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: E("relative group", $),
      style: { width: M, height: P },
      onMouseEnter: () => v(!0),
      onMouseLeave: () => v(!1),
      children: [
        /* @__PURE__ */ t(
          "video",
          {
            ref: r,
            src: S,
            poster: L,
            className: "w-full h-full object-cover",
            autoPlay: V,
            loop: F,
            muted: d,
            onClick: w
          }
        ),
        T && /* @__PURE__ */ s("div", { className: E(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300",
          I ? "opacity-100" : "opacity-0"
        ), children: [
          /* @__PURE__ */ t("div", { className: "mb-3", children: /* @__PURE__ */ t(
            "input",
            {
              type: "range",
              min: 0,
              max: o || 0,
              value: l,
              onChange: R,
              className: "w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider",
              style: {
                background: `linear-gradient(to right, var(--guru-accent, #ffffff) 0%, var(--guru-accent, #ffffff) ${l / o * 100}%, rgba(255,255,255,0.2) ${l / o * 100}%, rgba(255,255,255,0.2) 100%)`
              }
            }
          ) }),
          /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: w,
                  className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                  children: m ? /* @__PURE__ */ t(D, { className: "h-5 w-5" }) : /* @__PURE__ */ t(U, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => N(-10),
                  className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                  children: /* @__PURE__ */ t(X, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => N(10),
                  className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                  children: /* @__PURE__ */ t(A, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ s("span", { className: "text-sm text-white ml-2", children: [
                y(l),
                " / ",
                y(o)
              ] })
            ] }),
            /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    onClick: q,
                    className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                    children: u ? /* @__PURE__ */ t(G, { className: "h-4 w-4" }) : /* @__PURE__ */ t(H, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ t(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: 1,
                    step: 0.1,
                    value: i,
                    onChange: z,
                    className: "w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider",
                    style: {
                      background: `linear-gradient(to right, var(--guru-accent, #ffffff) 0%, var(--guru-accent, #ffffff) ${i * 100}%, rgba(255,255,255,0.2) ${i * 100}%, rgba(255,255,255,0.2) 100%)`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: B,
                  className: "p-2 hover:bg-white/10 rounded-full transition-colors",
                  children: /* @__PURE__ */ t(J, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("style", { children: `
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: var(--guru-accent, #ffffff);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: var(--guru-accent, #ffffff);
          cursor: pointer;
          border: none;
        }
      ` })
      ]
    }
  );
};
K.displayName = "VideoPlayer";
export {
  K as VideoPlayer
};
