import { SERVICE_CONFIG } from "./service.config";

import axios from "axios";

export const generateSentiment = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${SERVICE_CONFIG.BASE_URL}/sentiment`, payload)
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
