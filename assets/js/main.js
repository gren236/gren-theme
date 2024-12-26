document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const burgerMenu = document.querySelector("#burger-menu");
  const closeMenu = document.querySelector("#close-menu");
  const nav = document.querySelector(".nav-menu");

  let isMenuOpen = false;

  const toggleMenu = () => {
    burgerMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");

    isMenuOpen = !isMenuOpen;
  };

  menuToggle.addEventListener("click", toggleMenu);

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      isMenuOpen
    ) {
      toggleMenu();
    }
  });
});
