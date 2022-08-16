import CartContextProvider from "./components/context/CartContext.js";
import ProductContextProvider from "./components/context/ProductContext.js";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <MainRoutes />
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
