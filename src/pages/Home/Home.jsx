import React, { useState, useEffect } from "react";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { getAccessTokenService } from "../../services/authService";
import { getUserDataService } from "../../services/userDataServices";

export const Home = ({ code }) => {
  const [accessTokenObj, setAccessTokenObj] = useState({});
  const [userData, setUserData] = useState([]);

  const getAccessTokenHandler = async (code) => {
    try {
      const response = await getAccessTokenService(code);
      setAccessTokenObj(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserDataHandler = async (accessTokenObj) => {
    try {
      const response = await getUserDataService(accessTokenObj.access_token);
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAccessTokenHandler(code);
  }, []);
  useEffect(() => {
    if (accessTokenObj?.access_token) {
      getUserDataHandler(accessTokenObj);
    }
  }, [accessTokenObj]);
  return (
    <div>
      {userData.length !== 0 &&
        userData.map((imageData) => {
          return <ImageCard key={imageData.id} imageData={imageData} />;
        })}
    </div>
  );
};
