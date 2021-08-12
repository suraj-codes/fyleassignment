const list = document.querySelector(".list");
const items = Array.from(document.querySelectorAll(".item"));
const indicators = Array.from(document.querySelectorAll(".indicator"));

const observer = new IntersectionObserver(onIntersectionObserved, {
  root: list,
  threshold: 0.6,
});

function onIntersectionObserved(entries) {
  entries.forEach((entry) => {
    // On page load, firefox claims item with index 1 isIntersecting,
    // while intersectionRatio is 0
    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      const intersectingIndex = items.indexOf(entry.target);
      activateIndicator(intersectingIndex);
    }
  });
}

function activateIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

items.forEach((item) => {
  observer.observe(item);
});

//jquery

const changeimage1 = () => {
  document.getElementById("changeimage").src = "assets/image1.png";
  document.getElementById("one").classList.add("active");
  document.getElementById("two").classList.remove("active");
  document.getElementById("three").classList.remove("active");
};

const changeimage2 = () => {
  document.getElementById("changeimage").src = "assets/image.png";

  document.getElementById("one").classList.remove("active");
  document.getElementById("two").classList.add("active");
  document.getElementById("three").classList.remove("active");
};

const changeimage3 = () => {
  document.getElementById("changeimage").src = "assets/image2.jpg";

  document.getElementById("one").classList.remove("active");
  document.getElementById("two").classList.remove("active");
  document.getElementById("three").classList.add("active");
};
