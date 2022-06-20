import { makeAutoObservable } from "mobx";
import axios from "axios";
class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await axios.get("http://172.20.10.2:8095/api/trips");
      this.trips = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createTrip = async (trip) => {
    try {
      const response = await axios.post(
        "http://172.20.10.2:8095/api/trips/create",
        trip
      );

      this.trips.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
