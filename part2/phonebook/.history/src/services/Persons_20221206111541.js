import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

const create = nameObject => {
  const request = axios.post(baseUrl, nameObject)
  return request.then(response => response.data)
}


export default { getAll, create }