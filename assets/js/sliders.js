/* eslint-disable no-unused-vars */
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Thumbs,
} from "swiper/modules";
// import Swiper and modules styles

export default function initSliders() {
  const casestudiesSlider = new Swiper(".news-promo-slider__slides-wrapper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1.2,
    spaceBetween: 16,
    //centeredSlides: false,
    loop: true,
    breakpoints: {
      560: {
        slidesPerView: 2.2,
        spaceBetween: 16,
      },
      800: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
    },
    wrapperClass: "news-promo-slider__slides",
    slideClass: "news-promo-slider__slide",
    navigation: {
      nextEl: ".news-promo-slider__controls__button--next",
      prevEl: ".news-promo-slider__controls__button--prev",
    },
  });

  const quotesSlider = new Swiper(".quotes-slider__slides-wrapper", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
    wrapperClass: "quotes-slider__slides",
    slideClass: "quotes-slider__slide",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".quotes-slider__controls__button--next",
      prevEl: ".quotes-slider__controls__button--prev",
    },
  });

  const useCaseSlider = new Swiper(".use-case-slider__slides-wrapper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    //centeredSlides: false,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 40,
      },
      // when window width is >= 600px
      600: {
        slidesPerView: 2.5,
        spaceBetween: 80,
      },
      // when window width is >= 480px
      950: {
        slidesPerView: 2.5,
        spaceBetween: 80,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 80,
      },
    },
    wrapperClass: "use-case-slider__slides",
    slideClass: "use-case-slider__slide",
    navigation: {
      nextEl: ".use-case-slider__controls__button--next",
      prevEl: ".use-case-slider__controls__button--prev",
    },
  });

  const videoTextSlider = new Swiper(".video-text-slider__slides-wrapper", {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    wrapperClass: "video-text-slider__slides",
    slideClass: "video-text-slider__slide",
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".video-text-slider__pagination",
      clickable: true,
      type: "bullets",
      bulletActiveClass: "video-text-slider__pagination__bullet--active",
      bulletClass: "video-text-slider__pagination__bullet",
      bulletElement: "div",
    },
    navigation: false,
  });

  const imageSlider = new Swiper(".image-slider__slides-wrapper", {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: 0,
    loop: true,
    wrapperClass: "image-slider__slides",
    slideClass: "image-slider__slide",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  const internalHeroSlider = new Swiper(
    ".internal-hero-slider__slides-wrapper",
    {
      modules: [Autoplay],
      slidesPerView: 1,
      spaceBetween: 200,
      centeredSlides: 0,
      loop: true,
      wrapperClass: "internal-hero-slider__slides",
      slideClass: "internal-hero-slider__slide",
      speed: 1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  );

  const mobileImageSlider = new Swiper(".mobile-image__slides-wrapper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    wrapperClass: "mobile-image__slides",
    slideClass: "mobile-image__slide",
  });

  //console.log(casestudiesSlider);

  // const imageSliders = document.querySelectorAll(
  //   ".image-slider__slides-wrapper",
  // );

  // imageSliders.forEach((item) => {
  //   const imageSlider = new Swiper(item, {
  //     modules: [Navigation, Pagination],
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     //loop: true,
  //     lazy: true,
  //     autoHeight: false,
  //     wrapperClass: "image__slides",
  //     slideClass: "image__slide",
  //     pagination: {
  //       el: ".image__pagination-bullets",
  //       clickable: true,
  //       type: "bullets",
  //       bulletActiveClass: "image__pagination-bullets__bullet--active",
  //       bulletClass: "image__pagination-bullets__bullet",
  //       bulletElement: "div",
  //     },
  //     navigation: false,
  //   });
  // });

  // const factsSliders = document.querySelectorAll(".facts-slider");

  // factsSliders.forEach((item) => {
  //   const factSlider = new Swiper(item, {
  //     modules: [Autoplay],
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //     loop: true,
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //     wrapperClass: "facts-slider__slides",
  //     slideClass: "facts-slider__slide",
  //     pagination: false,
  //     navigation: false,
  //   });
  // });

  // const factsSwiper = new Swiper('.facts-slider', {
  //   modules: [Autoplay],
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   loop: true,
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //   },
  //   wrapperClass: 'facts-slider__slides',
  //   slideClass: 'facts-slider__slide',
  // });

  // const quotesSwiper = new Swiper(".quotes-slider", {
  //   modules: [Navigation, Pagination],
  //   slidesPerView: 1,
  //   // loop: true,
  //   // lazy: true,
  //   //effect: 'fade',
  //   spaceBetween: 0,
  //   // autoplay: {
  //   //   delay: 3500,
  //   //   disableOnInteraction: false,
  //   // },
  //   wrapperClass: "quotes-slider__slides",
  //   slideClass: "quotes-slider__slide",
  //   pagination: {
  //     el: ".quotes-slider__pagination",
  //     clickable: true,
  //     type: "bullets",
  //     bulletActiveClass: "quotes-slider__pagination__bullet--active",
  //     bulletClass: "quotes-slider__pagination__bullet",
  //     bulletElement: "div",
  //   },
  //   navigation: false,
  // });
}
