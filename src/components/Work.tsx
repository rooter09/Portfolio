import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { WorkData } from "../data/work";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {WorkData?.map((value: any, index: number) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{value.name}</h4>
                    <p>{value.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{value.tools}</p>

                {/* Conditionally render the linktree, drive, repo links, or Coming Soon */}
                {value.comingSoon ? (
                  <div className="coming-soon">
                    <p>Coming Soon...</p>
                  </div>
                ) : (
                  <div className="links-container">
                    {value.linktree && (
                      <div className="linktree">
                        <a
                          href={value.linktree}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linktree-link"
                        >
                          Visit my LinkTree
                        </a>
                      </div>
                    )}
                    {value.drive && (
                      <div className="drive">
                        <a
                          href={value.drive}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="drive-link"
                        >
                          Visit my Drive
                        </a>
                      </div>
                    )}
                    {value.repoLink && (
                      <div className="repo">
                        <a
                          href={value.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repo-link"
                        >
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <WorkImage
                image={`/wimages/${value.image}`} // Use relative path to images
                alt={value.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
