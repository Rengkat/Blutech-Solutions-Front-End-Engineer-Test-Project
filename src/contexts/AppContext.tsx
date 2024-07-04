import { createContext, useEffect, useReducer, ReactNode } from "react";
import Reducer from "./Reducer";
import { products } from "../unilities/helper";

interface AppContextState {
  products: any[];
  loading: boolean;
  error: boolean;
  isMenuOpen: boolean;
  openSideBar: () => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const initialState: AppContextState = {
  products: [],
  loading: false,
  error: false,
  isMenuOpen: false,
  openSideBar: () => {},
};
export const AppContext = createContext<AppContextState>(initialState);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      // For real data fetching
      // const data = await fetch("http://3.88.1.181:8000/products/public/catalog");
      // const response = await data.json();
      // console.log(response);
      const response = products;
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

  const openSideBar = () => {
    dispatch({ type: "OPEN_MENU", payload: true });
  };

  return <AppContext.Provider value={{ ...state, openSideBar }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
