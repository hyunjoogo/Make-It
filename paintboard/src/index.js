const colors = document.querySelectorAll(".colors");
const activeBtn = document.querySelectorAll(".activeBtn");
const canvas = document.querySelector("#canvas");
const brushSize = document.querySelector(".bruschsize");

const ctx = canvas.getContext("2d");

let state = false;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

const draw = e => {
  const x = e.clientX;
  const y = e.clientY;
  if (!state) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y); // 끝점
    ctx.stroke();
  }
};

canvas.addEventListener("mousedown", () => {
  state = true;
});
canvas.addEventListener("mouseup", () => {
  state = false;
});

canvas.addEventListener("mousemove", e => {
  draw(e);
});
