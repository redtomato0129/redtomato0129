import styles from "styles/MobileBasket.module.scss";
import BasketItem from "components/BasketItem";

const MobileBasket = () => {
  return (
    <div className={styles.mobileBasket}>
      {[...new Array(10)].map((item, key) => (
        <BasketItem key={key} />
      ))}
      <button type="button" className={styles.confirmBtn}>
        Confirm the basket
      </button>
    </div>
  );
};

export default MobileBasket;
