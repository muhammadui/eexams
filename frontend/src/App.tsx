import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import VerifyOtpPage from "./pages/auth/VerifyOtpPage";
import Accommodation from "./pages/dashboard/Accommodation";
import Courses from "./pages/dashboard/Courses";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Exams from "./pages/dashboard/Exams";
import Fees from "./pages/dashboard/Fees";
import Profile from "./pages/dashboard/Profile";
import Result from "./pages/dashboard/Result";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="fees" element={<Fees />} />
          <Route path="courses" element={<Courses />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="exams" element={<Exams />} />
          <Route path="result" element={<Result />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="verify-otp" element={<VerifyOtpPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
