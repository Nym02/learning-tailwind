const btn = document.querySelectorAll("#btn");
const des = document.querySelectorAll("#desc");

btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    let t = b.nextElementSibling.scrollHeight;
    let panel = b.nextElementSibling;

    des.forEach((d) => {
      if (e.target.nextElementSibling !== d) {
        d.style.maxHeight = 0 + "px";
        d.style.transition = "all 1s";
        d.classList.add("cc");

        // console.log(d);
      }
    });

    if (panel.classList.contains("cc")) {
      panel.style.maxHeight = t + "px";
      panel.style.transition = "all 1s";
      panel.classList.remove("cc");
    } else {
      panel.style.maxHeight = 0 + "px";
      panel.style.transition = "all 1s";
      panel.classList.add("cc");
    }
  });
});
