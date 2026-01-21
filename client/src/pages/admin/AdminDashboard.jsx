import { useEffect, useState } from "react";
import api from "../../services/api";
import DashboardLayout from "../../components/layout/DashboardLayout";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats").then((res) => {
      setStats(res.data);
    });
  }, []);

  if (!stats) return (
    <DashboardLayout>
        <div className="p-10 text-center text-gray-500">Loading statistics...</div>
    </DashboardLayout>
  );

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500">Platform-wide statistics and management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={stats.usersCount} />
        <StatCard title="Jobs Posted" value={stats.jobsCount} />
        {/* Placeholders for symmetry if needed */}
        <StatCard title="Active Companies" value="-" />
        <StatCard title="Pending Verifications" value="-" />
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
    <h2 className="text-4xl font-bold text-gray-900 mt-2">{value}</h2>
  </div>
);

export default AdminDashboard;