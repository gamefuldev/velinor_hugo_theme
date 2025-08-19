console.log(
  "This Hugo theme was developed by Gameful Software: https://www.gameful.dev"
);

const menuToggle = document.getElementById("js-main-menu-toggle");
const menuOpenIcon = document.getElementById("js-main-menu-open-icon");
const menuCloseIcon = document.getElementById("js-main-menu-close-icon");
const menuWrapper = document.getElementById("js-menu-wrapper");

menuToggle.addEventListener("click", () => {
  menuWrapper.classList.toggle("translate-x-full");
  menuWrapper.classList.toggle("translate-x-0");
  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

const menuLinks = menuWrapper.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuWrapper.classList.toggle("translate-x-full");
    menuWrapper.classList.toggle("translate-x-0");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  });
});

const jumpToContactButton = document.getElementById("js-home-hero-contact");

if (jumpToContactButton) {
  jumpToContactButton.addEventListener("click", () => {
    const contactForm = document.getElementById("contact");
    contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const strategyToggle = document.getElementById("js-strategy-toggle-area");

if (strategyToggle) {
  const headings = strategyToggle.querySelectorAll(".js-strategy-heading");
  const items = strategyToggle.querySelectorAll(".js-strategy-item");
  headings.forEach((heading, idx) => {
    heading.addEventListener("click", () => {
      items.forEach((item, i) => {
        const h = item.querySelector(".js-strategy-heading");
        const w = item.querySelector(".js-heading-wrapper");
        const c = item.querySelector(".js-strategy-content");
        const img = item.querySelector(".js-strategy-image");
        if (item === heading.closest(".js-strategy-item")) {
          // Scroll heading to top of viewport
          h.scrollIntoView({ behavior: "smooth", block: "start" });
          // Activate clicked
          h.classList.add("text-black");
          h.classList.add("active");
          h.classList.remove("text-vc-brown-2");
          h.classList.add("after:opacity-0");
          h.classList.remove("after:opacity-100");
          w.classList.remove("h-full");
          c.classList.remove("hidden");
          if (img) {
            img.classList.remove("opacity-100");
            img.classList.add("opacity-0");
            img.classList.add("lg:hidden");
          }
        } else {
          // Deactivate others
          h.classList.remove("active");
          h.classList.remove("text-black");
          h.classList.add("text-vc-brown-2");
          h.classList.remove("after:opacity-0");
          h.classList.add("after:opacity-100");
          w.classList.add("h-full");
          c.classList.add("hidden");
          if (img) {
            img.classList.add("opacity-100");
            img.classList.remove("opacity-0");
            img.classList.remove("lg:hidden");
          }
        }
      });
    });
  });
}
