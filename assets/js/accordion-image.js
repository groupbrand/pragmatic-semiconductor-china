export default function accordionImage() {
  const accordionImageItems = document.querySelectorAll(
    ".accordion-image__item",
  );
  const accordionImage = document.getElementById("accordion-image__image");

  const updateImage = (newImage) => {
    if (newImage && accordionImage.src !== newImage) {
      accordionImage.style.transition = "opacity .7s linear";
      accordionImage.style.opacity = ".1";
      //   setTimeout(() => {
      accordionImage.src = newImage;
      accordionImage.style.opacity = "1";
      //   }, 700);
    }
  };

  const setActiveAccordion = (selectedItem) => {
    accordionImageItems.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
      //   accordionItem.querySelector(".accordion-image__content").style.maxHeight =
      //     "0";
    });

    selectedItem.classList.add("active");
    const content = selectedItem.querySelector(".accordion-image__content");
    content.style.maxHeight = content.scrollHeight + "px";

    const newImage = selectedItem.getAttribute("data-image");
    updateImage(newImage);
  };

  if (accordionImageItems.length > 0) {
    setActiveAccordion(accordionImageItems[0]);
  }

  accordionImageItems.forEach((item) => {
    const title = item.querySelector(".button-container");

    if (title) {
      title.addEventListener("mouseover", () => {
        if (!item.classList.contains("active")) {
          setActiveAccordion(item);
        }
        // } else {
        //   item.classList.remove("active");
        //   item.querySelector(".accordion-image__content").style.maxHeight = "0";
        // }
      });
    }
  });
}
