import styles from "styles/Card.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "./GetIcon";
import Title from "./Title";

const Card = () => {
  return (
    <div className={styles.card}>
      <Link to="/" className={styles.content}>
        <div className={styles.img}>
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
          </div>
          <div className={styles.footer}>
            <div className={styles.price}>
              <small>
                <GetIcon icon="BsCurrencyDollar" size={17} color="#171717" />
              </small>
              <Title txt="125425" size={20} />
            </div>
            <button className={styles.addToBasket}>
              <GetIcon icon="BsFillCartPlusFill" size={18} /> add to basket
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
