/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link"); // Исправлено на nav__link

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");

  // Add a class if the vertical scroll offset is greater than 50 of the viewport height
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};

window.addEventListener("scroll", shadowHeader);
/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});
/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
  const scrollup = document.getElementById("scroll-up");

  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollup);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY; // Corrected: Use window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // Consider adjusting 58
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      '.nav__menu a[href*="' + sectionId + '"]'
    ); // Corrected: Use *=

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true // Animations repeat
});

sr.reveal(".home__data .popular__container, .footer");
sr.reveal(".home__board", { delay: 700, distance: "100px", origin: "right" });
sr.reveal(".home__pizza", {
  delay: 1400,
  distance: "100px",
  origin: "bottom",
  rotate: { z: -90 },
});
sr.reveal(".home__indgredient ", {
  delay: 2000,
  interval: 100,
});
sr.reveal(
  ".about__data, .reciper__list.grid, .contact__data,.contact__sticker-1,.contact__sticker-3 ",
  {
    origin: "right",
  }
);
sr.reveal(".about__img, .recipe, .contact__image,.contact__sticker-2 ", {
  origin: "left",
});

sr.reveal(".products__card", { interval: 100 });
