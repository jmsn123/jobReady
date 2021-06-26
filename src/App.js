import "./App.css";
import Cart from "./components/cart";
import Login from "./components/login";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoteTaker from "./components/noteTaker";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/notetaker" component={NoteTaker} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
