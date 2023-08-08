let span = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    changeColor(count);
    span.textContent = count.toString();
  });
});

const changeColor = (color) => {
  if (count < 0) {
    span.style.color = "red";
  } else if (count > 0) {
    span.style.color = "green";
  } else {
    span.style.color = " hsl(209, 61%, 16%)";
  }
};
