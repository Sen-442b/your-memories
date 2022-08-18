import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { db } from "../../firebase";

export const User = () => {
  const [fetchedUserData, setFetchedUserData] = useState([]);
  const { state } = useLocation();
  console.log(state);
  const { username } = useParams();
  const navigate = useNavigate();
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
    <div className="mob-grid-col-1  tab-grid-col-2--50-50  pc-sml-grid-2--50-50 grid-col-3--33-33-33 gap-mdm">
      {(state || fetchedUserData).length !== 0 ? (
        (state || fetchedUserData).map((imageData) => {
          return <ImageCard key={imageData.id} imageData={imageData} />;
        })
      ) : (
        <div className="modal-container flex-center">
          <div className="modal-content padding-mdm  flex-column flex-center">
            <p>404</p>
            <button className="btn btn-cta" onClick={() => navigate("/")}>
              Go to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
