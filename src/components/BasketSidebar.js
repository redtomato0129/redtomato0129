import styles from "styles/BasketSidebar.module.scss";
import GetIcon from "components/GetIcon";
import Title from "components/Title";

const BasketSidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
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
          <div className={styles.item}>
            <div className={styles.img}>img</div>
            <div className={styles.detail}>
              <div className={styles.title}>
                <Title txt="notebook i5 intel lorem ipsum" size={17} transform="capitalize" />
              </div>
              <div className={styles.priceContainer}>
                <small className={styles.singlePrice}>14554</small>
                <small className={styles.quantityN}>2</small>
                <small className={styles.totalPrice}>54558</small>
              </div>
              <div className={styles.quantity}>
                <button type="button" className={styles.quantityBtn}>
                  <GetIcon icon="BsPlus" size={20} />
                </button>
                <input type="number" min="1" max="10" defaultValue={1} />
                <button type="button" className={styles.quantityBtn}>
                  <GetIcon icon="BsDash" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketSidebar;
