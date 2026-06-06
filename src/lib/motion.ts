import type { Transition, Variants } from "framer-motion";

/** Premium easing — refined, not bouncy */
export const easePremium = [0.22, 1, 0.36, 1] as const;

export const transitionFast: Transition = {
  duration: 0.15,
  ease: easePremium,
};

export const transitionBase: Transition = {
  duration: 0.35,
  ease: easePremium,
};

export const transitionSlow: Transition = {
  duration: 0.55,
  ease: easePremium,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionBase,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionBase,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

/** Viewport config for scroll reveals */
export const scrollRevealViewport = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};
