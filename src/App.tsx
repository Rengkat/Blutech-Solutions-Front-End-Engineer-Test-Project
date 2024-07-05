import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedRoute from "./components/SharedRoute";
import Department from "./pages/Dashboard/Department";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";
import Others from "./pages/Others/Others";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

function App() {
  const { user } = useContext(AppContext);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <SharedRoute /> : <Login />}>
          <Route index element={<Department />} />
          <Route path="/others" element={<Others />} />
        </Route>
        <Route path="/login" element={user ? <SharedRoute /> : <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
