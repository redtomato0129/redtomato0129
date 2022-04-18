import styles from "styles/BasketItem.module.scss";
import Title from "components/Title";
import GetIcon from "components/GetIcon";

const BasketItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>img</div>
      <div className={styles.detail}>
        <div className={styles.title}>
          <Title txt="notebook i5 intel lorem ipsum" size={16} transform="capitalize" />
        </div>
        <div className={styles.priceContainer}>
          <small className={styles.singlePrice}>14554</small>
          <small className={styles.quantityN}>2</small>
          <small className={styles.totalPrice}>54558 TRY</small>
        </div>
        <div className={styles.quantity}>
          <button type="button" className={styles.quantityBtn}>
            <GetIcon icon="BsDash" size={20} />
          </button>
          <input type="number" min="1" max="10" defaultValue={1} />
          <button type="button" className={styles.quantityBtn}>
            <GetIcon icon="BsPlus" size={20} />
          </button>
        </div>
      </div>
      <div className={styles.removeItem}>
        <GetIcon icon="BsDash" size={17} />
      </div>
    </div>
  );
};

export default BasketItem;
