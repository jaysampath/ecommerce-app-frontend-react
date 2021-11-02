import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.actionsDiv}>
        <h3> My Shopping App &#169; Jay </h3>
         <p className={classes.link}>  About Us  </p>
          <p className={classes.link}>Contact Us</p>
          <p className={classes.link}>Return Policy</p>
          <p className={classes.link}>Privacy Policy</p>
      </div>
      
    </footer>
  );
};

export default Footer;