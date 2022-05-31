import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  //   console.log(user);
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.token;
          localStorage.setItem("accesstoken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
