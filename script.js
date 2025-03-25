document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".profile img").addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s";
    });

    document.querySelector(".profile img").addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});
