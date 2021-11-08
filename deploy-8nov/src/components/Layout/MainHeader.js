import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainHeader.module.css";
import AppAuthContext from "../../context/app-auth-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const appAuthCtx = useContext(AppAuthContext);

  const logoutHandler = () => {
    appAuthCtx.logout();
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <Link to="/" className={classes.logo}>
            FastMart
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
              <Link to="/user-account" className={classes.accountLink}>
                Your Account
              </Link>
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
