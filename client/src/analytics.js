// src/analytics.js

const GA_MEASUREMENT_ID = "G-JM1T3BWDP3"; // <-- Replace with your real GA ID

// Track SPA page views
export const trackPageView = (path) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

// Track custom events
export const trackEvent = (action, params = {}) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, params);
};
