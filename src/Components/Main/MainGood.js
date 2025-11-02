//ALL CODE BELOW ADDED (SAME AS LECTURE 17 CODE EXAMPLE "MAINGOOD.JS")

import React from "react";
import { Link, useNavigate } from "react-router-dom"; //LINE ADDED
import { logoutUser } from "../Auth/AuthService"; //LINE ADDED

const MainGood = () => {
  const navigate = useNavigate(); //LINE ADDED

  return (
    <div>
      <h1>User: WILL SULLIVAN</h1>

      <button>
        <Link to="/main">Go back.</Link>
      </button>
      <br />
      {/*LOGOUT BUTTON ADDED*/}
      <button
        onClick={async () => {
          await logoutUser();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default MainGood;
