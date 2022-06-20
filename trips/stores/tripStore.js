import { makeAutoObservable } from "mobx";

import instance from "./instance";
class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/api/trips");
      this.trips = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (trip) => {
    try {
      const response = await instance.post("/api/trips/create", trip);

      this.trips.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
