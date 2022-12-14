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
import { Skeleton } from "@mui/material";
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
    if (userName) {
      const userRef = ref(db, "users/" + userName);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData(data);
          navigate(`/${userName}`, { state: data });
        } else {
          console.log("No Data Found");
        }
      });
    }
  }, [userName]);

  return (
    <div className="flex-wrap gap-mdm">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => (
        <Skeleton variant="rectangular" width={300} height={400} />
      ))}
    </div>
  );
};
