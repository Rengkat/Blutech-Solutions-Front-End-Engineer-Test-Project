interface AppState {
  products: any[];
  loading: boolean;
  error: boolean;
  isMenuOpen: boolean;
}

type Action =
  | { type: "LOADING"; payload: boolean }
  | { type: "OPEN_MENU"; payload: boolean }
  | { type: "FETCH_PRODUCTS"; payload: any[] }
  | { type: "ERROR"; payload: boolean };

const Reducer = (state: AppState, action: Action): AppState => {
  if (action.type === "OPEN_MENU") {
    return { ...state, isMenuOpen: !state.isMenuOpen };
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

  return state;
};

export default Reducer;
