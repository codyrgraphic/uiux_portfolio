
    const aboutContent = document.getElementById("about-content");

    function loadContent(url, callback) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                aboutContent.innerHTML = data;
                if (callback) callback();
            })
            .catch(error => {
                console.error('Error loading content:', error);
                aboutContent.innerHTML = "<p>Error loading content. Please try again later.</p>";
            });
    }
    
    function attachButtonListener(buttonId, url, callback) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", function() {
                loadContent(url, callback);
            });
        }
    }
    
    function attachLearnMoreListener() {
        attachButtonListener("learn-more-btn", "sections/about/about-b.html", attachCollapseListener);
    }
    
    function attachCollapseListener() {
        attachButtonListener("collapse-btn", "sections/about/about-a.html", attachLearnMoreListener);
    }
    
    // Initial load
    loadContent("sections/about/about-a.html", attachLearnMoreListener);
    