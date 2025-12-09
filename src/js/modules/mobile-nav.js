function mobileNav() {
  // Кнопка мобильного меню
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");
  const navLinks = document.querySelectorAll(".mobile-nav__link");

  // Открытие/закрытие меню при клике на кнопку
  navBtn.addEventListener("click", function () {
    nav.classList.toggle("is-open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
    navBtn.setAttribute(
      "aria-expanded",
      nav.classList.contains("is-open") ? "true" : "false"
    );
  });

  // Закрытие меню при клике на ссылку
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      menuIcon.classList.remove("nav-icon--active");
      document.body.classList.remove("no-scroll");
      navBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !navBtn.contains(e.target)) {
      nav.classList.remove("is-open");
      menuIcon.classList.remove("nav-icon--active");
      document.body.classList.remove("no-scroll");
      navBtn.setAttribute("aria-expanded", "false");
    }
  });
}

export default mobileNav;
