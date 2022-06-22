import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  profiles = [];
  isLoading = true;
  fetchProfile = async () => {
    try {
      const response = await instance.get("/api/profile");
      this.profiles = response.data;
      this.isLoading = false;
      console.log(this.profiles);
    } catch (error) {
      console.log("ProfileStore -> fetchProfile -> error", error);
    }
  };

  updateProfile = async (updatedProfile, profileId) => {
    try {
      const res = await instance.put(
        `/api/profile/${profileId}`,
        updatedProfile
      );
      this.profiles = this.profiles.map((profile) =>
        profile._id === profileId ? res.data : profile
      );
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };
  getProfileById(userId) {
    return this.profiles.find((profile) => profile.user._id === userId);
  }
}

const profileStore = new ProfileStore();
profileStore.fetchProfile();
export default profileStore;
