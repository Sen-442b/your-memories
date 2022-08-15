import React from "react";

export const ImageCard = ({ imageData }) => {
  const { id, caption, media_type, media_url, timestamp, username } = imageData;
  return (
    <div>
      <img src={media_url} alt="" className="image-resp" />
      <p>{caption}</p>
    </div>
  );
};
