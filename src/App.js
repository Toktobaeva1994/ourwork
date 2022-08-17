import ProductContext from "./context/ProductContext.js";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ProductContext>
        <MainRoutes />
      </ProductContext>
    </>
  );
}

export default App;
