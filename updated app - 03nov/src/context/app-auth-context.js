import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import Cookies from "js-cookie";

const AppAuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logout: () => {},
});

export const AppAuthContextProvider = (props) => {
  
  const [cookie, setCookie] = useCookies(["loginCookieForEcommerce"]);
  

  const storedCookie = Cookies.get("loginCookieForEcommerce");
 
  console.log("loginCookieForEcommerce in app: ",storedCookie);
  

  const [token, setToken] = useState(storedCookie);
 
  const userIsAuth = !!token;

  const logoutHandler = () => {
    setToken(null);
    console.log("logout");
    setCookie("loginCookieForEcommerce","",{path:"/"});
   // removeCookie("loginCookie");
  };

  const contextValue = {
    token: cookie,
    isLoggedIn: userIsAuth,
    logout: logoutHandler,
  };

  return (
    <AppAuthContext.Provider value={contextValue}>
      {props.children}
    </AppAuthContext.Provider>
  );
};

export default AppAuthContext;