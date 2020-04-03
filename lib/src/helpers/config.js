const animationConfig = {
  duration: 200, // 0.2s
  easing: t => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 // ease-in-out
};

export const transitionConfig = {
  unique: true,
  reset: true,
  config: animationConfig
};
