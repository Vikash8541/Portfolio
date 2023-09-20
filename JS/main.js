

// Global Declaration values for all access

const nav = document.querySelector(".nav-link-mob");
const icon = document.querySelector(".fas");
const blacklogo = document.querySelector(".black-logo");
const whitelogo = document.querySelector(".white-logo");
const logotext = document.querySelector(".logo-text");
const icon2 = document.querySelectorAll(".icon-homes-2 a");

// D2N
const switching = document.querySelectorAll(".bg-icon");
const body = document.querySelector("body");
switching.forEach((access) => {
  access.addEventListener("click", () => {
    body.classList.toggle("light");
    access.classList.toggle("fa-sun");
    access.classList.toggle("fa-moon");
  });
});

// Automatic Typing in Text
const typed = new Typed('.auto-text', {
  strings: ["UI/UX Designer","Front End Designer","Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop:true
});

// Automatic Typing in Text


// Toggle work start

function toggle() {
  nav.classList.toggle("active");
  icon.classList.toggle("fa-bars-staggered");
  icon.classList.toggle("fa-times");
  blacklogo.classList.toggle("active");
  whitelogo.classList.toggle("active");
  logotext.classList.toggle("active");
  icon2.forEach((logo) => {
    logo.classList.toggle("active");
  });
}
// Toggle work end

// Remove active from the Navigation button of Mobile
const navmob = document.querySelectorAll(".nav-link-mob li a");
navmob.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars-staggered");
    blacklogo.classList.remove("active");
    whitelogo.classList.remove("active");
    logotext.classList.remove("active");
    icon2.forEach((logo) => {
      logo.classList.remove("active");
    });
  });
});

// Search Pop up
const searchshow = document.querySelector(".popopen");
const close = document.querySelector(".close-icon");

function popopen() {
  searchshow.classList.add("show");
}

function popclose() {
  searchshow.classList.remove("show");
}

// Header active
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 150);
});

// Scroll-btn
let scrollvalue = () => {
  let scrollbtn = document.querySelector("#scroll-btn");
  let scrollvalue = document.querySelector(".scrollvalue");
  let pos = document.documentElement.scrollTop;
  let calHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollVal = Math.floor(Math.round(pos * 100) / calHeight);
  if (pos > 100) {
    scrollbtn.classList.add("scroll");
  } else {
    scrollbtn.classList.remove("scroll");
  }
  scrollbtn.addEventListener("click", () => {
    pos = 0;
  });
  scrollvalue.textContent = scrollVal;
};
window.onscroll = scrollvalue;
window.onload = scrollvalue;

// Scroll to Top Button background
const startbtn = document.querySelector(".start-btn");
const wrapper = document.querySelector(".wrapper");
const scrolltopbg = document.querySelector(".top-scroll");
startbtn.addEventListener("click", () => {
wrapper.classList.add("scrollactive");
scrolltopbg.classList.add("scrollactive");
});

  // Intersection Observer
  const blocks = document.querySelectorAll('.sticky-blocks');

const observer = new IntersectionObserver(e =>{
    e.forEach(en =>{
        en.target.classList.toggle('show', en.isIntersecting);
    });
},{
    threshold: 0.5,
});

blocks.forEach(block =>{
    observer.observe(block);
});

// Window on load text Animation with Scroll
window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return; 
            }
        })
    }, options);

    const h1 = document.querySelector('h1');
    observer.observe(h1);

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));

    const footermenu = document.querySelectorAll(".footer-menu-link");
    footermenu.forEach(footerlink => observer.observe(footerlink));
}




