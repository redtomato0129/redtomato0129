import styles from "styles/Home.module.scss";
import Card from "components/Card";
import Title from "components/Title";
import useMakeRequest from "hooks/useMakeRequest";

const Home = () => {
  const result = useMakeRequest("https://fakestoreapi.com/products/");

  if (!result.data) {
    if (result.error) {
      return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <Title txt={result.error} size={25} transform="uppercase" />
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <Title txt="Loading..." size={25} transform="uppercase" />
        </div>
      );
    }
  } else {
    return (
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.row}>
            {result.data && (
              <div className={styles.title}>
                <Title txt="all products" color="#171717" size={22} transform="uppercase" />
              </div>
            )}
          </div>
          <div className={styles.row}>
            {result.data ? (
              result.data.map((product, key) => <Card product={product} key={key} />)
            ) : (
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Title txt={result.error} size={25} transform="uppercase" />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
