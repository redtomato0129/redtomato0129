import styles from "styles/BasketSidebar.module.scss";
import GetIcon from "components/GetIcon";
import Title from "components/Title";
import clsx from "clsx";
import BasketItem from "components/BasketItem";

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
            <BasketItem key={key} />
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
            Confirm the basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketSidebar;
