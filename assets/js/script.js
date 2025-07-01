import initVue from "./vue/init";
import initMenu from "./main-menu";
import initHomeHeroVideo from "./home-hero-video";
import initSliders from "./sliders";
import animationsV2 from "./animationsv2";
import initStats from "./stats";
import initPageHeaderResize from "./page-header-resize";
import initCookieAccept from "./cookie-accept";
import accordionImage from "./accordion-image";
import initAccordions from "./accordion";
import initModal from "./modal";
import initParallaxImages from "./parallax-images";

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

// eslint-disable-next-line no-unused-vars
function CopyToClipboard(toCopy) {
  const el = document.createElement(`textarea`);
  el.value = toCopy;
  el.setAttribute(`readonly`, ``);
  el.style.position = `absolute`;
  el.style.left = `-9999px`;
  document.body.appendChild(el);
  el.select();
  document.execCommand(`copy`);
  document.body.removeChild(el);
}

ready(() => {
  initVue();
  initMenu();
  initHomeHeroVideo();
  initSliders();
  initCookieAccept();
  animationsV2();
  initStats();
  initPageHeaderResize();
  accordionImage();
  initAccordions();
  initModal();
  initParallaxImages();

  // This is for article detail read percentage.
  function getScrollFraction() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight",
      hsh = 0;

    if (window.innerWidth > 1550) {
      hsh = h[sh] - 2100;
    } else {
      hsh = h[sh] - 1600;
    }
    //return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
    return (h[st] || b[st]) / ((hsh || b[sh]) - h.clientHeight);
  }

  let time_donut = document.getElementById("donut-segment");
  if (time_donut) {
    window.addEventListener("scroll", () => {
      let scroll = getScrollFraction();

      // console.log(scroll * 100);
      let val1 = scroll * 100;
      let val2 = 100 - scroll * 100;
      let text = val1 + " " + val2;

      time_donut.setAttribute("stroke-dasharray", text);
      //console.log(text);
    });
  }

  // This is for home page menu links panel
  const menu_image_container = document.querySelectorAll(
    ".menu-image-container",
  );

  if (menu_image_container) {
    if (window.innerWidth < 1150) {
      return;
    }

    const options = document.querySelectorAll(".option-container");

    options.forEach((menuItem) => {
      menuItem.addEventListener("mouseover", (el) => {
        const all_options = document.querySelectorAll(".menu-image");

        let $data_id = el.target.getAttribute("data-id");
        let img_obj = document.getElementById("image-" + $data_id);

        if (img_obj.classList.contains("show")) return;

        all_options.forEach((item) => {
          item.classList.add("hide");
          item.classList.remove("show");
          item.classList.remove("move");
        });

        img_obj.classList.remove("hide");
        img_obj.classList.add("show");

        setTimeout(function () {
          img_obj.classList.add("move");
        }, 50);
      });
    });
  }
});
