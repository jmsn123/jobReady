import "./App.css";
import Cart from "./components/cart";
import Login from "./components/login";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TextEditor } from "./components/noteTaker";

function App() {
  return (
    <div className="App">
      <nav>
        <div style={{ textAlign: "center", width: "100%" }}>
          React note taking app.
          <ul style={{ margin: "0", padding: "0" }}>
            <li>
              <a href="/">Home</a>
              <a href="/notetaker">NoteTaker</a>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/notetaker" component={TextEditor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
