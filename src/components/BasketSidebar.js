import styles from "styles/BasketSidebar.module.scss";
import GetIcon from "components/GetIcon";
import Title from "components/Title";
import clsx from "clsx";

const BasketSidebar = () => {
  return (
    <div className={clsx(styles.sidebarContainer, styles.hide)}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.title}>
            <Title txt="your basket" size={20} transform="uppercase" />
            <small>your basket has got 5 items</small>
          </div>
          <button className={styles.close}>
            <GetIcon icon="BsX" size={30} />
          </button>
        </div>
        <div className={styles.items}>
          {[...new Array(10)].map((item, key) => (
            <div className={styles.item} key={key}>
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
          ))}
        </div>
        <div className={styles.basketTotal}>
          <div className={styles.total}>
            <Title txt="basket summary" size={23} transform="uppercase" />
            <GetIcon icon="BsFillCartCheckFill" size={25} />
          </div>
          <div className={styles.totalPrice}>
            <small>total</small>
            <div className={styles.price}>
              <span>521525 TRY</span>
            </div>
          </div>
          <button type="button" className={styles.confirmBtn}>
            confirm the basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketSidebar;
