import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        setisLogin(res.status);
      });
  }, []);
  if (isLogin == 200) {
    navigate("/dashboard");
  } else {
    navigate("/signup");
  }

  return <div>loading</div>;
}

export default Loading;
