import styles from "styles/BasketItem.module.scss";
import Title from "components/Title";
import GetIcon from "components/GetIcon";
import Quantity from "components/Quantity";
import { BasketContext } from "context/BasketContext";
import { useContext } from "react";

const BasketItem = ({ data }) => {
  const { basketItems, setBasketItems, setBasketTotal } = useContext(BasketContext);

  const removeItemFromBasket = () => {
    let arr = [...basketItems];
    arr.splice(arr.indexOf(data), 1);
    setBasketItems(arr);
    setBasketTotal((total) => {
      return total - data.price * data.quantity;
    });
  };

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
          <small className={styles.quantityN}>{data.quantity}</small>
          <small className={styles.totalPrice}> {`${(data.price * data.quantity).toFixed(2)}`} TRY</small>
        </div>
        <Quantity data={data} />
      </div>
      <div className={styles.removeItem}>
        <button type="button" onClick={removeItemFromBasket}>
          <GetIcon icon="BsDash" size={17} />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
