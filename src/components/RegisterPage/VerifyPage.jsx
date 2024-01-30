import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/RegisterPage/verifyPage.css";
import axios from "axios";

const VerifyPage = () => {
  const { code: emailCode } = useParams();
  const [verifiedStatus, setVerifiedStatus] = useState("loading");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/verify/${emailCode}`)
      .then((res) => {
        setVerifiedStatus("verified");
      })
      .catch(() => {
        setVerifiedStatus("notVerified");
      });
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
          <Link to="/login">Login</Link> with your credentials to enter the app
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
