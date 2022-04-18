import styles from "styles/App.module.scss";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import BasketSidebar from "components/BasketSidebar";
import Footer from "components/Footer";
import Detail from "pages/Detail";
import MobileBottomNav from "components/MobileBottomNav";
import useMobileDetect from "hooks/useMobileDetect";

const App = () => {
  const device = useMobileDetect();

  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product" exact>
              <Detail />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
      <BasketSidebar />
      {device.type === "mobile" && <MobileBottomNav />}
    </Router>
  );
};

export default App;
