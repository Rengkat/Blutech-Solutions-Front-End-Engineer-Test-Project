import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
export const AppContext = createContext();
const initialState = {
  products: [],
  loading: false,
  error: false,
};
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const fetchProducts = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const data = await fetch("http://3.88.1.181:8000/products/public/catalog");
      const response = await data.json();
      console.log(response);
      dispatch({ type: "FETCH_PRODUCTS", payload: response });
      dispatch({ type: "ERROR", payload: false });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "ERROR", payload: true });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
