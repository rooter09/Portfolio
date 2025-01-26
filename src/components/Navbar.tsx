import { useEffect } from "react";
import Lenis from "lenis";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

let lenis: Lenis;

const Navbar: React.FC = () => {
  useEffect(() => {
    lenis = new Lenis({
      lerp: 0.1, 
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.scrollTo(0); // Scroll to the top on load

    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");
    links.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        const section = elem.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section) as HTMLElement | null;
          if (target) lenis.scrollTo(target);
        }
      });
    });

    return () => {
      lenis.destroy(); // Clean up Lenis instance on component unmount
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          HARSH SANDILYA
        </a>
        <a
          href="mailto:harsh@nexxigital.com"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noopener noreferrer"
        >
          harsh@nexxigital.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
