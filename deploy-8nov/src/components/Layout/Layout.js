import { Fragment, useContext } from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
import Categories from "./Categories";
import Footer from "./Footer";
import AppAuthContext from "../../context/app-auth-context";

const Layout = (props) => {
  const authCtx = useContext(AppAuthContext);

  if(!authCtx.isLoggedIn){
    window.location.href="http://localhost:3000/login";
  }

  return (
    <Fragment>
      <MainHeader />
      <Categories />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;