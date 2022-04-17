import styles from "styles/Header.module.scss";
import { Link } from "react-router-dom";
import linkBG from "images/shopBG.jpg";
import GetIcon from "components/GetIcon";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>react store</h2>
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
                <li>
                  <Link to="/" className={styles.sub_a}>
                    <img src={linkBG} alt="link background image" />
                    <h3>electronics</h3>
                  </Link>
                </li>
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
