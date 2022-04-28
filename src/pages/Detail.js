import AddToBasketBtn from "components/AddToBasketBtn";
import GetIcon from "components/GetIcon";
import Quantity from "components/Quantity";
import Title from "components/Title";
import { BasketContext } from "context/BasketContext";
import useMakeRequest from "hooks/useMakeRequest";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "styles/Detail.module.scss";

const Detail = () => {
  const { slug } = useParams();
  let id = slug.split("-");
  id = id[id.length - 1];

  const result = useMakeRequest(`https://fakestoreapi.com/products/${id}`);
  const { basketItems } = useContext(BasketContext);

  const setStars = (rate) => {
    let elements = [];
    let controlNumber = 0;
    for (let i = 1; i <= 5; i++) {
      if (i <= parseInt(rate)) {
        controlNumber = parseInt(rate) - i;
        elements.push(<GetIcon icon="BsFillStarFill" color="#F0A500" size={20} key={i} />);
      } else if (controlNumber === 0) {
        controlNumber = 1;
        elements.push(<GetIcon icon="BsStarHalf" color="#F0A500" size={20} key={i} />);
      } else {
        elements.push(<GetIcon icon="BsStar" color="#F0A500" size={20} key={i} />);
      }
    }

    return elements;
  };

  const getItemFromBasket = (data) => {
    let filter = basketItems.length > 0 && basketItems.filter((item) => item.id === data.id)[0];
    if (filter) {
      return filter;
    } else {
      return data;
    }
  };

  return (
    <section className={styles.detail}>
      {!result.data ? (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Title txt="Loading..." size={25} transform="uppercase" />
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.img}>
              <img src={result.data.image} alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                <Title txt={result.data.title} transform="uppercase" size={20} />
              </div>
              <div className={styles.category}>
                <Link to={`/category/${result.data.category}`} style={{ color: "#0E3EDA" }}>
                  {result.data.category}
                </Link>
              </div>
              <div className={styles.rating}>
                <div className={styles.stars}>{setStars(result.data.rating.rate)}</div>
              </div>
              <div className={styles.price}>
                <p>
                  {result.data.price.toFixed(2)} <small>TRY</small>
                </p>
              </div>
              <div className={styles.addToBasketAndQuantity}>
                <div className={styles.quantityBox}>
                  <Quantity data={getItemFromBasket(result.data)} />
                </div>
                <AddToBasketBtn data={result.data} />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Title txt="Description" size={20} transform="capitalize" />
            <p className={styles.desc}>{result.data.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
