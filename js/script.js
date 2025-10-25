 function toggleMenu() {
            const menu = document.querySelector('nav ul');
            menu.classList.toggle('active');
        }
        window.addEventListener("scroll", function () {
  const backToTop = document.querySelector(".back-to-top");
  backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});
