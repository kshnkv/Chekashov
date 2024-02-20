const el = document.getElementById("scroll-container");
let isDown = false;
let startX;
let scrollLeft;

el.addEventListener("mousedown", (e) => {
  isDown = true;
  el.classList.add("active");
  startX = e.pageX - el.offsetLeft;
  scrollLeft = el.scrollLeft;
});

el.addEventListener("mouseleave", () => {
  isDown = false;
});

el.addEventListener("mouseup", () => {
  isDown = false;
});

el.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - el.offsetLeft;
  const walk = x - startX;
  el.scrollLeft = scrollLeft - walk;
});

let animationId;
el.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  const startScrollLeft = el.scrollLeft;
  let step = 0;

  function smoothScroll() {
    const increment = e.deltaY * 0.2;
    el.scrollLeft += increment;
    step++;

    if (step < 15) {
      animationId = requestAnimationFrame(smoothScroll);
    }
  }

  animationId = requestAnimationFrame(smoothScroll);
});

function scrollToStart(elementId) {
  var element = document.getElementById("scroll-container");
  if (element) {
    element.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    console.error("Element not found with ID:", elementId);
  }
}

var clickThreshold = 200;
var startTime;

var clickableElements = document.querySelectorAll('[onclick^="showFull"]');
clickableElements.forEach(function (element) {
  element.addEventListener("mousedown", function () {
    startTime = new Date().getTime();
  });

  element.addEventListener("mouseup", function (event) {
    var endTime = new Date().getTime();
    if (endTime - startTime <= clickThreshold) {
      var src = element.getAttribute("data-src") || element.src;
      showFull(src, event);
    }
  });
});

function showFull(src, event) {
  event.preventDefault();

  // Detect if the user is using a mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (!isMobile) {
    var fullImg = document.getElementById("fullImg");
    fullImg.src = src;
    var preview = document.getElementsByClassName("preview");
    preview[0].style.display = "block";
  } else {
    console.log("Function disabled on mobile devices.");
    // Optionally, provide feedback or an alternative behavior for mobile users
  }
}

// function showFull(src) {
//   var fullImg = document.getElementById('fullImg').src = src;
//   var preview = document.getElementsByClassName('preview');
//   preview[0].style.display = 'block';
// }

function hideFull() {
  var preview = document.getElementsByClassName("preview");
  preview[0].style.display = "none";
}
