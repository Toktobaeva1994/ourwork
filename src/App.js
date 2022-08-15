import ProductContextProvider from "./components/context/ProductContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
    </>
  );
}

export default App;
