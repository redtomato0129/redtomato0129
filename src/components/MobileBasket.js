import styles from "styles/MobileBasket.module.scss";
import BasketItem from "components/BasketItem";

const MobileBasket = () => {
  return (
    <div className={styles.mobileBasket}>
      {[...new Array(10)].map((item, key) => (
        <BasketItem key={key} />
      ))}
    </div>
  );
};

export default MobileBasket;
