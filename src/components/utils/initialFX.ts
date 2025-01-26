import gsap from "gsap";
import Splitting from "splitting";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  
  // Change body background color
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });
  const landingTextElements = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  // Split text into characters, lines, and words using Splitting.js
  Splitting({ target: landingTextElements });
  animateText(".landing-info h3, .landing-intro h2, .landing-intro h1");

  Splitting({ target: ".landing-h2-info", by: "chars" });
  animateText(".landing-h2-info");

  // Other animations
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  Splitting({ target: ".landing-h2-info-1", by: "chars" });
  Splitting({ target: ".landing-h2-1", by: "chars" });
  Splitting({ target: ".landing-h2-2", by: "chars" });

  const landingText3 = document.querySelectorAll(".landing-h2-info-1 .char");
  const landingText4 = document.querySelectorAll(".landing-h2-1 .char");
  const landingText5 = document.querySelectorAll(".landing-h2-2 .char");

  LoopText(landingText3, landingText5);
  LoopText(landingText4, landingText3);
}

// Function to animate text
function animateText(selector: string) {
  const chars = document.querySelectorAll(`${selector} .char`);
  if (!chars.length) return;

  gsap.fromTo(
    chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );
}

// Function to create looping animations
function LoopText(Text1: NodeListOf<Element>, Text2: NodeListOf<Element>) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
