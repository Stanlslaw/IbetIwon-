import { create } from "zustand";

import userService from "../services/user.service";
import { UserDto } from "../../types.dto";

import { initData } from "@telegram-apps/sdk";

interface UserStoreState {
  user: UserDto | null;
  loading: boolean;
  error: null | object;
  getUser: () => void;
  updateUser: (currentUser: UserDto, user: Partial<UserDto>) => void;
}

export const useUserStore = create<UserStoreState>()((set) => ({
  user: null,
  loading: false,
  error: null,
  getUser: async () => {
    try {
      set(() => ({ loading: true }));
      const user = await userService.getUser(initData.user()?.id);
      set(() => ({ loading: false, user }));
    } catch (err) {
      set(() => ({ error: err as object, loading: true }));
    }
  },
  updateUser: async (currentUser: UserDto, userUpdated: Partial<UserDto>) => {
    try {
      set(() => ({ loading: true }));
      const { id, ...lostUser } = userUpdated;
      await userService.updateUser({ id, ...lostUser });
      set(() => ({
        loading: false,
        user: { ...currentUser, ...userUpdated },
      }));
    } catch (err) {
      set(() => ({ error: err as object, loading: true }));
    }
  },
}));
