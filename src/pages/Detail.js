import GetIcon from "components/GetIcon";
import Title from "components/Title";
import { Link } from "react-router-dom";
import styles from "styles/Detail.module.scss";

const Detail = () => {
  return (
    <section className={styles.detail}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              <Title txt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" transform="uppercase" size={20} />
            </div>
            <div className={styles.category}>
              <Link to="/" style={{ color: "#0E3EDA" }}>
                men's clothing
              </Link>
            </div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                <GetIcon icon="BsFillStarFill" color="#F0A500" size={20} />
                <GetIcon icon="BsStarHalf" color="#F0A500" size={20} />
              </div>
              <small>count 125</small>
            </div>
            <div className={styles.price}>
              <p>
                45514778 <small>TRY</small>
              </p>
            </div>
            <div className={styles.addToBasketAndQuantity}>
              <div className={styles.quantity}>
                <button type="button" className={styles.quantityBtn}>
                  <GetIcon icon="BsDash" size={20} />
                </button>
                <input type="number" min="1" max="10" defaultValue={1} />
                <button type="button" className={styles.quantityBtn}>
                  <GetIcon icon="BsPlus" size={20} />
                </button>
              </div>
              <button className={styles.addToBasket}>
                <GetIcon icon="BsFillCartPlusFill" size={18} /> add to basket
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Title txt="Description" size={22} transform="capitalize" />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil molestias, dolorum necessitatibus officia odio iste aliquam voluptate, quia inventore
            dolore aperiam temporibus iusto? Ullam nobis quisquam incidunt sunt odit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
