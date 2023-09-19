import React, { useState, useEffect } from "react";

const useAuth = (jwt) => {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    if (jwt > 25) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return isAuth;
};

export default useAuth;
