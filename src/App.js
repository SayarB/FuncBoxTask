import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PageNotFound from "./PageNotFound";
import "./App.css";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Success from "./Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
