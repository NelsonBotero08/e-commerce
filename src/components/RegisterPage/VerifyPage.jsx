import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/RegisterPage/verifyPage.css";
import axios from "axios";

const VerifyPage = () => {
  const { code: emailCode } = useParams();
  const [verifiedStatus, setVerifiedStatus] = useState();

  useEffect(() => {
    axios
      .get(
        `https://ecommersbackend-s8c9.onrender.com/users/verify/${emailCode}`
      )
      .then(() => {
        setVerifiedStatus("verified");
      })
      .catch(() => {});
  }, [emailCode]);

  if (verifiedStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  if (verifiedStatus === "verified") {
    return (
      <div className="contain">
        <div>
          <i className="bx bx-check"></i>
        </div>
        <h1>User verified!</h1>
        <p>
          <Link to="/login">Login with your credentials to enter the app</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="contain">
        <div>
          <i className="bx bx-x"></i>
        </div>
        <h1>There was an error</h1>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
};

export default VerifyPage;
