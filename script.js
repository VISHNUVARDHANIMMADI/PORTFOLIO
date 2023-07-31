// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop - 50;
      window.scroll({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
  