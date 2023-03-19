let nav = document.querySelector("nav"),
  navList = document.getElementById("nav_list"),
  navOpen = document.getElementById("nav_open"),
  navClose = document.getElementById("nav_close");

if (window.innerWidth < 1024) {
  // event click on icon list

  navOpen.addEventListener("click", () => {
    handelNavBAr(navOpen, navClose, "flex");
  });

  // event click on icon close

  navClose.addEventListener("click", () => {
    handelNavBAr(navClose, navOpen, "none");
  });

  // close nav when you click on any section

  document.querySelectorAll("#nav_list li a").forEach((a) => {
    a.addEventListener("click", () => {
      handelNavBAr(navClose, navOpen, "none");
    });
  });
}

// change color nav bar when you scrolling

window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? nav.classList.add("change_nav")
    : nav.classList.remove("change_nav");
});

// functions

function handelNavBAr(a, b, c) {
  a.style.display = "none";
  b.style.display = "inline-block";
  navList.style.display = c;
}

//Initialize Swiper

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // numbser of sliders
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 600
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 3,
    },
  },
});
