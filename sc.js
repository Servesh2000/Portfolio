// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Function to scroll to a section smoothly
    const scrollToSection = (sectionID) => {
        document.querySelector(sectionID).scrollIntoView({ behavior: "smooth" });
    };

    // Attach click event listeners to navigation buttons
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const sectionID = event.target.getAttribute("onclick").match(/'(.*?)'/)[1];
            scrollToSection(sectionID);
        });
    });

    // Add dynamic form submission alert (optional)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            alert("Thank you for reaching out! Your message has been sent.");
        });
    }
});
