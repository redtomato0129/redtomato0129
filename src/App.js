import styles from "styles/App.module.scss";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import BasketSidebar from "components/BasketSidebar";
import Footer from "components/Footer";
import Detail from "pages/Detail";
import MobileBottomNav from "components/MobileBottomNav";
import useMobileDetect from "hooks/useMobileDetect";
import BasketContextProvider from "context/BasketContext";
import clsx from "clsx";

const App = () => {
  const device = useMobileDetect();

  return (
    <Router>
      <BasketContextProvider>
        <div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
          <Header />
          <main className={styles.main}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/product">
                <Detail />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
        <BasketSidebar />
        {device.type === "mobile" && <MobileBottomNav />}
      </BasketContextProvider>
    </Router>
  );
};

export default App;
