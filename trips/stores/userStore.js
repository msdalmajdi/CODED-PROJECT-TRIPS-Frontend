import jwt_decode from "jwt-decode";
import instance from "./instance";
import { makeAutoObservable } from "mobx";
import * as SecureStore from "expo-secure-store";
import profileStore from "./profileStore";

class UserStore {
  user = null;
  allUsers = [];
  constructor() {
    makeAutoObservable(this);
  }
  signup = async (newUser, setShowError) => {
    try {
      // console.log(newUser);
      const response = await instance.post("/signup", newUser);
      instance.defaults.headers.common.Authorization = `Bearer${response.data.token}`;
      // console.log(response.data.token);
      this.user = jwt_decode(response.data.token);
      // console.log(response.data);
      await SecureStore.setItemAsync("token", response.data.token);
      profileStore.fetchProfile();
      userStore.getUsers();
      setShowError(false);
    } catch (error) {
      setShowError(true);
    }
  };

  signin = async (newUser, setShowErrorin) => {
    try {
      console.log(newUser);
      const response = await instance.post("/signin", newUser);
      // console.log("response = " + response)
      instance.defaults.headers.common.Authorization = `Bearer${response.data.token}`;
      this.user = jwt_decode(response.data.token);
      //console.log(this.user);
      await SecureStore.setItemAsync("token", response.data.token);
    } catch (error) {
      setShowErrorin(true);
    }
  };

  signout = async (newUser) => {
    try {
      this.user = null;
      instance.defaults.headers.common.Authorization = null;
      SecureStore.deleteItemAsync("token");
    } catch (error) {}
  };

  checkForToken = async () => {
    const userToken = await SecureStore.getItemAsync("token");
    if (userToken) {
      const newUser = jwt_decode(userToken);
      this.user = newUser;
    }
  };
  getUsers = async () => {
    try {
      const response = await instance.get("/user");
      this.allUsers = response.data;
    } catch (error) {
      console.log("userStore -> getUsers -> error", error);
    }
  };
  getUserById = (userId) => {
    return this.allUsers.find((user) => user._id === userId);
  };
}

const userStore = new UserStore();
userStore.checkForToken();
userStore.getUsers();
export default userStore;
