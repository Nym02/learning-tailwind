const bars = document.querySelectorAll("#first-bar");
const mainBar = document.querySelector("#main-bar");
const menu = document.querySelector("#menu");
const transformation = document.querySelector("#menu ul li #transformation");
const transformSubMenu = document.querySelector(
  "#menu ul li #transformSubMenu"
);
const transformSubMenuBack = document.querySelector(
  "#menu #transformSubMenu #transformSubMenuBack"
);
const solutions = document.querySelector("#menu ul li #solutions");
const solutionSubMenu = document.querySelector("#menu ul li #solutionSubMenu");
const solutionSubMenuBack = document.querySelector(
  "#menu #solutionSubMenu #solutionSubMenuBack"
);

mainBar.addEventListener("click", (e) => {
  if (mainBar.classList.contains("cc")) {
    for (let i = 0; i < bars.length; i++) {
      if (i == 0) {
        bars[i].style.transform = "rotate(45deg) translateY(14px)";
      }
      if (i == 1) {
        bars[i].style.transform = "rotate(0) translateX(-100px)";
        bars[i].style.opacity = "0";
      }
      if (i == bars.length - 1) {
        bars[i].style.transform = "rotate(-45deg) translateY(-14px)";
      }
    }
    mainBar.classList.remove("cc");
  } else {
    for (let i = 0; i < bars.length; i++) {
      if (i == 0) {
        bars[i].style.transform = "rotate(0deg) translateY(0px)";
      }
      if (i == 1) {
        bars[i].style.transform = "translateX(0px)";
        bars[i].style.opacity = "1";
      }
      if (i == bars.length - 1) {
        bars[i].style.transform = "rotate(0deg) translateY(0px)";
      }
    }
    mainBar.classList.add("cc");
  }
});

mainBar.addEventListener("click", (e) => {
  if (menu.classList.contains("-left-full")) {
    menu.classList.remove("-left-full");
    menu.classList.add("left-0");
  } else {
    menu.classList.remove("left-0");
    menu.classList.add("-left-full");
  }
});

// first item sub menu

transformation.addEventListener("click", (e) => {
  // transformSubMenu.style.right = "0px";
  if (
    transformSubMenu.classList.contains("-right-full") &&
    transformSubMenu.classList.contains("invisible")
  ) {
    transformSubMenu.classList.remove("invisible");
    transformSubMenu.classList.remove("-right-full");

    transformSubMenu.classList.add("visible");
    transformSubMenu.classList.add("right-0");
  }
});

transformSubMenuBack.addEventListener("click", (e) => {
  if (
    transformSubMenu.classList.contains("right-0") &&
    transformSubMenu.classList.contains("visible")
  ) {
    transformSubMenu.classList.remove("visible");
    transformSubMenu.classList.remove("right-0");

    transformSubMenu.classList.add("invisible");
    transformSubMenu.classList.add("-right-full");
  }
});
// first item sub menu
// 2nd item sub menu

solutions.addEventListener("click", (e) => {
  // transformSubMenu.style.right = "0px";
  if (
    solutionSubMenu.classList.contains("-right-full") &&
    solutionSubMenu.classList.contains("invisible")
  ) {
    solutionSubMenu.classList.remove("invisible");
    solutionSubMenu.classList.remove("-right-full");

    solutionSubMenu.classList.add("visible");
    solutionSubMenu.classList.add("right-0");
  }
});
solutionSubMenuBack.addEventListener("click", (e) => {
  if (
    solutionSubMenu.classList.contains("right-0") &&
    solutionSubMenu.classList.contains("visible")
  ) {
    solutionSubMenu.classList.remove("visible");
    solutionSubMenu.classList.remove("right-0");

    solutionSubMenu.classList.add("invisible");
    solutionSubMenu.classList.add("-right-full");
  }
});
// sub menu of 2nd item sub menu

const expandSolutionSubMenu = (id2) => {
  // const solutionItemOne = document.querySelector(`#${id2}`);
  const solutionItemSubMenu = document.querySelector(`#${id2}`);

  if (
    solutionItemSubMenu.classList.contains("-right-full") &&
    solutionItemSubMenu.classList.contains("invisible")
  ) {
    solutionItemSubMenu.classList.remove("invisible");
    solutionItemSubMenu.classList.remove("-right-full");

    solutionItemSubMenu.classList.add("visible");
    solutionItemSubMenu.classList.add("right-0");
  } else {
    solutionItemSubMenu.classList.remove("visible");
    solutionItemSubMenu.classList.remove("right-0");

    solutionItemSubMenu.classList.add("invisible");
    solutionItemSubMenu.classList.add("-right-full");
  }
};

// sub menu of 2nd item sub menu
// 2nd item sub menu
