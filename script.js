document.addEventListener("DOMContentLoaded", () => {
    // Scroll to the next section
    document.querySelector(".scroll-arrow").addEventListener("click", () => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });

    // Show animation and reveal resume
    const resumeButton = document.querySelector(".view-resume-btn");
    const resumeMessage = document.querySelector(".resume-message");
    const resumeContent = document.querySelector(".resume-content");

    resumeButton.addEventListener("click", () => {
        // Show the message animation
        resumeMessage.style.display = "block";
        
        // Show resume after the animation
        setTimeout(() => {
            resumeContent.style.display = "block";
        }, 3000); // After 3 seconds (animation duration)

        // Hide the button after clicking
        resumeButton.style.display = "none";
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach((section) => observer.observe(section));
});
