import { userApi } from "../api";
import { UserDto } from "../../types.dto";
import { User } from "@telegram-apps/sdk-react";

class UserService {
  async saveUser(user: User) {
    try {
      userApi.post("/save", user);
    } catch (err) {
      console.error(err);
    }
  }

  async updateUser(user: Partial<UserDto>) {
    try {
      userApi.post("/update", user);
    } catch (err) {
      console.error(err);
    }
  }

  async getUser(id: number): Promise<UserDto | null> {
    try {
      const { data } = await userApi.get(`${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
const userService = new UserService();

export default userService;
