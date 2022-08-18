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
        <div className="form-field"></div>

        <button className="btn btn-cta align-self-center">
          <a href={AUTH_URL}>Login with Instagram</a>
        </button>
      </form>
    </div>
  );
};

//Solve this auth issue
