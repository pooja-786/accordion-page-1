

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".tab");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            this.classList.toggle(".tab__label::after ");

        
            const content = this.nextElementSibling;

    
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

