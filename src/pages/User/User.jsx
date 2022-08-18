import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { db } from "../../firebase";

export const User = () => {
  const [fetchedUserData, setFetchedUserData] = useState([]);
  const { state } = useLocation();
  console.log(state);
  const { username } = useParams();
  useEffect(() => {
    if (!state) {
      const userRef = ref(db, "users/" + username);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setFetchedUserData(data);
        } else {
          console.log("No Data Found");
        }
      });
    }
  }, []);
  return (
    <div>
      {(state || fetchedUserData).length !== 0 ? (
        (state || fetchedUserData).map((imageData) => {
          return <ImageCard key={imageData.id} imageData={imageData} />;
        })
      ) : (
        <div>404</div>
      )}
    </div>
  );
};
