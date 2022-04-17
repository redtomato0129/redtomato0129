import styles from "styles/Home.module.scss";
import Card from "components/Card";
import Title from "components/Title";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.title}>
            <Title txt="all products" color="#171717" size={22} transform="uppercase" />
          </div>
        </div>
        <div className={styles.row}>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Home;
