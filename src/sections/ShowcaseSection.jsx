import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
        <div ref={rydeRef} className="first-project-wrapper">
          <div className="image-wrapper">
            <img src="/images/storeit2.webp" alt="Ryde App Interface" />
          </div>
          <div className="text-content">
            <h2>
              <a
                href="https://storeit-ochre-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-50 hover:underline"
              >
                A scalable, secure storage platform inspired by Google Drive, Dropbox, and OneDrive.
              </a>
            </h2>
            <p className="text-white-50 md:text-xl">
              A fast, user-friendly web app built with React, Next.js, Appwrite, and TypeScript.
            </p>
          </div>
        </div>


          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/teknoymart.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>
                <a 
                  href="https://github.com/Kurtqttt/teknoymart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 hover:underline"
                >
                TeknoyMart an Online E-commerce Platform using SpringBoot
                </a>
                </h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;