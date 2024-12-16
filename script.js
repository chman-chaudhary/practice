window.addEventListener("wheel", (event) => {
  if (event.deltaY >= 0) {
    gsap.to("img", { rotate: 180 });
    gsap.to(".marque", {
      x: "-200%",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  } else {
    gsap.to("img", { rotate: 0 });
    gsap.to(".marque", {
      x: "0%",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  }
});
