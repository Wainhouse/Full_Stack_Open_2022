import axios from "axios";
const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = (nameObject) => {
  const request = axios.post(baseUrl, nameObject);
  return request.then((response) => response.data);
};

const deleteRequest = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateRequest = (id) => {
  const request = axios.put(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteRequest };
