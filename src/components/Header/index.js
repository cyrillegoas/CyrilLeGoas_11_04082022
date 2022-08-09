import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { HorizontalNav } from "../HorizontalNav";
import { ConditionalWrapper } from "../HelperComponents";

export const Header = (props) => {
  const navItems = [
    {
      path: "/",
      name: "Accueil",
    },
    {
      path: "/about",
      name: "A Propos",
    },
  ];

  return (
    <header className={styles.header}>
      <Link to="/">
        <ConditionalWrapper
          isWrapped={props.isLogoH1}
          wrapper={(children) => <h1>{children}</h1>}
        >
          <img
            className={styles.header__logo}
            src={props.logoPath}
            alt="logo"
          />
        </ConditionalWrapper>
      </Link>
      <HorizontalNav navItems={navItems} />
    </header>
  );
};
