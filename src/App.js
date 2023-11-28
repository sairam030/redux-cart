import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CardContainer />
    </main>
  );
}

export default App;
