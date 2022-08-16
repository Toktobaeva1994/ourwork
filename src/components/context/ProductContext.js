import axios from "axios";
import { createContext, useContext, useReducer } from "react";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (newProduct) => {
    await axios.post(" http://localhost:8000/products", newProduct);
    getProducts();
  };

  const getProducts = async () => {
    const { data } = await axios(
      `${"http://localhost:8000/products"}/${window.location.search}`
    );

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  return (
    <productContext.Provider
      value={{ addProduct, getProducts, products: state.products }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
