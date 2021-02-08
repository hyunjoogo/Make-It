const colors = document.querySelectorAll(".colors");
const activeBtn = document.querySelectorAll(".activeBtn");
const brushSize = document.querySelector(".bruschsize");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

ctx.lineWidth = 30;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

const draw = e => {
  const x = e.clientX;
  const y = e.clientY;
  if (!drawing) return;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
};

canvas.addEventListener("mouseout", () => (drawing = false));
canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mousemove", draw);

const changeColor = e => {
  console.log(e);
  const color = e.target.className;
  ctx.strokeStyle = color;
};

colors.forEach(color => {
  color.addEventListener("click", changeColor);
});
