import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const getUserDataService = async (accessToken) => {
  const response = await axios.get(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,thumbnail_url&access_token=${accessToken}`
  );
  console.log(response);
  return response.data;
};

// FIREBASE CLOUD DB

export const postUserDataService = async (data) => {
  const username = data[0]["username"];
  const reference = ref(db, "users/" + username);
  set(reference, data);
};

//complete firebase auth
