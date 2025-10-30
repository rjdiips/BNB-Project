document.addEventListener("DOMContentLoaded", () => {
  const videoWrapper = document.querySelector(".video-wrapper");
  if (!videoWrapper) return;

  const playButton = videoWrapper.querySelector(".play-btn");
  const videoId = videoWrapper.dataset.videoId;

  playButton.addEventListener("click", () => {
    // Build iframe element dynamically
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.title = "BNB Brand Story";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    // Replace thumbnail + button with the iframe
    videoWrapper.innerHTML = "";
    videoWrapper.appendChild(iframe);
  });
});
