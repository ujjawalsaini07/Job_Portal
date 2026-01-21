import useAuthStore from "../store/auth.store";
import CandidateDashboard from "./candidate/CandidateDashboard.jsx";
import RecruiterDashboard from "./recruiter/RecruiterDashboard.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";

const Dashboard = () => {
  const { user } = useAuthStore();

  if (user.role === "CANDIDATE") return <CandidateDashboard />;
  if (user.role === "RECRUITER") return <RecruiterDashboard />;
  if (user.role === "ADMIN") return <AdminDashboard />;

  return null;
};

export default Dashboard;
