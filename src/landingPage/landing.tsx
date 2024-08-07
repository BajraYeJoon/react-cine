import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BaseLanding = () => {
  const landingRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);
  const secondDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      landingRef.current &&
      titleRef.current &&
      subtitleRef.current &&
      descriptionRef.current &&
      laptopRef.current &&
      secondDivRef.current
    ) {
      gsap.fromTo(
        landingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 },
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5 },
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.8 },
      );
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1.1 },
      );
      gsap.fromTo(
        laptopRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.4 },
      );

      gsap.to(laptopRef.current, {
        y: -500,
        scrollTrigger: {
          trigger: secondDivRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <>
      {/* <div
        ref={landingRef}
        className="app flex h-fit flex-col items-center justify-center bg-gray-900"
      >
        <div className="text-center text-white">
          <h1 ref={titleRef} className="mb-4 text-7xl font-bold">
            Welcome to CineMax
          </h1>
          <p ref={subtitleRef} className="mb-2 text-xl">
            Your ultimate destination for movie enthusiasts
          </p>
          <p ref={descriptionRef} className="text-lg">
            Discover, watch, and share your favorite movies
          </p>
        </div>
        <img
          ref={laptopRef}
          src="/mockup.png"
          alt="Laptop Mockup"
          className="w-2/5"
        />
      </div>
      <div ref={secondDivRef} className="min-h-screen bg-foreground/25"></div> */}

      <div className="section1 relative flex h-screen items-center justify-center bg-blue-500">
        <img
          src="/mockup.png"
          alt="Laptop Mockup"
          className="image left-2/5 absolute top-40"
        />
      </div>

      <div className="section2 h-screen bg-red-500"></div>

      <div className="section3 h-screen bg-green-500"></div>
    </>
  );
};

export default BaseLanding;
