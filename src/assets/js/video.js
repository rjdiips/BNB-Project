document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     VIDEO THUMB → IFRAME
     ========================= */
  const videoWrappers = document.querySelectorAll(
    ".video-wrapper, .hero-video-wrapper"
  );

  videoWrappers.forEach((wrapper) => {
    const playBtn = wrapper.querySelector(".play-btn");
    const videoId = wrapper.dataset.videoId;

    if (!playBtn || !videoId) return;

    playBtn.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.title = "BNB Video";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      // add class for CSS fade animation (optional but cleaner)
      iframe.classList.add("fade-in-video");

      // Replace thumbnail and play button
      wrapper.innerHTML = "";
      wrapper.appendChild(iframe);
    });
  });

  /* =========================
     NAVBAR HIDE ON SCROLL TO VIDEO OR FOOTER
     ========================= */
  const header = document.querySelector(".site-header");
  const videoSection = document.querySelector(".video-section");
  const footer = document.querySelector(".site-footer");

  if (header && (videoSection || footer)) {
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        header.classList.toggle("hide", isVisible);
      },
      { threshold: 0.2 }
    );

    if (videoSection) observer.observe(videoSection);
    if (footer) observer.observe(footer);
  }
});
