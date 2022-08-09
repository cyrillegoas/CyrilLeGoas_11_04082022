import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.css";

export const HorizontalNav = (props) => {
  let location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {props.navItems.map((item) => (
          <li className={styles.nav__listItem} key={item.name}>
            <Link
              className={`${styles.nav__link} ${
                location.pathname === item.path
                  ? styles[`nav__link--active`]
                  : ""
              }`}
              to={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
