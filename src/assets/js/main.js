document.addEventListener("DOMContentLoaded", () => {
  /* =============== NAVBAR JS =============== */

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

  /* ========== HIDE NAVBAR ON VIDEO SECTION SCROLL ========== */
  const header = document.querySelector(".site-header");
  const videoSection = document.querySelector(".video-wrapper");

  if (header && videoSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // when video section becomes visible, hide the navbar
            header.classList.add("hide");
          } else {
            // when you scroll back up, show the navbar again
            header.classList.remove("hide");
          }
        });
      },
      {
        threshold: 0.2, // trigger when 20% of the video section is visible
      }
    );

    observer.observe(videoSection);
  }

  /* ========== FUTURE SECTION PLACEHOLDERS ========== */
  // Example: Hero.init(), ScrollEffects.init(), etc.
});
