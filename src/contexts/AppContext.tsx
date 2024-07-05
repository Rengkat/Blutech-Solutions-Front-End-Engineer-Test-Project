import { createContext, useEffect, useReducer, ReactNode } from "react";
import Reducer from "./Reducer";
import { products } from "../unilities/helper";
import { addUserToLocalStorage, getUserFromLocalStorage } from "./localStorage";
interface User {
  username: string;
  password: string;
}
interface AppContextState {
  products: any[];
  loading: boolean;
  error: boolean;
  isMenuOpen: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
  login: (user: User) => void;
  user: User | null;
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
  closeSideBar: () => {},
  login: () => {},
  user: getUserFromLocalStorage(),
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
  const closeSideBar = () => {
    dispatch({ type: "CLOSE_MENU", payload: false });
  };
  const login = (user: User) => {
    dispatch({ type: "LOGIN", payload: user });
    addUserToLocalStorage(user);
  };
  return (
    <AppContext.Provider value={{ ...state, openSideBar, closeSideBar, login }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
