import styles from "styles/AddToBasketBtn.module.scss";
import { BasketContext } from "context/BasketContext";
import { useContext } from "react";
import GetIcon from "components/GetIcon";

const AddToBasketBtn = ({ data: product }) => {
  const { basketItems, setBasketItems, setBasketTotal } = useContext(BasketContext);

  const addToBasket = (product) => {
    setBasketTotal((oldTotal) => (oldTotal += product.price));
    let filtered = basketItems.filter((item) => item.id === product.id);
    if (filtered.length > 0) {
      filtered[0].quantity += 1;
    } else {
      setBasketItems((oldState) => [
        ...oldState,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <button
      className={styles.addToBasket}
      onClick={(e) => {
        e.preventDefault();
        addToBasket(product);
      }}
    >
      <GetIcon icon="BsFillCartPlusFill" size={18} /> add to basket
    </button>
  );
};

export default AddToBasketBtn;
