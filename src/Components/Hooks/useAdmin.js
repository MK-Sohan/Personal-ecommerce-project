import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState([false]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://frozen-taiga-15313.herokuapp.com/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.admin);
          setAdmin(data.admin);
          setIsloading(true);
        });
    }
  }, [user]);
  return [admin, setAdmin, setIsloading];
};

export default useAdmin;
