export default function initStats() {
  const scrollCounters = document.querySelectorAll("span.stat-number");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const animateCounter = (counter) => {
    if (counter.classList.contains("started")) return;

    counter.classList.add("started");
    const target = parseInt(counter.getAttribute("data-value"), 10);
    let count = 0;
    let increment = Math.max(1, Math.ceil(target / 100));
    const duration = 1500;
    let intervalTime = Math.max(10, duration / (target / increment));

    const updateCounter = () => {
      count += increment;
      if (count >= target) {
        count = target;
      } else {
        if (count > target - target / 3) {
          intervalTime = intervalTime * 1.09;
        }

        setTimeout(updateCounter, intervalTime);
      }
      counter.innerText = numberWithCommas(count);
    };

    setTimeout(updateCounter, intervalTime);
  };

  const numberWithCommas = (x) => x.toLocaleString();

  const handleScrollAnimation = () => {
    scrollCounters.forEach((counter) => {
      if (
        !counter.classList.contains("started") &&
        elementInView(counter, 1.05)
      ) {
        animateCounter(counter);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();
}
