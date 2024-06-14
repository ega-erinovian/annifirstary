const scrollDiv = [...document.querySelectorAll(".scroll")];
let images = [
  "./src/img/memories/1.webp",
  "./src/img/memories/2.webp",
  "./src/img/memories/3.webp",
  "./src/img/memories/4.webp",
  "./src/img/memories/5.webp",
  "./src/img/memories/6.webp",
  "./src/img/memories/7.webp",
  "./src/img/memories/8.webp",
  "./src/img/memories/9.webp",
  "./src/img/memories/10.webp",
  "./src/img/memories/11.webp",
  "./src/img/memories/12.webp",
  "./src/img/memories/13.webp",
  "./src/img/memories/14.webp",
  "./src/img/memories/15.webp",
  "./src/img/memories/16.webp",
  "./src/img/memories/17.webp",
];

images.forEach((img) => {
  scrollDiv.forEach((section) => {
    let div = document.createElement("div");
    div.style.backgroundImage = `url('${img}')`;
    section.querySelector(".scroll-wrapper").appendChild(div);
  });
});

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < scrollDiv.length; i++) {
    transform(scrollDiv[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollWrapper = section.querySelector(".scroll-wrapper");
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 1500 ? 1500 : percentage;
  scrollWrapper.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

// COUNTER JS
let counter = document.querySelector(".counter-content h1 span");
let container = document.querySelector(".counter-content h1");
let activated = false;
window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 700 &&
    activated == false
  ) {
    counter.innerText = 0;
    let count = 0;
    function updateCount() {
      const target = parseInt(counter.dataset.count);
      if (count < target) {
        count++;
        counter.innerText = count;
        setTimeout(updateCount, 0.5);
      } else {
        counter.innerText = target;
      }
    }

    updateCount();

    activated = true;
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 700 ||
    (pageYOffset === 0 && activated === true)
  ) {
    counter.innerText = 0;
    activated = false;
  }
});
