import styles from "styles/BasketSidebar.module.scss";
import GetIcon from "components/GetIcon";
import Title from "components/Title";
import clsx from "clsx";
import BasketItem from "components/BasketItem";
import { BasketContext } from "context/BasketContext";
import { useContext, useRef } from "react";

const BasketSidebar = () => {
  const { basketIsOpen, setBasketIsOpen, basketItems, basketTotal: _basketTotal } = useContext(BasketContext);
  const container = useRef();

  return (
    <div
      className={clsx(styles.sidebarContainer, basketIsOpen ? styles.show : styles.hide)}
      ref={container}
      onClick={(event) => event.target === container.current && setBasketIsOpen(false)}
    >
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.title}>
            <Title txt="your basket" size={20} transform="uppercase" />
            {basketItems.length > 0 ? <small>your basket has got {basketItems.length} items</small> : <small>your basket is empty...</small>}
          </div>
          <button className={styles.close} onClick={() => setBasketIsOpen(false)}>
            <GetIcon icon="BsX" size={30} />
          </button>
        </div>
        <div className={styles.items}>
          {basketItems?.map((item, key) => (
            <BasketItem data={item} key={key} />
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
              <span>{_basketTotal.toFixed(2)}</span>
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
