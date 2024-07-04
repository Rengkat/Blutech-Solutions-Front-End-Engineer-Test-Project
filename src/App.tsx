import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedRoute from "./components/SharedRoute";
import Department from "./pages/Dashboard/Department";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedRoute />}>
          <Route index element={<Department />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
