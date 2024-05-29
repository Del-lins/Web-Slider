const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const carouselDom = document.querySelector(".carousel");
const listItemDom = document.querySelector(".carousel .list");
const thumBnailDom = document.querySelector(".carousel .thumbnail");

nextButton.onclick = function () {
  showSlider("next");
};

prevButton.onclick = function () {
  showSlider("prev");
};

let timeRuning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextButton.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumBnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
    carouselDom.classList.remove("prev");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumBnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRuning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextButton.click();
  }, timeAutoNext);
}
