import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductIdPage from "./pages/ProductIdPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import CartPage from "./pages/CartPage";
import PurchasesPage from "./pages/PurchasesPage";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/purchases" element={<PurchasesPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
