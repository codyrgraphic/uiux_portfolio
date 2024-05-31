document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const collapseBtn = document.getElementById("collapse-btn");
  const aboutB = document.getElementById("about-b");
  const headline = document.getElementById("headline");

  function toggleAboutB() {
    if (aboutB.classList.contains("h-0")) {
      headline.textContent = "Cody Roberts";
      aboutB.classList.remove("h-0");
      aboutB.classList.add("h-auto");
      learnMoreBtn.style.display = "none"; // Use inline style for debugging
    } else {
      aboutB.classList.add("h-0");
      aboutB.classList.remove("h-auto");
      learnMoreBtn.style.display = "block"; // Use inline style for debugging
    }

    console.log("aboutB classes:", aboutB.className);
    console.log("learnMoreBtn classes:", learnMoreBtn.className);
  }

  learnMoreBtn.addEventListener("click", toggleAboutB);
  collapseBtn.addEventListener("click", toggleAboutB);
});
