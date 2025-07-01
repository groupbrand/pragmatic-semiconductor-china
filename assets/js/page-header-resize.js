export default function pageHeaderResize() {
  const pageHeader = document.querySelector(".page-header");
  const menuItems = document.querySelectorAll(".menu-item-has-children");
  menuItems.forEach((menuItem) => {
    const submenu = menuItem.querySelector(".sub-menu");
    const link = menuItem.querySelector("a");
    if (!submenu || !link) return;
    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("aria-expanded", "false");
    submenu.setAttribute("aria-hidden", "true");
    submenu.style.display = "none";

    menuItem.addEventListener("mouseenter", () => {
      if (window.innerWidth < 1240) {
        return;
      }
      showSubmenu();
    });

    menuItem.addEventListener("mouseleave", () => {
      hideSubmenu();
    });

    link.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const isExpanded = link.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
          hideSubmenu();
        } else {
          showSubmenu();
        }
      }
    });

    submenu.addEventListener("focusout", (event) => {
      if (
        !submenu.contains(event.relatedTarget) &&
        event.relatedTarget !== link
      ) {
        hideSubmenu();
      }
    });

    function showSubmenu() {
      //console.log("show");

      submenu.style.display = "block";

      link.setAttribute("aria-expanded", "true");
      submenu.setAttribute("aria-hidden", "false");
      const submenuHeight = submenu.offsetHeight;

      // console.log(submenuHeight);
      const pageHeaderHeight = 48;
      pageHeader.style.height = `${pageHeaderHeight + submenuHeight}px`;

      pageHeader.classList.add("expanded");
      pageHeader.classList.remove("collapsed");
    }

    function hideSubmenu() {
      if (window.innerWidth < 1240) {
        return;
      }

      submenu.style.display = "none";
      link.setAttribute("aria-expanded", "false");
      submenu.setAttribute("aria-hidden", "true");
      //pageHeader.style.height = "";

      pageHeader.classList.add("collapsed");
      pageHeader.classList.remove("expanded");
      // const submenuHeight = submenu.offsetHeight;
      // const pageHeaderHeight = 48;
      // pageHeader.style.height = `${pageHeaderHeight + submenuHeight}px`;
    }
  });

  //Window Resize event listener
  var timeOutFunctionId;
  window.addEventListener("resize", function () {
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(workAfterResizeIsDone, 500);
  });

  function workAfterResizeIsDone() {
    //console.log("resized");
    // console.log(menuItems);
    // menuItems.forEach((menuItem) => {
    //   const submenu = menuItem.querySelector(".sub-menu");
    //   const link = menuItem.querySelector("a");
    //   if (!submenu || !link) return;
    //   submenu.style.display = "none";
    //   link.setAttribute("aria-expanded", "false");
    //   submenu.setAttribute("aria-hidden", "true");
    //   pageHeader.style.height = "";
    // });
  }
}
