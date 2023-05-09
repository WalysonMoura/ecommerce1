"use client";

import { useState } from "react";
import Image from "next/image";
import * as Style from "./styles";
import YouTube from "react-youtube";

import { FaPlay } from "react-icons/fa";

export function Video() {
  const [showPreview, setShowPreview] = useState(true);
  const videoId = "XF1aKMVcyn8";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const handlePlay = () => {
    setShowPreview(false);
  };
  return (
    <Style.VideoContainer>
      {showPreview && (
        <div>
          <Image
            src={`/images/thub.jpg`}
            width={1000}
            height={1000}
            alt="Preview Video"
            onClick={handlePlay}
          />

          <div className="play-button" onClick={handlePlay}>
            <FaPlay className="play-icon" />
          </div>

          <button onClick={handlePlay}>Play</button>
        </div>
      )}
      {!showPreview && <YouTube videoId={videoId} opts={opts} />}
    </Style.VideoContainer>
  );
}
