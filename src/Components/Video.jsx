import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCircleChevronRight } from "react-icons/fa6";

import videoHome from "./COMMENT.mp4";

gsap.registerPlugin(ScrollTrigger);

const VideoCard = () => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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
        src={videoHome}
        type="video/mp4"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className="video-card__overlay">
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
