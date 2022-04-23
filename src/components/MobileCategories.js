import styles from "styles/MobileCategories.module.scss";
import CategoryItem from "components/CategoryItem";
import useMakeRequest from "hooks/useMakeRequest";

const MobileCategories = ({ setNavIsOpen }) => {
  const result = useMakeRequest("https://fakestoreapi.com/products/categories");

  return (
    <div className={styles.mobileCategories}>
      <ul className={styles.mobileCategoriesMenu}>
        {result.data ? result.data.map((cat, index) => <CategoryItem data={cat} key={index} setNavIsOpen={setNavIsOpen} />) : <div>{result.error}</div>}
      </ul>
    </div>
  );
};

export default MobileCategories;
