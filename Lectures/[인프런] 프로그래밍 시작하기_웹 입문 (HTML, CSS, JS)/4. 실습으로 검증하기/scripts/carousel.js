window.addEventListener("load", function () {
  var carousels = document.getElementsByClassName("carousel");

  for (const carousel of carousels) {
    addEventToCarousel(carousel);
  }
});

function addEventToCarousel(carouselElem) {
  var ulElem = carouselElem.querySelector("ul");
  var liElems = ulElem.querySelectorAll("li");

  //   console.log(ulElem, liElems);

  // 너비 값 조정
  var liWidth = liElems[0].clientWidth;
  var adjustedWidth = liElems.length * liWidth;
  ulElem.style.width = adjustedWidth + "px";

  // 슬라이드 버튼 이벤트 등록
  var slideButtons = carouselElem.querySelectorAll(".slide");
  for (const button of slideButtons) {
    button.addEventListener("click", createListenerSlide(carouselElem));
  }
}

function createListenerSlide(carouselElem) {
  return function (event) {
    var clickedButton = event.currentTarget;

    var liElems = carouselElem.querySelectorAll("li");
    var liCount = liElems.length;
    var currentIndex = carouselElem.attributes.data.value;

    if (
      clickedButton.className.includes("right") &&
      currentIndex < liCount - 1
    ) {
      currentIndex++;
      //   console.log(currentIndex);
      scrollDiv(carouselElem, currentIndex);
    } else if (clickedButton.className.includes("left") && currentIndex > 0) {
      currentIndex--;
      //   console.log(currentIndex);
      scrollDiv(carouselElem, currentIndex);
    }

    carouselElem.attributes.data.value = currentIndex;

    updateIndicator(carouselElem, currentIndex);

    updateSlideButtonVisible(carouselElem, currentIndex, liCount);
  };
}

function scrollDiv(carouselElem, nextIndex) {
  var scrollable = carouselElem.querySelector("div");
  var liWidth = scrollable.clientWidth;
  var newLeft = liWidth * nextIndex;
  //   console.log(liWidth, nextIndex, newLeft);

  scrollable.scrollTo({ left: newLeft, behavior: "smooth" });
}

function updateIndicator(carouselElem, currentIndex) {
  var indicators = carouselElem.querySelectorAll("footer > div");
  for (let i = 0; i < indicators.length; i++) {
    if (currentIndex === i) {
      indicators[i].className = "active";
    } else {
      indicators[i].className = "";
    }
  }
}

function updateSlideButtonVisible(carouselElem, currentIndex, liCount) {
  var left = carouselElem.querySelector(".slide-left");
  var right = carouselElem.querySelector(".slide-right");

  if (currentIndex > 0) {
    left.style.display = "block";
  } else {
    left.style.display = "none";
  }

  if (currentIndex < liCount - 1) {
    right.style.display = "block";
  } else {
    right.style.display = "none";
  }
}
