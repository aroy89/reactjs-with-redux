import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Header/Nav";
import Home from "./components/Home";
import Todo from "./components/TodoApp/index";
import ShopDashboard from "./components/OnlineShop/index";
import ShopCart from "./components/OnlineShop/ShopCart";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/todo" component={Todo} />
        <Route path="/checkout" component={ShopCart} />
        <Route path="/cart" component={ShopDashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
