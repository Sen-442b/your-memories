// complete auth services

import axios from "axios";

export const getAccessTokenService = async (code) => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "csrftoken=B6mDplRU2wUy1QeaEvkGNsG524OYlifc; ig_did=44409E11-A255-4012-84CB-274B80E51AEE; ig_nrcb=1; mid=YviivAAEAAHTup2MdD22Up09S9Vb"
  );
  const form = new FormData();
  form.append("client_id", import.meta.env.VITE_CLIENT_ID);
  form.append("client_secret", import.meta.env.VITE_CLIENT_SECRET);
  form.append("grant_type", "authorization_code");
  form.append("redirect_uri", import.meta.env.VITE_REDIRECT_URI);
  form.append("code", code);
  for (const pair of form.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  const requestOptions = {
    method: "POST",
    body: form,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.instagram.com/oauth/access_token/",
    requestOptions
  );
  const responseData = await response.json();
  return responseData;
};
