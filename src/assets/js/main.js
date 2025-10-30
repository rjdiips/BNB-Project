document.addEventListener("DOMContentLoaded", () => {
  /* ========== FIX FOR FIXED HEADER ========== */
  // When header is fixed we must offset the main content so it isn't hidden.
  const headerEl = document.querySelector(".site-header");
  const mainEl = document.querySelector("main");
  if (headerEl && mainEl) {
    const setMainPadding = () => {
      // Use offsetHeight to include padding; ensures exact spacing
      mainEl.style.paddingTop = `${headerEl.offsetHeight}px`;
    };
    setMainPadding();
    // update on resize (in case header wraps on small screens)
    window.addEventListener("resize", setMainPadding);
  }

  /* ========== FUTURE SECTION PLACEHOLDERS ========== */
  // Example: Hero.init(), ScrollEffects.init(), etc.
});
