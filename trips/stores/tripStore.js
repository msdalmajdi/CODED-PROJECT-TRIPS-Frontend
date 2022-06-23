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

  getTripById = (id) => {
    return this.trips.find((trip) => trip._id === id);
  };

  createTrip = async (trip, success, failure) => {
    try {
      const response = await instance.post("/api/trips/create", trip);

      this.trips.push(response.data);
      success(true);
    } catch (error) {
      console.log(error);
      failure(true);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      const response = await instance.delete(
        `/api/trips/delete/${tripId}`,
        tripId
      );

      const filteredData = this.trips.filter((trip) => trip._id !== tripId);
      this.trips = filteredData;
    } catch (error) {
      console.log(error);
    }
  };
  updateTrip = async (tripId, editedTrip, success, failure) => {
    try {
      await instance.put(`/api/trips/update/${tripId}`, editedTrip);
      this.fetchTrips();
      success(true);
    } catch (error) {
      failure(true);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
