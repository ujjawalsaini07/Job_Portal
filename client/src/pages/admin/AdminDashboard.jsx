import { useEffect, useState } from "react";
import api from "../../services/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats").then((res) => {
      setStats(res.data);
    });
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          Users: {stats.usersCount}
        </div>
        <div className="p-4 border rounded">
          Jobs: {stats.jobsCount}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
