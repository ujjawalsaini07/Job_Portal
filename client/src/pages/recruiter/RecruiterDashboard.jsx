import { useLocation } from "react-router-dom";
import DashboardLayout from "../../components/layoutDashboard/DashboardLayout";
import useAuthStore from "../../store/auth.store";
import Home from "./Home";
import JobAdd from "./JobAdd";
import PendingApplication from "./PendingJobApplication.jsx";

const RecruiterDashboard = () => {
  const { user, logout } = useAuthStore(); 
  const location = useLocation();

  return (
    <DashboardLayout user={user} logout={logout}> 
      {location.pathname === "/dashboard" && <Home/>}
      {location.pathname === "/dashboard/postJob" && <JobAdd/>}
      {location.pathname === "/dashboard/pending" && <PendingApplication/>}
    </DashboardLayout>
  );
};

export default RecruiterDashboard;