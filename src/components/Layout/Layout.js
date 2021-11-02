import { Fragment } from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
import Categories from "./Categories";
import Footer from "./Footer";

const Layout = (props) => {
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