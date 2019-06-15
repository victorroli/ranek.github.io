import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  }
};

export function getCep(cep) {
  return axios.get(`http://viacep.com.br/ws/${cep}/json/`);
}
