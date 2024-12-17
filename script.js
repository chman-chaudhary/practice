let tl1 = gsap.timeline();

tl1.from(".logo, .navlinks li", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 1,
  stagger: 0.2,
});

tl1.from(".hero h1, .hero p, .hero button", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

tl1.from(".partners li", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-items",
    scroller: "body",
    start: "top 60%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(
  ".line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "step1"
);

tl2.from(
  ".line1.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "step1"
);

tl2.from(
  ".line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "step2"
);

tl2.from(
  ".line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "step2"
);
tl2.from(
  ".line3.left",
  {
    x: -300,
    opacity: 0,
    duration: 0.5,
  },
  "step3"
);

tl2.from(
  ".line3.right",
  {
    x: 300,
    opacity: 0,
    duration: 0.5,
  },
  "step3"
);
