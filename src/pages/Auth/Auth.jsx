import React from "react";
import { useParams } from "react-router-dom";

const AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=${
  import.meta.env.VITE_CLIENT_ID
}&redirect_uri=${
  import.meta.env.VITE_REDIRECT_URI
}&scope=user_profile,user_media&response_type=code`;
export const Auth = () => {
  return (
    <div>
      <form className="form">
        <h2 className="align-self-center fw-400">This is Your Memories</h2>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/544/247/609/4k-couple-moments-silhouette-wallpaper-preview.jpg"
          alt="banner image"
          className="image-resp"
        />

        <a href={AUTH_URL} className="btn btn-cta align-self-center">
          Login with Instagram
        </a>
      </form>
    </div>
  );
};

//Solve this auth issue
