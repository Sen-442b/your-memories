import React, { useEffect } from "react";
import { postUserDataService } from "../../services/userDataServices";

export const ImageCard = ({ imageData }) => {
  const { caption, media_type, media_url, timestamp } = imageData;

  return (
    <div className="card-container curved-border height-100">
      {media_type === "IMAGE" ? (
        <img className="image-resp" src={media_url} alt={media_type} />
      ) : (
        <video className="image-resp" controls>
          <source src={media_url} type="video/mp4" />
        </video>
      )}
      <div
        className={`card-info hover-to-display ${
          media_type === "IMAGE" ? "pos-abs-bottom" : "pos-abs-top-left"
        } flex-f-start`}
      >
        <div className="text-align-left">
          <p className="card-subtitle">{caption}</p>
          <p className="card-subtitle">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};
