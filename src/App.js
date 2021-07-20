import React, { Fragment, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Global from "./components/GlobalStyles/global";
import { Home, About, Menu, Contact, Error } from "./pages/";
import Cart from "./components//Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const location = useLocation();
  const checkLocation = location.pathname !== "/contact";

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
      {checkLocation ? <Footer /> : ""}
    </Fragment>
  );
}

export default App;
