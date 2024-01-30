import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductIdPage from "./pages/ProductIdPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import CartPage from "./pages/CartPage";
import PurchasesPage from "./pages/PurchasesPage";
import NavBar from "./components/shared/NavBar";
import VerifyPage from "./components/RegisterPage/VerifyPage";
import FormResetPassword from "./components/ResetPassword/FormResetPassword";
import FormUpdatePassword from "./components/ResetPassword/FormUpdatePassword";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify_email/:code" element={<VerifyPage />} />
        <Route path="/reset-password" element={<FormResetPassword />} />
        <Route path="/reset_password/:code" element={<FormUpdatePassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
