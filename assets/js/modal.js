export default function modal() {
  // Popup form buttons
  document.querySelectorAll(".request-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      let formId = this.getAttribute("data-form");
      document.getElementById(formId).style.display = "flex";
    });
  });

  // Popup Close Buttons
  document.querySelectorAll(".close-button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      this.closest(".modal__overlay").style.display = "none";
    });
  });
}
