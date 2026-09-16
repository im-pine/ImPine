import { animate } from "motion";

// Shared duration for the Hero<->About scroll transitions so neither
// direction feels longer than the other, regardless of scroll distance.
const TRANSITION_DURATION = 0.7;

export function scrollToElementTop(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const target = el.getBoundingClientRect().top + window.scrollY;

  animate(window.scrollY, target, {
    duration: TRANSITION_DURATION,
    ease: "easeInOut",
    onUpdate: (value) => {
      // `behavior: "auto"` defers to the `html { scroll-behavior: smooth }`
      // rule in globals.css, which fights this animation's own easing.
      // "instant" bypasses that so each frame lands exactly on `value`.
      window.scrollTo({ top: value, left: 0, behavior: "instant" });
    },
  });
}
