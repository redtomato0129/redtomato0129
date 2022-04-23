import styles from "styles/Quantity.module.scss";
import GetIcon from "components/GetIcon";
import { BasketContext } from "context/BasketContext";
import { useContext, useRef, useEffect } from "react";

const Quantity = ({ data }) => {
  const inp = useRef("inp");
  const { basketItems, setBasketItems, setBasketTotal, currentQuantity, setCurrentQuantity } = useContext(BasketContext);

  useEffect(() => {
    inp.current.value = data.quantity || 1;
    setCurrentQuantity(1);
  }, [data.quantity]);

  const increase = () => {
    let arr = [...basketItems];
    let filtered = basketItems.filter((item) => item.id === data.id)[0];
    if (filtered) {
      filtered.quantity++;
      arr[arr.indexOf(filtered)] = filtered;
      setBasketItems(arr);
      inp.current.value = filtered.quantity;
      setBasketTotal((oldState) => {
        return oldState + filtered.price;
      });
    } else {
      setCurrentQuantity(parseInt(inp.current.value) + 1);
      inp.current.value = currentQuantity + 1;
    }
  };

  const decrease = () => {
    let arr = [...basketItems];
    let filtered = basketItems.filter((item) => item.id === data.id)[0];
    if (filtered && filtered.quantity > 1) {
      filtered.quantity--;
      arr[arr.indexOf(filtered)] = filtered;
      setBasketItems(arr);
      inp.current.value = filtered.quantity;
      setBasketTotal((oldState) => {
        return oldState - filtered.price;
      });
    } else {
      if (currentQuantity > 1) {
        setCurrentQuantity(parseInt(inp.current.value) - 1);
        inp.current.value = currentQuantity - 1;
      }
    }
  };

  return (
    <div className={styles.quantity}>
      <button type="button" className={styles.quantityBtn} onClick={decrease}>
        <GetIcon icon="BsDash" size={20} />
      </button>
      <input type="number" min="1" max="10" defaultValue={1} ref={inp} />
      <button type="button" className={styles.quantityBtn} onClick={increase}>
        <GetIcon icon="BsPlus" size={20} />
      </button>
    </div>
  );
};

export default Quantity;
