interface User {
  username: string;
  password: string;
}
interface AppState {
  products: any[];
  loading: boolean;
  error: boolean;
  isMenuOpen: boolean;
  user: User | null;
}

type Action =
  | { type: "LOADING"; payload: boolean }
  | { type: "OPEN_MENU"; payload: boolean }
  | { type: "CLOSE_MENU"; payload: boolean }
  | { type: "FETCH_PRODUCTS"; payload: any[] }
  | { type: "ERROR"; payload: boolean }
  | { type: "LOGIN"; payload: any };

const Reducer = (state: AppState, action: Action): AppState => {
  if (action.type === "OPEN_MENU") {
    return { ...state, isMenuOpen: action.payload };
  }
  if (action.type === "CLOSE_MENU") {
    return { ...state, isMenuOpen: action.payload };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: action.payload };
  }
  if (action.type === "FETCH_PRODUCTS") {
    return { ...state, products: action.payload };
  }

  if (action.type === "ERROR") {
    return { ...state, error: action.payload };
  }
  if (action.type === "LOGIN") {
    return { ...state, user: action.payload };
  }

  return state;
};

export default Reducer;
