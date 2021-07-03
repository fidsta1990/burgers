import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <CartProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </CartProvider>,
  document.getElementById("root")
);
