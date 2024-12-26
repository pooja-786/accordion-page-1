const accordian = document.querySelectorAll('.accordian');

accordian.forEach(accordian => {
    const icon = accordian.querySelector('.icon') 
})

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle the active class on the clicked header
            this.classList.toggle("active");

            // Get the next element (the content)
            const content = this.nextElementSibling;

            // Toggle the display of the content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});