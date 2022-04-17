import styles from "styles/App.module.scss";
import Header from "components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>footer</footer>
      </div>
    </Router>
  );
};

export default App;
