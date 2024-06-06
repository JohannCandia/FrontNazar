import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoginPage } from "../login/pages/LoginPage";
import HomePage from "../ticket/pages/HomePage";

export const AppRouter = () => {
  const { authStatus } = useAuth();


  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <Route path="/*" element={<HomePage />} />
      )}
    </Routes>
  );
};