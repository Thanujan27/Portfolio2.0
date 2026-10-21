const paragraphs = [
    ["about-container", "./assets/about.html"],
    ["intro-container", "./assets/intro.html"],
    ["section-experience", "./sections/experience.html"],
    ["section-projects", "./sections/projects.html"]

];

paragraphs.forEach(([elementId, filePath]) => {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => console.error(error));
});
