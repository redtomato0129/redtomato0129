import styles from "styles/Header.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "components/GetIcon";
import clsx from "clsx";
import CategoryItem from "./CategoryItem";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <h2>react store</h2>
        </Link>
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/" className={styles.a}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.a}>
                Categories
              </Link>
              <ul className={styles.subMenu}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
              </ul>
            </li>
            <li>
              <Link to="/" className={clsx(styles.basketBtn, styles.a)}>
                <GetIcon icon="BsCart4" size={25} color="#ffffff" />
                <span className={styles.basketLength}>1</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
