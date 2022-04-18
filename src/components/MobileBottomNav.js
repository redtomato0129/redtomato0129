import styles from "styles/MobileBottomNav.module.scss";
import GetIcon from "components/GetIcon";
import MobileCategories from "components/MobileCategories";
import { useState } from "react";
import MobileBasket from "components/MobileBasket";

const MobileBottomNav = () => {
  const [currentComponent, setCurrentComponent] = useState("");

  return (
    <div className={styles.bottomNav}>
      <div className={styles.content}>
        {(() => {
          switch (currentComponent) {
            case "categories":
              return <MobileCategories />;
            case "basket":
              return <MobileBasket />;
            default:
              return <div>Home</div>;
          }
        })()}
      </div>
      <div className={styles.navContainer}>
        <button className={styles.navItem} onClick={() => setCurrentComponent("")}>
          <GetIcon icon="BsHouseFill" size={25} />
        </button>
        <button className={styles.navItem} onClick={() => setCurrentComponent("categories")}>
          <GetIcon icon="BsList" size={25} />
        </button>
        <button className={styles.navItem} onClick={() => setCurrentComponent("basket")}>
          <GetIcon icon="BsCartFill" size={25} />
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
