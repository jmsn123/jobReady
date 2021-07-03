import "./App.css";
import Cart from "./components/cart";
import Login from "./components/login";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TextEditor } from "./components/noteTaker";
import { ThemeProvider } from "styled-components";
import { GlobalStlyes } from "./global";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/hero";
import { Container } from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalStlyes />

      <Container>
        {" "}
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/notetaker" component={TextEditor} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
