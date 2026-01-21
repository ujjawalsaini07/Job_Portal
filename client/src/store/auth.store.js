
import { create } from "zustand";
import api from "../services/api"; // Ensure api is imported if not already in the file context

const useAuthStore = create((set) => ({
  user: null,
  accesstoken: null,
  isAuthenticated: false,
  loading: true, // <--- ADD THIS LINE

  login: (user, accesstoken) =>
    set({
      user,
      accesstoken,
      isAuthenticated: true,
      loading: false, // It's good practice to ensure this is false here too
    }),

  logout: () =>
    set({
      user: null,
      accesstoken: null,
      isAuthenticated: false,
      loading: false,
    }),

  refresh: async () => {
    try {
      const res = await api.get("/auth/refresh");
      set({
        user: res.data.user,
        accesstoken: res.data.accesstoken,
        isAuthenticated: true,
        loading: false, 
      });
    } catch {
      set({
        user: null,
        accesstoken: null,
        isAuthenticated: false,
        loading: false, 
      });
    }
  },
}));

export default useAuthStore;
