import { create } from "zustand";
import { loginUser } from "../services/login-user";
import { createJSONStorage, persist } from "zustand/middleware";
interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
type UserParams = Pick<User, "email" | "password">;

interface UserState {
  user: User | null;
  setUser: (user: UserParams) => Promise<void>;
  logoutUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: async (_user) => {
        const user = await loginUser(_user);

        if (user?.data) {
          set({ user: user.data });
        }
      },
      logoutUser: () => {
        set({ user: null });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
