document.addEventListener("DOMContentLoaded", () => {
  /* =============== NAVBAR JS =============== */

  /* ========== ADD SHADOW ONLY WHEN SCROLLED ========== */
  const header = document.querySelector(".site-header");

  if (header) {
    const toggleShadow = () => {
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    // run once on load
    toggleShadow();
    // run on scroll
    window.addEventListener("scroll", toggleShadow);
  }

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

  /* ========== HIDE NAVBAR WHEN VIDEO SECTION OR FOOTER IS VISIBLE ========== */

  // const header = document.querySelector(".site-header");  //already defined above
  const videoSection = document.querySelector(".video-wrapper");
  const siteFooter = document.querySelector(".site-footer");

  const sectionsToObserve = [videoSection, siteFooter].filter(Boolean);

  if (header && sectionsToObserve.length > 0) {
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        });
        // If any observed section is visible, hide the header
        if (visibleSections.size > 0) {
          header.classList.add("hide");
        } else {
          header.classList.remove("hide");
        }
      },
      {
        // triggers when 30% of section is visible
        threshold: 0.3,
      }
    );

    // 4. Observe each section
    sectionsToObserve.forEach((section) => observer.observe(section));
  }

  // =============== END NAVBAR JS =============== //
});
