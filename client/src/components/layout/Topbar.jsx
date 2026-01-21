import useAuthStore from "../../store/auth.store";

const Topbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between">
      <p className="font-medium">Welcome, {user.name}</p>
      <button
        onClick={logout}
        className="text-sm text-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;
