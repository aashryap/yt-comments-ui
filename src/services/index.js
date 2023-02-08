import axios from "axios";
export const instance = axios.create();
instance.interceptors.request.use(function () {
  console.log("HEREEEEE");
  return;
});
