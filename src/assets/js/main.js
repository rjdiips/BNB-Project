/* main.js — consolidated scripts */

/* ========== NAVBAR (desktop dropdowns) ========== */
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".menu-item.dropdown");

  dropdowns.forEach((item) => {
    const btn = item.querySelector(".dropdown-toggle");
    const submenu = item.querySelector(".dropdown-menu");
    if (!btn || !submenu) return;

    // Toggle open/close on click
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains("open");

      // Close all other dropdowns
      dropdowns.forEach((el) => {
        if (el !== item) {
          el.classList.remove("open");
          el.querySelector(".dropdown-toggle")?.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      });

      // Toggle current
      item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close with ESC
    item.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" || ev.key === "Esc") {
        item.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  });

  // One global listener to close dropdowns on outside click
  document.addEventListener("click", (e) => {
    dropdowns.forEach((item) => {
      if (!item.contains(e.target)) {
        item.classList.remove("open");
        item
          .querySelector(".dropdown-toggle")
          ?.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ========== FUTURE SECTION PLACEHOLDERS ========== */
  // Example: Hero.init(), ScrollEffects.init(), etc.
  // Keep here for future modules — for now nothing runs.
});
