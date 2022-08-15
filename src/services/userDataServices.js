import axios from "axios";

export const getUserDataService = async (accessToken) => {
  const response = await axios.get(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,thumbnail_url&access_token=${accessToken}`
  );
  console.log(response);
  return response.data;
};
