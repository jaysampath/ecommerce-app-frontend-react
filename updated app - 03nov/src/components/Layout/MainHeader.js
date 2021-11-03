import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainHeader.module.css";
import AppAuthContext from "../../context/app-auth-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
//import { useState } from "react";
import React from "react";

// const HoverableUserAccountDiv = React.memo(
//   ({ handleMouseOver, handleMouseOut }) => {
//     return (
//       <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//         Your Account
//       </li>
//     );
//   }
// );

const Header = (props) => {
  const appAuthCtx = useContext(AppAuthContext);

  const logoutHandler = () => {
    appAuthCtx.logout();
    window.location.href = "http://localhost:3006";
  };

  //const [isHoverOnAccount, setIsHoverOnAccount] = useState(false);

  // const handlerMouseOver = () => {
  //   setIsHoverOnAccount(true);
  // };

  // const handlerMouseOut = () => {
  //   setIsHoverOnAccount(false);
  // };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <Link to="/" className={classes.logo}>
            Ecommerce App
          </Link>
        </h1>
        {appAuthCtx.isLoggedIn
          ? `Welcome, ${appAuthCtx.token["loginCookieForEcommerce"]}`
          : null}
        <nav className={classes.nav}>
          <ul>
            <li>
              <HeaderCartButton />
            </li>

            <li>
              <Link to="/user-account" className={classes.accountLink}>Your Account</Link>
            </li>

            <li>
              <button onClick={logoutHandler} className={classes.logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
