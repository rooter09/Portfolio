import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    lerp: 0.1, // Smoothness factor
    smoothWheel: true,
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Apply Splitting.js to elements with 'para' and 'title' classes
  Splitting();

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // Animate paragraphs
  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    para.anim = gsap.fromTo(
      para.querySelectorAll(".word"), // Splitting.js automatically adds span wrappers
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  // Animate titles
  titles.forEach((title: ParaElement) => {
    title.anim = gsap.fromTo(
      title.querySelectorAll(".char"), // Splitting.js adds span wrappers for characters
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
