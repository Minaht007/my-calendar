import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Auth = () => {
  return (
    <div>
      <NavLink className={styles.link} to="/register">
        Registration
      </NavLink>
      |
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default Auth;
