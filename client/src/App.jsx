import { useEffect } from "react";
import useAuthStore from "./store/auth.store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import LandingPage from "./pages/public/LandingPage.jsx";
import Unauthorized from "./pages/public/Unauthorized.jsx";
import Register from "./pages/auth/Register.jsx";

function App() {
  const refresh = useAuthStore((s) => s.refresh);

  useEffect(() => {
    refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Role-specific Registration Routes */}
        <Route path="/register/candidate" element={<Register initialRole="CANDIDATE" />} />
        <Route path="/register/recruiter" element={<Register initialRole="RECRUITER" />} />
        
        {/* Fallback generic register (optional, keeps role selection) */}
        <Route path="/register" element={<Register />} />
        
        <Route path="/unauthorized" element={<Unauthorized/>} />

        {/* PROTECTED */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;