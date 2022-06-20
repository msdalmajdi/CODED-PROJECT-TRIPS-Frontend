import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.151:8095",
});

export default instance;
