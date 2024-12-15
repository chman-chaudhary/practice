const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const li = document.getElementsByTagName("li");

const tl = gsap.timeline();

tl.to(sidebar, {
  x: 0,
  duration: 0.6,
});

tl.from(li, {
  x: 20,
  opacity: 0,
  duration: 0.3,
  stagger: 0.3,
});

tl.pause();

main.addEventListener("mousemove", (dets) => {
  const { x, y } = dets;

  gsap.to(cursor, {
    x,
    y,
    duration: 1,
    ease: "back.out",
  });
});

open.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
