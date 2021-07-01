import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>,
  document.getElementById("root")
);
