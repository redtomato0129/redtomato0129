import styles from "styles/MobileCategories.module.scss";
import CategoryItem from "components/CategoryItem";

const MobileCategories = () => {
  return (
    <div className={styles.mobileCategories}>
      <ul className={styles.mobileCategoriesMenu}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </div>
  );
};

export default MobileCategories;
