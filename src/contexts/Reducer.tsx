interface AppState {
  products: any[];
  loading: boolean;
  error: boolean;
}

type Action =
  | { type: "LOADING"; payload: boolean }
  | { type: "FETCH_PRODUCTS"; payload: any[] }
  | { type: "ERROR"; payload: boolean };

const Reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default Reducer;
