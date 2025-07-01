export default function initParallaxImages() {
  // Parallax image components

  const parallax = document.querySelectorAll(".parallax");
  if (parallax) {
    parallax.forEach((item) => {
      window.addEventListener("scroll", function () {
        // if (
        //   (item.classList.contains("image-mobile") &&
        //     window.innerWidth < 481) ||
        //   (item.classList.contains("image-desktop") && window.innerWidth > 481)
        // ) {
        let offset = item.parentNode.offsetTop - window.scrollY - 400;
        item.style.backgroundPositionY = offset * 0.1 + "px";
        //
        let parallax_content = item.nextSibling;
        //        console.log(parallax_content);
        if (item.nextSibling.classList.contains("image-mobile")) {
          parallax_content = parallax_content.nextSibling;
        }
        parallax_content.style.top = offset * 0.12 + "px";
        // }
      });
    });
  }

  // Parallax div components that are absolutely positioned- moves a div slightly with the page
  // There is no mobile version of these.
  const parallax_div = document.querySelectorAll(".parallax-div");

  if (parallax_div) {
    parallax_div.forEach((item) => {
      window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        const computedStyles = getComputedStyle(item);
        if (computedStyles.position == "static") {
          item.style.marginTop = (offset - 0.03) * 0.03 + "px";
        } else {
          item.style.top = (offset - 0.03) * 0.03 + "px";
          // console.log(item.style.top);
        }
      });
    });
  }
}
