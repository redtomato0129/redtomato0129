import styles from "styles/BasketItem.module.scss";
import Title from "components/Title";
import GetIcon from "components/GetIcon";

const BasketItem = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.detail}>
        <div className={styles.title}>
          <Title txt={data.title} size={16} transform="capitalize" />
        </div>
        <div className={styles.priceContainer}>
          <small className={styles.singlePrice}>{data.price}</small>
          <small className={styles.quantityN}>1</small>
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
        <button type="button">
          <GetIcon icon="BsDash" size={17} />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
