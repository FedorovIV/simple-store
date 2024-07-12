import ProductsContainer from "./components/ProductsContainer";
import { RequireAuth } from "./features/RequireAuth";
import AuthPage from "./pages/AuthPage/AuthPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UploadFile from "./pages/UploadFile/UploadFile";
import Layout from "./widgets/Layout";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<ProductsContainer />} />
          <Route index element={<Navigate to="main" />} />
          <Route path="auth" element={<AuthPage />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route path="basket" element={<BasketPage />} />
          <Route path="upload/file" element={<UploadFile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
