import axios from "axios";
export class JumpCloudService {
  constructor() {
    this.instance = axios.create({
      baseURL: "/api",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  async getUsers() {
    const response = await this.instance.get("/systemusers");
    return response.data.results;
  }
  async newUser(user) {
    const response = await this.instance.post("/systemusers", {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
    });
    return response.data.results;
  }
  async editUser(user) {
    const response = await this.instance.put(`/systemusers/${user._id}`, {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
    });
    return response.data.results;
  }
  async deleteUser(deletedUserId) {
    const response = await this.instance.delete(
      `/systemusers/${deletedUserId}`
    );
    return response.data.results;
  }
}
