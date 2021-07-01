import React, { Fragment, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Global from "./components/GlobalStyles/global";
import { Home, About, Menu, Contact, Error } from "./pages/";
import Cart from "./components//Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      <Global />
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Error} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
