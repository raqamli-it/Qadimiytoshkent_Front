// import React, { useRef, useState } from "react";

// import videoHome from "../assets/videoHome.mp4";

// export default function Video() {
//   const videoRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const handlePlayPause = () => {
//     if (videoRef.current) {
//       if (isPaused) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//       setIsPaused(!isPaused);
//     }
//   };

//   return (
//     <>
//       <div className="home">
//         <div className="home__video-container">
//           <video
//             ref={videoRef}
//             className="home__video"
//             src={videoHome}
//             type="video/mp4"
//             muted
//             autoPlay
//             loop
//             playsInline
//           />
//           <div className="home__video-overlay">
//             <button onClick={handlePlayPause} className="home__video-button">
//               {isPaused ? "▷" : "| |"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCircleChevronRight } from "react-icons/fa6";

import videoHome from "../assets/COMMENT.mp4";

gsap.registerPlugin(ScrollTrigger);

const VideoCard = () => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        className="video-card__video"
        src={videoHome} // Video yo'lini to'g'ri kiriting
        type="video/mp4"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className="video-card__overlay">
        {/* <div className="video-card__content" ref={cardRef}>
          <h1 className="video_card_title">
            Toshkent Arxeologiya Saytiga Xush Kelibsiz
          </h1>
          <p>
            Bu yerda matn bo'ladi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <button className="video-card__button">
            <span>Batafsil</span>
            <span>
              <FaCircleChevronRight />
            </span>
          </button>
        </div> */}
        <button
          onClick={handlePlayPause}
          className="video-card__play-pause-button"
        >
          {isPaused ? "▷" : "| |"}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
