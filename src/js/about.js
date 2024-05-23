document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const collapseBtn = document.getElementById("collapse-btn");
    const aboutB = document.getElementById("about-b");
    const headline = document.getElementById("headline");

    function toggleAboutB() {
        if (aboutB.classList.contains("h-0")) {
            headline.textContent = "Cody Roberts";
            aboutB.classList.remove("h-0");
            aboutB.classList.add("h-auto", "transition-slow");
            learnMoreBtn.classList.add("disp-none");
            learnMoreBtn.classList.remove("disp-block");
        } else {
            aboutB.classList.add("h-0", "transition-slow", "of-hidden");
            aboutB.classList.remove("h-auto");
            learnMoreBtn.classList.remove("disp-none");
            learnMoreBtn.classList.add("disp-block");
        }
    }

    learnMoreBtn.addEventListener("click", toggleAboutB);
    collapseBtn.addEventListener("click", toggleAboutB);
});
