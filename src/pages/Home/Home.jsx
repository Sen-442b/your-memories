import { onValue, ref } from "firebase/database";
import { collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { db } from "../../firebase";
import { getAccessTokenService } from "../../services/authService";
import {
  getUserDataService,
  postUserDataService,
} from "../../services/userDataServices";
import { useNavigate, useParams } from "react-router-dom";
export const Home = ({ code }) => {
  const [accessTokenObj, setAccessTokenObj] = useState({});
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  //   const [userDataClient, setUserDataClient] = useState([]);

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
      if (response.data) {
        setUserName(response.data[0]["username"]);
        postUserDataService(response.data);
      }
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

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
    }
  }, [userData]);
  useEffect(() => {
    if (userName) {
      const userRef = ref(db, "users/" + userName);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data);
          setUserData(data);
          navigate(`/${userName}`, { state: data });
        } else {
          console.log("No Data Found");
        }
      });
    }
  }, [userName]);

  return <div>nice</div>;
};
